import type { NavData } from '../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: '常支持的游戏',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '群星',
        desc: '可用',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '戴森球计划',
        desc: '可用',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Minecraft',
        desc: '可用',
        link: 'https://caniuse.com'
      },{
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '文明6',
        desc: '可用',
        link: 'https://caniuse.com'
      }
    ]
  },
  {
    title: '不支持的游戏',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat'
      }
    ]
  }
  
]
