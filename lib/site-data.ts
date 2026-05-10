export type Article = {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  image: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'nextjs-fullstack-actions',
    title: 'Building a Full-Stack App with Next.js 14 and Server Actions',
    description:
      'Exploring the new features in Next.js and how Server Actions simplify full-stack development.',
    date: 'May 16, 2024',
    readTime: '6 min read',
    category: 'Next.js',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    content: [
      'Server Actions changed the way I think about small product workflows. Instead of wiring a separate endpoint for every form, I can keep the mutation close to the interface and still preserve a clear server boundary.',
      'The most important habit is to keep actions boring. Validate input, call a focused data function, return a predictable result, and let the UI decide how much feedback the user needs.',
      'For personal projects and internal tools, this shape keeps the codebase compact without making it feel magical.',
    ],
  },
  {
    slug: 'react-server-components-deep-dive',
    title: '深入理解 React Server Components',
    description:
      '全面理解 RSC 的工作原理和使用场景，梳理数据边界和交互边界。',
    date: 'May 10, 2024',
    readTime: '8 min read',
    category: 'React',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    content: [
      'React Server Components are not a replacement for client components. They are a way to move static and data-heavy work closer to the server so the client can stay lighter.',
      'I like to draw the boundary by asking one question: does this component need browser state, effects, or event handlers? If the answer is no, it is usually a good server component candidate.',
      'The result is a calmer application tree: fewer bundles, clearer data access, and client components reserved for actual interaction.',
    ],
  },
  {
    slug: 'bun-elysia-high-performance-api',
    title: '使用 Bun.js 构建高性能后端服务',
    description:
      'Bun 的特性、性能优势以及如何用 Elysia 搭建稳定的接口服务。',
    date: 'May 2, 2024',
    readTime: '7 min read',
    category: 'Bun.js',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    content: [
      'Bun and Elysia make API prototyping feel fast, but the real advantage is the small surface area. A route, a schema, and a handler can stay readable even as the service grows.',
      'Performance is useful, but predictable structure matters more. I still keep validation, persistence, and side effects in separate modules so the route layer stays easy to scan.',
      'That balance makes the stack pleasant for side projects without painting the project into a corner later.',
    ],
  },
  {
    slug: 'photography-light-notes',
    title: '摄影笔记：日落时分的光影魔法',
    description:
      '记录一次日落拍摄中的构图、曝光、色彩和等待好光线的经验。',
    date: 'Apr 28, 2024',
    readTime: '5 min read',
    category: '摄影随笔',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    content: [
      'Sunset rewards patience. The frame can look flat ten minutes before the color arrives, and then suddenly the whole scene finds its shape.',
      'I usually expose for the highlights first, then watch how shadows fall across the foreground. A darker foreground can make the sky feel more luminous.',
      'The best photographs from a walk are often the ones made after I almost decided to leave.',
    ],
  },
]

export const categories = ['All Posts', 'React', 'Next.js', 'Node.js', 'Bun.js', 'Elysia', 'Python', '摄影随笔']

export type Photo = {
  title: string
  category: string
  src: string
  location: string
  camera: string
  settings: string
  className?: string
}

export const photos: Photo[] = [
  {
    title: 'Lotus after rain',
    category: 'Flowers',
    src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80',
    location: 'Hangzhou, China',
    camera: 'Nikon Z6 II',
    settings: '70mm  f/2.8  1/250s  ISO 100',
    className: 'sm:row-span-2',
  },
  {
    title: 'Alpine mirror',
    category: 'Mountains',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
    location: 'Lugano, Switzerland',
    camera: 'Nikon Z6 II',
    settings: '24mm  f/8  1/160s  ISO 100',
  },
  {
    title: 'Sunset shore',
    category: 'Sunset',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    location: 'Qingdao, China',
    camera: 'Nikon Z6 II',
    settings: '35mm  f/5.6  1/320s  ISO 100',
  },
  {
    title: 'Green valley road',
    category: 'Mountains',
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80',
    location: 'Yunnan, China',
    camera: 'Nikon Z fc',
    settings: '24mm  f/7.1  1/200s  ISO 100',
  },
  {
    title: 'Wild daisies',
    category: 'Flowers',
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    location: 'Dali, China',
    camera: 'Nikon Z6 II',
    settings: '70mm  f/2.8  1/500s  ISO 100',
    className: 'sm:row-span-2',
  },
  {
    title: 'Blue butterfly',
    category: 'Macro',
    src: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    location: 'Suzhou, China',
    camera: 'Nikon Z6 II',
    settings: '105mm  f/4  1/400s  ISO 200',
  },
  {
    title: 'Morning peaks',
    category: 'Mountains',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    location: 'Sichuan, China',
    camera: 'Nikon Z7',
    settings: '35mm  f/8  1/250s  ISO 64',
  },
  {
    title: 'Valley river',
    category: 'Lakes',
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    location: 'Guilin, China',
    camera: 'Nikon Z fc',
    settings: '28mm  f/5.6  1/200s  ISO 100',
    className: 'sm:col-span-2',
  },
  {
    title: 'Waterfall path',
    category: 'Lakes',
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80',
    location: 'Guizhou, China',
    camera: 'Nikon Z6 II',
    settings: '24mm  f/11  1/20s  ISO 100',
  },
]

export const projects = [
  {
    name: 'next-fullstack-starter',
    description:
      'A full-stack Next.js starter with auth, database, and deployment.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    href: 'https://github.com',
  },
  {
    name: 'bun-elysia-api-kit',
    description: 'Modern RESTful API kit with Bun, Elysia, and TypeScript.',
    image:
      'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=500&q=80',
    tags: ['Bun', 'Elysia', 'TypeScript'],
    href: 'https://github.com',
  },
  {
    name: 'react-photo-gallery',
    description: 'Beautiful responsive photo gallery built with React.',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'TailwindCSS'],
    href: 'https://github.com',
  },
  {
    name: 'LensNote',
    description: 'A photography notes app for locations, settings, and ideas.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80',
    tags: ['Next.js', 'PostgreSQL'],
    href: 'https://github.com',
  },
]

export const socialLinks = [
  { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com' },
  { label: 'Twitter / X', value: '@yourusername', href: 'https://x.com' },
  { label: 'Instagram', value: '@yourusername', href: 'https://instagram.com' },
  { label: '500px', value: '500px.com/yourusername', href: 'https://500px.com' },
  { label: '掘金', value: 'juejin.cn/user/yourusername', href: 'https://juejin.cn' },
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'Articles RSS', value: '/rss.xml', href: '/rss.xml' },
  { label: 'Vercel', value: 'vercel.com/yourusername', href: 'https://vercel.com' },
  { label: 'YouTube', value: 'youtube.com/@yourname', href: 'https://youtube.com' },
]
