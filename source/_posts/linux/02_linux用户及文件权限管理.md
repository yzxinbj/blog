---
title: linux用户及文件权限管理
p: linux/02_linux用户及文件权限管理
date: 2017-10-30 16:54:09
tags: linux 
categories: 编程
---


## 用户管理
`who am i`  `whoami` `who mom likes`

`yanzixian pts/0        2017-11-01 09:45 (172.17.62.48)`
第二列的 pts/0 中 pts 表示伪终端，所谓伪是相对于 /dev/tty 设备而言的，
[Ctrl]+[Alt]+[F1]～[F7] 进行切换的 /dev/tty 设备,这是“真终端”，
伪终端就是当你在图形用户界面使用 /dev/tty7 时每打开一个终端就会产生一个伪终端， 
pts/0 后面那个数字就表示打开的伪终端序号，再打开一个终端，然后在里面输入 who am i ，
第二列就变成 pts/1 了，第三列则表示当前伪终端的启动时间


`who` 命令参数

<!--more-->

|参数|说明|
|:----|----|
| -a  |打印能打印的全部  |
| -d  |打印死掉的进程  |
| -m  |同am i,mom likes  |
| -q  |打印当前登录用户数及用户名  |
| -u  |打印当前登录用户登录信息  |
| -r  |打印运行等级  |

#### su, su- 与 sudo

`su <user>`可以切换到用户 user，执行时需要输入目标用户的密码，
`sudo <cmd> `可以以特权级别运行 cmd 命令，需要当前用户属于
sudo 组，且需要输入当前用户的密码。`su - <user> `
命令也是切换用户，同时环境变量也会跟着改变成目标用户的环境变量。


#### 用户组

新建用户: 
> adduser yzx  程序，会提示你设置
> useradd yzx  命令
> 但在 redhat 下实验没有区别

查看用户在哪些用户组
```
groups <user>
cat /etc/group | sort (sort 是按照字典排序再输出)
```
> 输出格式：group_name:password:GID:user_list


查看哪些有 sudo 权限
```
ll /etc/sudoers.d/
sudo cat /etc/sudoers.d/shiyanlou
cat /etc/sudoers
```

其中会配置类似如下的内容

> root    ALL=(ALL)       ALL
> www     ALL=(ALL)       NOPASSWD: ALL
> shiyanlou     ALL=(ALL)       NOPASSWD: ALL
> Defaults:shiyanlou  !requiretty

加入sudo 用户组
> sudo usermod -G sudo yzx

删除用户
> sudo userdel yzx -r

ls 下显示的文件类型

|字母|表示类型|解释|
|:-----|:----|:----|
|d| 目录|  |
|l| 软链接| 可理解为快捷方式 |
|b| 块设备|  |
|c| 字符 设配|  |
|s| socket| 套接字 |
|p| 管道|  |
|-| 普通文件|  |

变更文件所有者
> sudo chown <user> <file>

修改文件权限
> chmod 700 <file>
> chmod gou-rw <file>
其中 u、g 还有 o 分别表示 user、group 和 others，+ 和 - 分别表示增加和去掉相应的权限
