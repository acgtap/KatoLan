## 常见问题

::: tip 一直在等待释放 IP 地址

- ERROR: authentication error, MAC or IP address already in use or not released yet by supernode

- 等待 2 分钟左右，supernode 会释放占用的 MAC 和 IP，然后 edge 会自动重新分配地址
- 服务端使用 -M 参数启动
- 强制结束进程（SIGKILL）则会导致 edge 没来得及向 supernode 报告，所以需要在结束 edge 进程前，发送终止信号（SIGINT、SIGTERM），对应 Windows 命令行下则需以 Ctrl+C 结束

`所以我们建议你等待10分钟再次连接即可`

:::

::: tip 连接正常，但 ping 不通对方?

- 此问题大概率是 Windows 系统自带防火墙的问题，先尝试关闭
- 检查是否给予 edge（客户端）管理员权限，导致程序无法给虚拟网卡分配 IP
- 检查本机是否存在多张 TAP 网卡（比如 TeamView 就可能会和 N2N 虚拟网卡冲突），使用 -d “网卡名称” 来指定 EasyN2N 使用的网卡
- 使用 EasyN2N 菜单 – 常见问题 – 调试模式，分析日志

:::

::: tip 启动后，ping 自己的虚拟 IP 不通

- 检查是否给予 edge（客户端）管理员权限，导致程序无法给虚拟网卡分配 IP
- 检查本机是否存在多张 TAP 网卡（比如 TeamView 就可能会和 N2N 虚拟网卡冲突），使用 -d “网卡名称” 来指定 EasyN2N 使用的网卡
  :::

::: tip 连接正常，但容易中断

Windows 下的 N2N 数据传输（直连或中转）均通过 UDP 传输，在部分情况下，运营商会对 UDP 数据进行一定的限制，参考这篇：聊聊运营商对 UDP 的 QoS 限制和应对
解决方法：

- 1. 伪装 UDP 传输（如 UDP2raw \*需自建服务器，EasyN2N 内置或付费捐赠服务器均不支持）
- 2. 通过 Linux 中转（Linux 支持 N2N 的 TCP 传输 -S2 参数）
- 3. 使用 UDP over TCP 方法将 UDP 数据转换为 TCP 数据传输（教程在此）
     同时也需要考虑服务器的稳定性（如果无法直连，尽量选择低延迟服务器）
     :::

::: tip 连接正常，ping 的通，但找不到房间（或找得到房间，但无法加入）

虽然看似 ping 通了，但是真实的联机原理和 ping 还是不一样的。目前还存在相当一部分游戏是不支持的。请加入官群回复方便我们测试！
:::