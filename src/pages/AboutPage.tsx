/**
 * 关于我页面组件
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Download, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD'] },
  ];

  const experiences = [
    {
      title: isEnglish ? 'Senior Software Engineer' : '高级软件工程师',
      company: 'Tech Company A',
      period: '2022 - ' + (isEnglish ? 'Present' : '至今'),
      description: isEnglish
        ? 'Led the development of customer-facing web applications serving millions of users.'
        : '领导面向客户的 Web 应用开发，服务数百万用户。',
    },
    {
      title: isEnglish ? 'Software Engineer' : '软件工程师',
      company: 'Startup B',
      period: '2020 - 2022',
      description: isEnglish
        ? 'Built and maintained scalable microservices architecture for e-commerce platform.'
        : '为电商平台构建和维护可扩展的微服务架构。',
    },
    {
      title: isEnglish ? 'Junior Developer' : '初级开发人员',
      company: 'Agency C',
      period: '2018 - 2020',
      description: isEnglish
        ? 'Developed responsive websites and web applications for various clients.'
        : '为各种客户开发响应式网站和 Web 应用。',
    },
  ];

  const education = [
    {
      degree: isEnglish ? 'B.S. Computer Science' : '计算机科学学士',
      school: 'University Name',
      period: '2014 - 2018',
    },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-anthropic-cream pt-24 pb-16">
      {/* 动态背景 */}
      <AnimatedBackground variant="particles" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold text-anthropic-charcoal mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-anthropic-taupe">{t('about.subtitle')}</p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Avatar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/*
                头像占位 - 可替换为实际头像图片
                请将图片放置在 public/images/avatar.jpg 或修改下面的 src
              */}
              <div className="w-72 h-72 rounded-2xl overflow-hidden bg-anthropic-taupe/20 flex items-center justify-center border-4 border-white shadow-xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-anthropic-terracotta/20 flex items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-anthropic-terracotta">YN</span>
                  </div>
                  <p className="text-anthropic-taupe text-sm">{isEnglish ? 'Your Photo' : '你的照片'}</p>
                </div>
              </div>
              {/*
                替换为实际头像图片请使用以下代码：
                <img
                  src="/images/avatar.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-2xl object-cover border-4 border-white shadow-xl"
                />
              */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-anthropic-terracotta rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              >
                <span className="text-2xl">👋</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-4">
              {isEnglish ? 'Hello!' : '你好！'}
            </h2>
            <p className="text-anthropic-taupe leading-relaxed mb-6">
              {t('about.bio')}
            </p>
            <p className="text-anthropic-taupe leading-relaxed mb-8">
              {isEnglish
                ? 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge through technical writing.'
                : '当我不写代码时，你可以发现我在探索新技术、为开源项目贡献代码，或通过技术写作分享知识。'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-anthropic-taupe"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="text-anthropic-terracotta" />
                <span>hello@example.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-anthropic-taupe"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="text-anthropic-terracotta" />
                <span>{isEnglish ? 'San Francisco, CA' : '旧金山，加利福尼亚'}</span>
              </motion.div>
            </div>

            {/* Social Links & Download */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-anthropic-taupe/30 flex items-center justify-center text-anthropic-taupe hover:bg-anthropic-terracotta hover:text-white hover:border-anthropic-terracotta transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
              <motion.button
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-anthropic-charcoal text-anthropic-cream rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                {isEnglish ? 'Resume' : '简历'}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-8 text-center">
            {t('about.skills')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="p-6 bg-white rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-anthropic-terracotta mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-anthropic-taupe/10 text-anthropic-taupe rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(180, 100, 75, 0.2)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-8 text-center">
            {t('about.experience')}
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-anthropic-taupe/20 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-anthropic-terracotta" />
                <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-anthropic-charcoal">{exp.title}</h3>
                    <span className="text-sm text-anthropic-taupe">{exp.period}</span>
                  </div>
                  <p className="text-anthropic-terracotta font-medium mb-2">{exp.company}</p>
                  <p className="text-anthropic-taupe text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-8 text-center">
            {t('about.education')}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-anthropic-taupe/20 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-anthropic-terracotta" />
                <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-anthropic-charcoal">{edu.degree}</h3>
                    <span className="text-sm text-anthropic-taupe">{edu.period}</span>
                  </div>
                  <p className="text-anthropic-terracotta font-medium">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          className="text-center py-12 bg-anthropic-charcoal rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-cream mb-4">
            {t('about.contact')}
          </h2>
          <p className="text-anthropic-cream/70 mb-8 max-w-md mx-auto">
            {isEnglish
              ? 'Interested in working together? Feel free to reach out!'
              : '有兴趣一起工作吗？随时联系我！'}
          </p>
          <motion.a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-anthropic-terracotta text-anthropic-cream rounded-full font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(180, 100, 75, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            {isEnglish ? 'Send an Email' : '发送邮件'}
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
