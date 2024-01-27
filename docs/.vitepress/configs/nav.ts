import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/', activeMatch: '^/' },
  { text: '马上下载', link: 'https://lan.katomegumi.net/download.html', activeMatch: '^/download' },
  {
    text: '快速使用',
    items: [
      { text: '如何快速联机', link: '/fe/javascript/types' },
      { text: '房间管理', link: '/fe/es6/' },
      { text: '知识科普', link: '/fe/typescript/base' },
    ],
    activeMatch: '^/fe',
  },
  {
    text: '游戏支持与教程',
    items: [
      {
        text: '常用游戏/方法',
        items: [
          { text: 'Minecraft', link: '/workflow/' },
          { text: '群星', link: '/workflow/' },
          { text: '文明6', link: '/workflow/' },
        ],
      },
    ],
    activeMatch: '^/workflow',
  },
  { text: '常见问题', link: '/q/index', activeMatch: '^/q' },
  { text: '赞助支持我们', link: 'https://afdian.net/a/seeyouagain' },
  { text: '我们的愿景', link: '/q/hope', activeMatch: '^/q' },
]
