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
  logo: '/logo.png',
  author: 'clay',
  docsRepo: 'https://github.com/rqh656418510/reading-notes',
  docsBranch: 'main',
  docsDir: '/',
  componentsDir: './docs/.vuepress/components'
}
