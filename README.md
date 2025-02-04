# simple-2fa

这是一个简单的命令行程序，用于管理多个账户的 2FA 密钥，并生成基于时间的一次性密码（TOTP）验证码。你可以手动输入 2FA 密钥并为每个账户生成验证码。

## 动机

二步验证（2FA）机制，本质上是个糟糕的方案。

首先，问问自己，真的有那么多重要账号值得你为了它们耗费这么多时间和精力吗？是不是有些人太过夸大了账号被盗的风险？

绑定到手机的 App 看起来像是个不错的选择——它能离线工作，安全性也看起来挺高的。但万一手机丢了呢？

再看那些号称能解决一切的密码管理器，什么端到端加密啊，云同步啊。
你觉得这些能让你高枕无忧吗？可你没想过，每一个软件都会带来新的一层复杂性——下载、安装、同步。
如果你手机不在身边，或者没有网络连接，或者不方便复制粘贴，又要怎么办呢？
而且这些第三方会不会跑路呢？
而最重要的，终究你还是要依赖一个主密码来管理其他密码。那这个主密码怎么保证安全呢？
更糟糕的是，有些软件故意不允许你导出自己的密码，号称是“为了安全”。
拜托，这是我的账号，我凭什么不能自己管理自己的安全？

除了在每次重装系统后浪费时间找恢复码、装一些我根本不想要的 App，或者存下几个不知道放哪儿的恢复码，它根本没给我带来实质性的帮助。
我宁愿每次都接收短信或邮件验证码，也不想玩这些伪安全的游戏——简直是脱裤子放屁，纯粹是为了让一些人觉得这很“炫酷”的安全玩具。

我不认为管理密码应该是某个第三方的服务——这是我的自由，也是我的责任。
所以这款软件让你自己掌控一切。你只需输入 2FA 的 setup key，软件会**明文的**保存它到本地，然后你就可以轻松地为任何账户生成验证码。
软件完全离线运行，不依赖云端服务，也不需要你信任某个服务商。
想加密？没问题，自己加个压缩包加密就好。想同步？那就把文件放进 OneDrive 或其他网盘就好了。

## 功能

- 添加多个账户的 2FA 密钥
- 为已有账户生成验证码
- 数据存储在本地 JSON 文件 (accounts.json)

## 安装

```bash
npm i -g @lsby/simple-2fa
```

## 运行

```bash
# 进入 accounts.json 文件目录
lsby-simple-2fa
```

## 数据存储

程序会在你的当前目录（终端路径下）生成 `accounts.json` 文件。

记住，**自由意味着责任**，妥善保存好这个文件是你自己的责任。
