import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig, PageData } from 'vitepress'

import { head, nav, sidebar, algolia } from './configs'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

export default defineConfig({
  outDir: '../dist/docs',
  base: '/docs',

  lang: 'zh-CN',
  title: '好朋友联机工具',
  title2: 'KatoLan 免费异地组网联机工具，快速、简洁、方便与朋友异地联机游戏！超简单的虚拟局域网！',
  description: '免费异地组网联机工具，快速、简洁、方便与朋友异地联机游戏！',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/acgtap' }],

    footer: {
      message:
        '好朋友联机工具（KatoLan）免费异地组网联机工具，快速、简洁、方便与朋友异地联机游戏！超简单的虚拟局域网！第一推荐！',
      copyright: '重庆云鸢科技有限公司 | 渝ICP备2026001056号-2 | 渝公网安备50009802003065号',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    /* Algolia DocSearch 配置 */
    //algolia,

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },

  /* 生成站点地图 */
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://www.hpylan.cn/docs/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
})
