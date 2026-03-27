/**
 * 博客文章数据
 */

// 博客文章接口定义
export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  category: string;
  categoryEn: string;
  excerpt: string;
  excerptEn: string;
  content?: string;
  contentEn?: string;
  readMoreUrl?: string;
  featured: boolean;
  readingTime: string;
  readingTimeEn: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React',
    titleEn: '使用 React 构建现代 Web 应用',
    date: '2024-03-15',
    category: 'Web Development',
    categoryEn: 'Web 开发',
    excerpt: 'Learn the best practices and patterns for building scalable React applications. From component architecture to state management, we cover everything you need to know.',
    excerptEn: '了解构建可扩展 React 应用的最佳实践和模式。从组件架构到状态管理，我们涵盖您需要知道的一切。',
    readMoreUrl: 'https://blog.example.com/react-best-practices',
    featured: true,
    readingTime: '8 min read',
    readingTimeEn: '8 分钟阅读'
  },
  {
    id: '2',
    title: 'The Art of UI Animation',
    titleEn: 'UI 动画的艺术',
    date: '2024-03-08',
    category: 'Design',
    categoryEn: '设计',
    excerpt: 'Discover how to create smooth, meaningful animations that enhance user experience without compromising performance. Tips and tricks for using Framer Motion effectively.',
    excerptEn: '探索如何创建流畅、有意义的动画，在不牺牲性能的情况下提升用户体验。使用 Framer Motion 的技巧和窍门。',
    readMoreUrl: 'https://blog.example.com/ui-animation',
    featured: true,
    readingTime: '6 min read',
    readingTimeEn: '6 分钟阅读'
  },
  {
    id: '3',
    title: 'TypeScript Advanced Patterns',
    titleEn: 'TypeScript 高级模式',
    date: '2024-02-28',
    category: 'Programming',
    categoryEn: '编程',
    excerpt: 'Deep dive into advanced TypeScript patterns including generics, conditional types, and mapped types. Level up your TypeScript skills with real-world examples.',
    excerptEn: '深入探索高级 TypeScript 模式，包括泛型、条件类型和映射类型。通过实际案例提升您的 TypeScript 技能。',
    readMoreUrl: 'https://blog.example.com/typescript-patterns',
    featured: false,
    readingTime: '12 min read',
    readingTimeEn: '12 分钟阅读'
  },
  {
    id: '4',
    title: 'Accessibility in Modern Web Design',
    titleEn: '现代 Web 设计中的无障碍设计',
    date: '2024-02-15',
    category: 'Accessibility',
    categoryEn: '无障碍',
    excerpt: 'Understanding the importance of web accessibility and how to implement inclusive design patterns. Make your websites usable by everyone.',
    excerptEn: '理解 Web 无障碍设计的重要性，以及如何实现包容性设计模式。让您的网站对每个人都可用。',
    readMoreUrl: 'https://blog.example.com/accessibility',
    featured: false,
    readingTime: '10 min read',
    readingTimeEn: '10 分钟阅读'
  },
  {
    id: '5',
    title: 'Performance Optimization Techniques',
    titleEn: '性能优化技术',
    date: '2024-02-01',
    category: 'Performance',
    categoryEn: '性能',
    excerpt: 'Master the art of web performance optimization. From lazy loading to code splitting, learn how to make your applications lightning fast.',
    excerptEn: '掌握 Web 性能优化的艺术。从懒加载到代码分割，学习如何让您的应用程序如闪电般快速。',
    readMoreUrl: 'https://blog.example.com/performance',
    featured: true,
    readingTime: '15 min read',
    readingTimeEn: '15 分钟阅读'
  }
];
