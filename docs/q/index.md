---
title: 💫 常见问题
description: 收录了一些联机工具的一些常见问题
---

### 无法安装软件？启动白屏？Webview 出现问题？

使用 webview2 修复工具修复，点击“删除并重装”按钮等待下载运行完毕后即可。

[https://wwfj.lanzoul.com/b0sxlfdri](https://wwfj.lanzoul.com/b0sxlfdri)
密码:biar
<img src="https://tc.vlogidc.cn/img/2025/03/12/67d13e2660354.png" alt="Description" style="width:50%;height:50%;">

- 如果还是不行请在官群反馈。

### 文明 6 找不到房间？

- **重启游戏**重新创建局域网房间即可
- **重启电脑**，一定要先进联机工具房间再进游戏
- 依然不行就**多试几次**
- 有时候是因为你的网络环境不好，可以尝试**换个网络环境**
- 游戏**版本需要保持一致**，模组也需要保持一致
- 还有问题可以加入官方群反馈
- **卡在正在连接玩家？** 请检查模组是否一致、重新开启局域网游戏、关闭防火墙、切换网络

### 驱动未安装，使用管理员权限运行

- 使用管理员权限运行软件会自动安装好软件，一定要关闭防火墙和杀毒软件，避免报错！
- 可以试试**重启电脑**，再次使用管理员权限运行软件
- 如果没有安装依然成功，可以**手动安装驱动**，安装文件可以在群文件里找到（或设置里点击手动安装驱动）
- 如果依然不行，可以下载 网卡代码 56 修复工具（https://cn-sy1.rains3.com/accelerator/tools/%E7%BD%91%E5%8D%A1%E4%BB%A3%E7%A0%8156%E4%BF%AE%E5%A4%8D%E5%B7%A5%E5%85%B7.exe） （声明：此软件来自互联网，由网友分享），右键以管理员身份运行，并点击“修复”后重启电脑试试。
- 还是不行，可能系统网络组件问题，加入官方群反馈获得更多帮助

### 房间成员 1000ms 或特定成员 1000ms 或全体成员 1000ms

注意：本软件与`网易uu加速器`、`LanParty`、`Teamviwer`等局域网软件不兼容，

原因是网易等软件魔改了原生驱动，导致我们无法调用，

如果存在这些软件会导致你出现 1000ms 延迟等故障。

如果你电脑上装过这些软件，请将他们卸载并`清除驱动`，在设置中`禁用他们的网卡设备后`，`手动重装我们软件的驱动（群文件最后一个）`即可解决。

如果还是不明白请加入官方群 741616947 寻求管理帮助。

### 钢铁雄心找不到房间？

当你找不到房间，且没有打过补丁；

或者你是正版是没有联机功能的需要打联机补丁；

或者你是学习版但是没有明确说可以联机的版本；

以上需要打联机补丁：

补丁下载地址：https://wp.cngame.wiki/P社游戏联机补丁/钢丝

补丁使用方法：https://www.bilibili.com/video/BV1SJ4m1j7KA?t=130.3

### 由于找不到 MSVCR120.dll 文件，无法继续执行代码

- 这种问题就是你的系统缺这个运行库安装 VC++ 运行库即可
- 安装文件可以在群文件里

### 一直在等待释放 IP 地址

- ERROR: authentication error, MAC or IP address already in use or not released yet by supernode
- **等待 2 分钟左右**，supernode 会释放占用的 MAC 和 IP，然后 edge 会自动重新分配地址，就能连上了
- 自建服务端的用户可以使用 -M 参数启动服务端关闭 ip 检查
- 强制结束进程（SIGKILL）则会导致 edge 没来得及向 supernode 报告，所以需要在结束 edge 进程前，发送终止信号（SIGINT、SIGTERM），对应 Windows 命令行下则需以 Ctrl+C 结束
- 记得关闭设置中的强制停止开关，下次退出时会自动请求服务端释放 IP

`所以我们建议你出现这个问题等待10分钟再次连接即可`

### 连接正常，但 ping 不通对方?

- 此问题大概率是 Windows 系统自带防火墙的问题，先尝试关闭
- 检查是否给予 edge（客户端）管理员权限，导致程序无法给虚拟网卡分配 IP
- 检查本机是否存在多张 TAP 网卡（比如 TeamView 就可能会和 N2N 虚拟网卡冲突），使用 -d “网卡名称” 来指定 EasyN2N 使用的网卡

### 启动后，ping 自己的虚拟 IP 不通

- 检查是否给予 edge（客户端）管理员权限，导致程序无法给虚拟网卡分配 IP
- 检查本机是否存在多张 TAP 网卡（比如 TeamView 就可能会和 N2N 虚拟网卡冲突），使用 -d “网卡名称” 来指定 EasyN2N 使用的网卡

### 连接正常，但容易中断

- 请检查网络环境，尽量使用有线网络
- 使用三线服务器，尽量选择低延迟服务器
- 请尽量使用校园网，实在不行手机热点也行
- 请尽量使用电信网络
- 请尽量在同一个局域网或城域网内

Windows 下的 N2N 数据传输（直连或中转）均通过 UDP 传输，在部分情况下，运营商会对 UDP 数据进行一定的限制，参考这篇：聊聊运营商对 UDP 的 QoS 限制和应对
解决方法：

- 1. 伪装 UDP 传输（如 UDP2raw \*需自建服务器，EasyN2N 内置或付费捐赠服务器均不支持）
- 2. 通过 Linux 中转（Linux 支持 N2N 的 TCP 传输 -S2 参数）
- 3. 使用 UDP over TCP 方法将 UDP 数据转换为 TCP 数据传输（教程在此）
     同时也需要考虑服务器的稳定性（如果无法直连，尽量选择低延迟服务器）

### 连接正常，ping 的通，但找不到房间（或找得到房间，但无法加入）

虽然看似 ping 通了，但是真实的联机原理和 ping 还是不一样的。目前还存在相当一部分游戏是不支持的。请加入官群回复方便我们测试！
