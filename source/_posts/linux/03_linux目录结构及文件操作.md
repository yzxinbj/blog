---
title: linux目录结构及文件操作
p: linux/03_linux目录结构及文件操作
date: 2017-11-02 11:15:13
tags:
categories:
---

## 关于目录
linux 的目录结构大部分目录结构是规定好的，多数 linux系统根据 FHS 标准
> FHS（filesystem Hierarchy Standard）: 文件系统层次结构标准

FHS 定义了两层规范，第一层是， / 下面的各个目录应该要放什么文件数据，例如 /etc 应该放置设置文件，/bin 与 /sbin 则应该放置可执行文件等等。

第二层则是针对 /usr 及 /var 这两个目录的子目录来定义。例如 /var/log 放置系统登录文件，/usr/share 放置共享数据等等。

[可以看实验楼的介绍图](https://dn-anything-about-doc.qbox.me/linux_base/4-1.png/logoblackfont)

||可分享的(shareablel)|不可分享的(unshareable)|
|:-----|:-----|:----|
|不可变的(static)|/usr(软件放置处)|/etc(配置文件)|
|不可变的(static)|/opt(第三方软件)|/boot(开机及内核文件)|
|可变的(variable)|/var/mail(用户邮件信箱)|/var/run(程序相关)|
|可变的(variable)|/var/news(新闻组)|/var/lock(文件锁相关)|


## 文件操作

- `touch`
- `mkdir`
- `cp` 拷贝复制文件，如果是目录，-r -R(这俩一样) 递归复制
- `rm` 删除文件
- `mv` 移动文件，就是剪切，重命名
- `rename` 批量重命名
- `cat` `tac` 打印文件内容到标准输出（终端）
> 标准输入输出：当我们执行一个 shell 命令行时通常会自动打开三个标准文件，即标准输入文件（stdin），默认对应终端的键盘、标准输出文件（stdout）和标准错误输出文件（stderr），后两个文件都对应被重定向到终端的屏幕，以便我们能直接看到输出内容。进程将从标准输入文件中得到输入数据，将正常输出数据输出到标准输出文件，而将错误信息送到标准错误文件中。
- `nl` 添加行号并打印

