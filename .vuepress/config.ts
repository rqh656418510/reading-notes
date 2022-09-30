import { defineUserConfig } from 'vuepress'
import { themeConfig } from './config/index'
import { recoTheme } from 'vuepress-theme-reco'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'

export default defineUserConfig({

  // 基础配置
  base: '/notes/',
  debug: false,

  head: [
    ['meta', { name: 'application-name', content: 'Clay 的读书笔记' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Clay 的读书笔记' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],

  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Clay 的读书笔记',
      description: '记录 Clay 的读书笔记。',
    }
  },

  // 主题配置
  theme: recoTheme(themeConfig),

  // 插件配置
  plugins: [
    sitemapPlugin({
      excludeUrls: ['/404.html'],
      hostname: 'https://docs.techgrow.cn',
    })
  ],

  // Markdown 配置
  markdown: {
    code: {
      lineNumbers: true
    }
  }

})
