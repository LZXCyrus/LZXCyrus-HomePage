/**
 * 首页组件
 * 包含 Hero 区域和交互式星图
 */
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// 增强版星空组件 - 更真实的星空效果
const StarMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; angle: number; delay: number }>>([]);
  const [shootingStarKey, setShootingStarKey] = useState(0);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 鼠标移动跟踪
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  // 生成静态星星（明亮的主星）
  const staticStars = Array.from({ length: 120 }, (_, i) => ({
    id: `static-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    brightness: Math.random() * 0.6 + 0.4,
    twinkleDuration: Math.random() * 3 + 2,
    twinkleDelay: Math.random() * 5,
    hue: Math.random() > 0.85 ? 'blue' : Math.random() > 0.7 ? 'warm' : 'white',
  }));

  // 生成星座星群（较暗的连接星群）
  const constellationStars = Array.from({ length: 40 }, (_, i) => ({
    id: `constellation-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.2 + 0.3,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  // 随机生成流星
  useEffect(() => {
    const createShootingStar = () => {
      const angle = Math.random() * 60 + 20; // 20-80度
      const delay = Math.random() * 8;
      setShootingStars((prev) => [...prev.slice(-3), { id: Date.now(), angle, delay }]);
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== Date.now() - 8000));
      }, 8000);
    };

    const interval = setInterval(createShootingStar, 6000);
    return () => clearInterval(interval);
  }, []);

  // 获取星星颜色
  const getStarColor = (hue: string, brightness: number) => {
    switch (hue) {
      case 'blue':
        return `rgba(200, 220, 255, ${brightness})`;
      case 'warm':
        return `rgba(255, 230, 200, ${brightness})`;
      default:
        return `rgba(255, 255, 255, ${brightness})`;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
    >
      {/* 深空背景渐变 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(30, 25, 30, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(50, 40, 60, 0.2) 0%, transparent 40%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(40, 35, 50, 0.15) 0%, transparent 40%)
          `,
        }}
      />

      {/* 鼠标交互光晕 - 跟随鼠标移动 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(180, 160, 200, 0.08) 0%, rgba(100, 120, 180, 0.03) 30%, transparent 60%)',
        }}
        animate={{
          x: (mousePos.x - 0.5) * -30,
          y: (mousePos.y - 0.5) * -30,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />

      {/* SVG 星空层 */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {/* 星星发光滤镜 */}
          <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 柔和星芒滤镜 */}
          <filter id="softStar" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 背景星群（较暗的连接星群） */}
        {constellationStars.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill={`rgba(255, 255, 255, ${star.opacity})`}
          />
        ))}

        {/* 闪烁的主星星 */}
        {staticStars.map((star) => (
          <motion.circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill={getStarColor(star.hue, star.brightness)}
            filter="url(#starGlow)"
            animate={{
              opacity: [star.brightness * 0.5, star.brightness, star.brightness * 0.5],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: star.twinkleDuration,
              delay: star.twinkleDelay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* 流星 */}
        <AnimatePresence>
          {shootingStars.map((star) => (
            <ShootingStar key={`shooting-${star.id}`} angle={star.angle} delay={star.delay} />
          ))}
        </AnimatePresence>
      </svg>

      {/* 鼠标附近区域的高亮星星 */}
      {staticStars.slice(0, 8).map((star, i) => {
        const distance = Math.sqrt(
          Math.pow((mousePos.x * 100 - star.x) / 100, 2) +
          Math.pow((mousePos.y * 100 - star.y) / 100, 2)
        );
        const isNear = distance < 0.15;
        const extraBrightness = isNear ? 0.5 : 0;

        return (
          <motion.div
            key={`glow-${star.id}`}
            className="absolute pointer-events-none"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 8,
              height: star.size * 8,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${getStarColor(star.hue, star.brightness + extraBrightness)} 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              opacity: isNear ? [0.3, 0.8, 0.3] : 0,
              scale: isNear ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </motion.div>
  );
};

// 流星组件
const ShootingStar = ({ angle, delay }: { angle: number; delay: number }) => {
  const radians = (angle * Math.PI) / 180;
  const length = 150;
  const startX = 100 + Math.random() * 30;
  const startY = Math.random() * 50;

  return (
    <motion.line
      x1={`${startX}%`}
      y1={`${startY}%`}
      x2={`${startX - Math.cos(radians) * length}%`}
      y2={`${startY + Math.sin(radians) * length}%`}
      stroke="url(#shootingGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0, x1: `${startX}%`, y1: `${startY}%` }}
      animate={{
        opacity: [0, 1, 1, 0],
        x1: [`${startX}%`, `${startX - Math.cos(radians) * length * 1.2}%`],
        y1: [`${startY}%`, `${startY + Math.sin(radians) * length * 1.2}%`],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        ease: 'easeOut',
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 8,
      }}
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2D2926' }}>
      {/* 交互式星图背景 */}
      <StarMap />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* 顶部装饰线 - 调整为浅色 */}
          <motion.div
            className="w-px h-20 mx-auto mb-10"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(200, 190, 220, 0.5))',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-8"
            style={{
              color: '#E8A090', // 浅珊瑚色，在深色背景上更突出
              fontFamily: 'system-ui, sans-serif',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Your Name - 改为浅色以在深色背景上清晰可见 */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 leading-[1.05]"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              color: '#F5F0EB', // 浅米白色
              textShadow: '0 0 40px rgba(200, 180, 220, 0.3)', // 添加柔和光晕
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.name')}
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-10 font-light tracking-wide"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: '#C8B8D8', // 浅薰衣草色
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            className="text-base md:text-lg max-w-xl mx-auto mb-14 leading-relaxed"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: 'rgba(200, 195, 210, 0.85)', // 浅灰紫色
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/projects">
              <motion.button
                className="group px-12 py-5 font-medium flex items-center gap-3 transition-all rounded-full"
                style={{
                  backgroundColor: '#B4644B',
                  color: '#FAF7F2',
                  fontFamily: 'system-ui, sans-serif',
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 12px 40px rgba(180, 100, 75, 0.5)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('hero.cta')}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/about">
              {/* About 按钮 - 改为浅色边框和浅色文字 */}
              <motion.button
                className="px-12 py-5 font-medium transition-all rounded-full"
                style={{
                  border: '1px solid rgba(200, 190, 220, 0.5)',
                  color: '#F5F0EB', // 浅米白色文字
                  fontFamily: 'system-ui, sans-serif',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', // 微透明背景
                }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'rgba(200, 190, 220, 0.15)',
                  borderColor: 'rgba(200, 190, 220, 0.8)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('nav.about')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
