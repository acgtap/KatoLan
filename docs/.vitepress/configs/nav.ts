import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: 'https://lan.katomegumi.net', activeMatch: '^/' },
  { text: '文档首页', link: '/', activeMatch: '^/' },
  { text: '马上下载', link: 'https://lan.katomegumi.net/download.html', activeMatch: '^/download' },
  {
    text: '快速使用',
    items: [
      { text: '如何快速联机', link: '/fe/javascript/types' },
    ],
    activeMatch: '^/fe',
  },
  { text: '游戏支持与教程', link: '/nav', activeMatch: '^/nav' },
  { text: '常见问题', link: '/q/index', activeMatch: '^/q' },
  { text: '官群交流', link: 'https://qm.qq.com/q/jhzFDyBPz4'},
  { text: '赞助支持我们', link: 'https://afdian.net/a/seeyouagain' },
  { text: '我们的愿景', link: '/q/hope', activeMatch: '^/q/hope' },
]
