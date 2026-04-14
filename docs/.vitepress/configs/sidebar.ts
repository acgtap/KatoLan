import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/help/': [
    {
      text: '通用教程',
      collapsed: false,
      items: [{ text: '常见问题解答（必看）', link: '/q/index' }],
    },
    {
      text: '各游戏具体教程',
      collapsed: false,
      items: [
        { text: '教程索引', link: '/help/index' },
        { text: '文明 6 联机教程', link: '/help/civilization6' },
        { text: '我的世界联机教程', link: '/help/minecraft' },
      ],
    },
  ],
  '/q/': [
    {
      text: '通用教程',
      collapsed: false,
      items: [{ text: '常见问题解答（必看）', link: '/q/index' }],
    },
    {
      text: '各游戏具体教程',
      collapsed: false,
      items: [
        { text: '教程索引', link: '/help/index' },
        { text: '文明 6 联机教程', link: '/help/civilization6' },
        { text: '我的世界联机教程', link: '/help/minecraft' },
      ],
    },
  ],
}
