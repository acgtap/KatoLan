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
        { text: '泰拉瑞亚联机教程', link: '/help/terraria' },
        { text: '饥荒联机版教程', link: '/help/dontstarve' },
        { text: '胡闹厨房 2 教程', link: '/help/overcooked2' },
        { text: '群星联机教程', link: '/help/stellaris' },
        { text: '星露谷物语教程', link: '/help/stardewvalley' },
        { text: '钢铁雄心 4 教程', link: '/help/heartsofiron4' },
        { text: '城市天际线教程', link: '/help/citiesskylines' },
        { text: '逃离鸭科夫教程', link: '/help/duckside' },
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
        { text: '泰拉瑞亚联机教程', link: '/help/terraria' },
        { text: '饥荒联机版教程', link: '/help/dontstarve' },
        { text: '胡闹厨房 2 教程', link: '/help/overcooked2' },
        { text: '群星联机教程', link: '/help/stellaris' },
        { text: '星露谷物语教程', link: '/help/stardewvalley' },
        { text: '钢铁雄心 4 教程', link: '/help/heartsofiron4' },
        { text: '城市天际线教程', link: '/help/citiesskylines' },
        { text: '逃离鸭科夫教程', link: '/help/duckside' },
      ],
    },
  ],
}
