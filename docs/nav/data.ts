import type { NavData } from '../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: '常支持的游戏',
    items: [
      {
        icon: 'https://imgsa.baidu.com/forum/pic/item/0df3d7ca7bcb0a46fd3498ed6563f6246a60afcb.jpg',
        title: '群星',
        desc: '可用',
        link: 'https://sharelikes.com.cn/'
      },
      {
        icon: 'https://gimg3.baidu.com/search/src=https%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F42676ddfb48f8c5428fece4935292df5e0fe7f5b.jpg&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w240&n=0&g=0n&q=75&fmt=auto?sec=1707325200&t=2e52b8a0cbaaf0f3883d713af70f6336',
        title: '戴森球计划',
        desc: '可用',
        link: 'https://weibo.com/p/100808f3ed3197238cca7d1f1246f2b40af0f0/super_index'
      },
      {
        icon: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/favicon-32x32.png',
        title: 'Minecraft',
        desc: '可用',
        link: 'https://www.minecraft.net/zh-hans'
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
