import * as zhConfig from './zh'

export const themeConfig = {
  locales: {
    '/': {
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      bulletin: zhConfig.bulletin,
      lastUpdatedText: '最后更新时间',
      editLinkText: '在 GitHub 上编辑此页',
    }
  },
  author: 'clay',
  logo: '/logo.png',
  docsRepo: 'https://github.com/rqh656418510/reading-notes',
  docsBranch: 'main',
  docsDir: '/',
  catalogTitle: '文章目录',
  componentsDir: '.vuepress/components',
  vuePreviewsDir: '.vuepress/vue-previews'
}
