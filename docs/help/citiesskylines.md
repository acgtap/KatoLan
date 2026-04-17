---
title: 城市天际线使用好朋友联机工具联机教程
description: 城市天际线联机教程，教你通过好朋友联机工具 KatoLan 和 CSM 多人模组进行 Cities Skylines 异地联机，包含模组安装、CitiesHarmony依赖、内容管理器启用和联机前准备。
head:
  - - meta
    - name: keywords
      content: 城市天际线联机教程, 城市天际线局域网联机教程, Cities Skylines联机教程, CSM多人模组, 好朋友联机工具, KatoLan, 异地联机
outline: [2, 3]
---

# 城市天际线使用好朋友联机工具联机教程

![城市天际线模组安装](/help-img/城市天际线.png)

本文介绍如何游玩 **城市天际线（Cities: Skylines）** 的多人联机模式。由于原版不直接提供这套方式，通常需要先安装 **CSM 多人模组**，再配合 **好朋友联机工具（KatoLan）** 进行远程联机。

## 一、先安装 CSM 多人模组

### 1. 模组来源

CSM 是 `Cities: Skylines Multiplayer` 的简称，是专门为城市天际线制作的多人联机模组。

可选下载方式：

- Steam 创意工坊订阅安装
- GitHub 手动下载发行版压缩包

### 2. 手动安装 CSM

如果你不是通过 Steam 创意工坊安装，建议按手动方式安装。

先解压下载好的压缩包。

![解压模组](/help-img/777dc38b95c543d6a810f4564d39e30a.png)

然后进入游戏的 Mods 目录，在其中新建一个 `CSM` 文件夹。

Windows 常用路径如下：

`%LOCALAPPDATA%\Colossal Order\Cities_Skylines\Addons\Mods\`

![创建 CSM 文件夹](/help-img/b4a3c6ea35e844fa8b48454266077d62.png)

![定位 Mods 目录](/help-img/b7ec6687e2634dc5a8f38dc5902a0eab.png)

将压缩包里除 `install.ps1` 以外的内容复制到刚创建的 `CSM` 文件夹中。

![复制 DLL 文件](/help-img/42afd8eaefce4e99bf33ac66d3520158.png)

### 3. 安装 CitiesHarmony 依赖

CSM 还依赖 `CitiesHarmony`。如果你不是创意工坊安装，也需要手动下载并放进同一个 Mods 目录。

![下载 CitiesHarmony](/help-img/5d871f66cd8f48cf95e10c950e891c39.png)

安装完成后，Mods 文件夹里至少应有：

- `CSM`
- `CitiesHarmony`

![依赖安装完成](/help-img/e50dd45ad91145e58f5de2aa88ee074c.png)

### 4. 在内容管理器启用模组

启动城市天际线后，必须到 **内容管理器** 中手动启用 CSM，否则游戏里不会出现多人联机功能。

![启用模组](/help-img/ff703b4f62de4163a583c51410c2feaf.png)

## 二、进入同一个联机房间

模组准备好以后，再打开好朋友联机工具：

- 一名玩家创建房间
- 其他玩家加入同一个房间
- 等待房间延迟稳定

## 三、开始多人联机

完成上面两步后，再进入游戏使用 CSM 的多人功能进行建城联机。

联机前建议提前统一：

- 游戏版本
- CSM 模组版本
- 其他启用模组

只要其中一项不一致，就可能导致无法加入或联机异常。

## 四、常见问题

### 1. 游戏里找不到多人功能

通常是以下原因：

- 没有在内容管理器启用 CSM
- 没有安装 CitiesHarmony
- CSM 版本和当前游戏版本不兼容

### 2. 与其他模组冲突

CSM 和部分城市管理类模组可能存在冲突。如果出现报错、崩溃或功能异常，建议先只保留联机必须模组测试。

## 五、总结

城市天际线联机的关键不是直接开房，而是先把多人模组环境准备正确：

1. 安装 CSM 和 CitiesHarmony。
2. 在内容管理器中启用模组。
3. 所有人进入同一个联机房间。
4. 确保游戏版本和模组版本一致。
