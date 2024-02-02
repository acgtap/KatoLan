---
description: 收录了我们支持的一些游戏
layoutClass: m-nav-layout
outline: [2, 3, 4]
---
<script setup>
import { NAV_DATA } from './nav/data'
</script>

<style src="./nav/index.scss"></style>

# 支持的游戏

以下不完全包含所有支持游戏，理论上支持局域网联机的游戏都可以使用此软件远程联机。

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
