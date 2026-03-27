/**
 * i18n 国际化配置文件
 * 支持中英文双语实时切换
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 英文翻译
const en = {
  translation: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Blog',
      navigation: 'Navigation'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Your Name',
      title: 'Software Engineer & Creative Technologist',
      description: 'Crafting elegant solutions to complex problems through clean code and thoughtful design.',
      cta: 'View My Work',
      scroll: 'Scroll to explore'
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'A collection of work that showcases my skills and passion for technology.',
      viewDetails: 'View Details',
      viewLive: 'Live Demo',
      viewGithub: 'GitHub',
      tech: 'Technologies'
    },
    projectDetail: {
      title: 'Projects',
      back: 'Back to Projects',
      description: 'Description',
      technologies: 'Technologies Used',
      links: 'Project Links',
      timeline: 'Timeline'
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      bio: 'I am a passionate software engineer with a love for creating beautiful, functional, and user-friendly applications. With years of experience in full-stack development, I specialize in building modern web applications that make a difference.',
      skills: 'Skills & Expertise',
      experience: 'Experience',
      education: 'Education',
      contact: 'Get In Touch',
      email: 'Email',
      location: 'Location'
    },
    blog: {
      title: 'Technical Blog',
      subtitle: 'Thoughts, tutorials, and insights from my journey in tech.',
      readMore: 'Read More',
      noArticles: 'No articles yet. Check back soon!',
      categories: 'Categories'
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with passion and code.',
      followMe: 'Follow Me'
    },
    language: {
      toggle: '中文'
    }
  }
};

// 中文翻译
const zh = {
  translation: {
    nav: {
      home: '首页',
      projects: '项目',
      about: '关于',
      blog: '博客',
      navigation: '导航'
    },
    hero: {
      greeting: '你好，我是',
      name: '你的名字',
      title: '软件工程师 & 创意技术专家',
      description: '通过简洁的代码和深思熟虑的设计，为复杂问题打造优雅的解决方案。',
      cta: '查看作品',
      scroll: '向下滚动探索'
    },
    projects: {
      title: '精选项目',
      subtitle: '展示我的技术能力与热情的精选作品。',
      viewDetails: '查看详情',
      viewLive: '在线演示',
      viewGithub: 'GitHub',
      tech: '技术栈'
    },
    projectDetail: {
      title: '项目列表',
      back: '返回项目列表',
      description: '项目描述',
      technologies: '使用的技术',
      links: '项目链接',
      timeline: '时间线'
    },
    about: {
      title: '关于我',
      subtitle: '了解更多关于我的故事',
      bio: '我是一位充满热情的软件工程师，热爱创造美观、实用、用户友好的应用程序。在全栈开发领域拥有多年经验，专注于构建有影响力的现代 Web 应用。',
      skills: '技能与专长',
      experience: '工作经验',
      education: '教育背景',
      contact: '联系我',
      email: '邮箱',
      location: '所在地'
    },
    blog: {
      title: '技术博客',
      subtitle: '分享我在技术道路上的思考、教程与见解。',
      readMore: '阅读全文',
      noArticles: '暂无文章，敬请期待！',
      categories: '分类'
    },
    footer: {
      rights: '版权所有。',
      madeWith: '用热爱与代码制作。',
      followMe: '关注我'
    },
    language: {
      toggle: 'EN'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      zh
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
