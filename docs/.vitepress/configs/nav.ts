import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: 'https://lan.katomegumi.net', activeMatch: '^/' },
  { text: '文档首页', link: '/', activeMatch: '^/' },
  { text: '马上下载', link: 'https://lan.katomegumi.net/download.html', activeMatch: '^/download' },
  { text: '常见问题', link: '/q/index', activeMatch: '^/q/index' },
  {
    text: '官群交流',
    link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=I_-arUNUYkqURts3vwRmAT44H2O9EQoA&authKey=w19mK3S6ftOLQjiLnxjOiOkTP0uHSk9c33zqrj9b%2BliDev0H42O%2B7WZCROCftet5&noverify=0&group_code=741616947'
  }
]
