/**
 * 页脚组件
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-16" style={{ backgroundColor: '#2D2926' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-serif font-bold"
              style={{ color: '#F5F0EB' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(200, 195, 210, 0.7)' }}
            >
              {t('footer.madeWith')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'rgba(200, 190, 220, 0.5)' }}
            >
              {t('nav.navigation')}
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { key: 'home', path: '/' },
                { key: 'projects', path: '/projects' },
                { key: 'about', path: '/about' },
                { key: 'blog', path: '/blog' }
              ].map((link) => (
                <motion.a
                  key={link.key}
                  href={link.path}
                  className="transition-colors"
                  style={{ color: 'rgba(200, 195, 210, 0.7)' }}
                  whileHover={{ x: 5, color: '#E8A090' }}
                >
                  {t(`nav.${link.key}`)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'rgba(200, 190, 220, 0.5)' }}
            >
              {t('footer.followMe')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'rgba(200, 195, 210, 0.7)' }}
                  whileHover={{ scale: 1.2, rotate: 5, color: '#E8A090' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: 'rgba(200, 190, 220, 0.1)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'rgba(200, 195, 210, 0.5)' }}
          >
            © {currentYear} Portfolio. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
