export const navbar = [
  {
    text: 'Rust 编程',
    icon: 'Rust',
    children: [
      {
        text: '基础',
        children: [
          { text: 'Rust 编程之道', link: '/docs/books/rust/RustBianChengZhiDao/README.md' }
        ]
      },
      {
        text: '进阶',
        children: [
          { text: 'Rust 权威指南', link: '/docs/books/rust/RustQuanWeiZhiNan/README.md' }
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
          { text: 'Java 8 实战', link: '/docs/books/java/Java8ShiZhan/README.md' }
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
          { text: 'WebAssembly 实战', link: '/docs/books/fontend/WebAssemblyShiZhan/README.md' }
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
