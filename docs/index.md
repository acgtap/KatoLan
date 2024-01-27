---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: KatoLan
  text: 免费异地组网联机工具
  tagline: 与朋友快速、简洁、方便的进行异地联机游戏！
  image:
    src: /logo.png
    alt: Katolan
  actions:
    - text: 马上下载
      link: /download/
    - text: 使用文档
      link: /use
      theme: alt
features:
  - icon: 🎮
    title: 联机游戏
    details: 与朋友远程虚拟局域网游戏，适配大量联机游戏<br/>不再为小伙伴不会而烦恼
    link: /download
    linkText: 如何联机
  - icon: 💡
    title: 快速简洁
    details: 只需一分钟下载安装即可开始与你的朋友远程虚拟局域网联机！<br/>无需繁琐配置！
    link: /download
    linkText: 加密方式
  - icon: 📖
    title: 万物互联
    details: 从任何地方访问您的计算机、NAS、家庭自动化、IP 摄像机、业余无线电或其他设备<br/>方便地共享文件和数据，设备组网必备！
    link: /download
    linkText: 快速开始
  # - icon: 🧰
  #   title: 个人
  #   details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  #   link: /efficiency/online-tools
  #   linkText: 提效工具
  # - icon: 🐞
  #   title: 踩坑记录
  #   details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  #   link: /pit/npm
  #   linkText: 踩坑记录
  # - icon: 💯
  #   title: 吾志所向，一往无前。
  #   details: '<small class="bottom-small">一个想躺平的小开发</small>'
  #   link: https://fe-mm.com
---

### 我们的优势：速度快 延迟低 无限人数
| 产品     |   KatoLan   | RadminLan  | 蒲公英组网 |     N2N      |
| :--------: | :---------: | :----------: | :----------: | :----------: |
| 延迟     | <50ms延迟低 | >900ms     | <100ms     |      -       |
| 上手时间 |   1min快    | 2min       | 10min      | 需要配置很多 |
| 房客     |  可以查看   | 速度慢     | -          |   查看麻烦   |
| 支持数量 | 无限理论值  | 无限理论值 | 免费版3个  |     麻烦     |
| 节点     | 10+境内境外 | 境外服务器 | 边缘节点   |      无      |
<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
  .title :nth-child(1) {
    /* pointer-events: auto; */
    display: none;
}
  table{
    margin:auto;
  }
</style>
