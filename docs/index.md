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
    - text: 前端物语
      link: /fe/es6/
    - text: 前端导航
      link: /nav
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
      theme: alt
features:
  - icon: 📖
    title: 万物互联
    details: 从任何地方访问您的计算机、NAS、家庭自动化、IP 摄像机、业余无线电或其他设备
    link: /fe/javascript/types
    linkText: 快速开始
  - icon: 🎮
    title: 联机游戏
    details: 方便地共享文件和数据，甚至与他人玩局域网游戏
    link: /analysis/utils/only-allow
    linkText: 如何联机
  - icon: 💡
    title: 网络安全
    details: 管理对所选用户的安全网络访问
    link: /workflow/utils/library
    linkText: 加密方式
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
</style>
