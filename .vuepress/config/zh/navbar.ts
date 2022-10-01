export const navbar = [
  {
    text: 'Rust 编程',
    icon: 'Rust',
    children: [
      {
        text: '基础',
        children: [
          { text: 'Rust 编程之道', link: '/docs/books/rust/RustBianChengZhiDao/' }
        ]
      },
      {
        text: '进阶',
        children: [
          { text: 'Rust 权威指南', link: '/docs/books/rust/RustQuanWeiZhiNan/' }
        ]
      }
    ]
  },
  {
    text: 'Java 编程',
    icon: 'Java',
    children: [
      {
        text: '基础',
        children: [
          { text: 'Java 8 实战', link: '/docs/books/java/Java8ShiZhan/' }
        ]
      },
      {
        text: '进阶',
        children: [
          { text: 'Nacos 架构与原理', link: '/docs/books/java/NacosJiaGouYuYuanLi/' }
        ]
      }
    ]
  },
  {
    text: '前端编程',
    icon: 'FontEnd',
    children: [
      {
        text: '进阶',
        children: [
          { text: 'WebAssembly 实战', link: '/docs/books/fontend/WebAssemblyShiZhan/' }
        ]
      }
    ]
  },
  {
    text: 'GitHub',
    icon: 'GitHub',
    link: 'https://github.com/rqh656418510/reading-notes'
  }
]
