---
layout: post
title: Centos7 安装samba
category: server
tags: [server]
copyright: mrjason
keywords: server,服务搭建
---


[服务器搭建大全](https://www.server-world.info/en/note?os=CentOS_7&p=samba&f=2)
这里包含了Centos7 里面安装的软件教程

1.使用

```css
rpm -qi samba
```

命令查询是否已经安装了Samba。
如下图所示，已经有了安装信息，说明已经安装了samba
![img](https://ws3.sinaimg.cn/large/006tNc79ly1g2yt9whjhbj313i0qktf9.jpg)
如果没有安装，使用

```css
yum install samba
```

下载并安装。
2.现在开始新建共享文件夹的用户jc，使用命令

```css
useradd jc
```

如下,添加用户需要root权限，使用

```css
su root
```

获取root权限，添加用户成功，如下图所示。
![img](https://ws4.sinaimg.cn/large/006tNc79ly1g2yt9v2aonj314m0qwah5.jpg)

3.使用命令

```css
passwd jc
```

对用户添加密码，如下
![img](https://ws4.sinaimg.cn/large/006tNc79ly1g2yt9u9cksj314k0qsag0.jpg)

4.使用命令

```css
mkdir /home/share
```

在用户lxr文件夹下新建share共享文件夹。
5.使用命令

```css
chmod -R 777 /home/share
```

将整个share文件夹与其中的文件和子目录的权限都设置为rwxrwxrwx，即所有人都可以查看操作，如图
![img](https://ws1.sinaimg.cn/large/006tNc79ly1g2yt9uli7lj314e0qitfn.jpg)

6.使用命令给smb.conf 文件做备份

```css
cp smb.conf smb.conf~bak
```

备份结果如下所示。
![img](https://ws2.sinaimg.cn/large/006tNc79ly1g2yt9vmlymj314e0qkahu.jpg)

```css
cd /etc/samba
```

7.使用命令

```css
vim smb.conf

```

进入Samba配置文件，按下“i”键将配置文件修改如图
![img](https://ws4.sinaimg.cn/large/006tNc79ly1g2yt9w2tl6j314i0r6jvn.jpg)

如果在配置中出现错误，删除配置文件，继续使用备份好的配置文件即可

```css
mv smb.conf~bak  smb.conf

```

继续编辑配置文件
正确配置内容如下：

```css
# See smb.conf.example for a more detailed config file or
# read the smb.conf manpage.
# Run 'testparm' to verify the config is correct after
# you modified it.
[global]
        workgroup = WORKGROUP
        security = user
        map to guest = Bad User
        server string = Ted Samba Server %v
        netbios name = TC
        passdb backend = tdbsam
        printing = cups
        printcap name = cups
        load printers = yes
        cups options = raw
[share]
        comment = Share Directories
        path = /home/share
        public = yes
        writable = yes
        create mask = 0775
        directory mask = 0775
[homes]
        comment = Home Directories
        valid users = %S, %D%w%S
        browseable = No
        read only = No
        #是否可以写入
        writable = yes
        #建立文件后文件的权限
        create mode = 0664
        #建立目录的后目录的权限
        directory mode =

[printers]
        comment = All Printers
        path = /var/tmp
        printable = Yes
        create mask = 0600
        browseable = No
[print$]
        comment = Printer Drivers
        path = /var/lib/samba/drivers
        write list = @printadmin root
        force group = @printadmin
        create mask = 0664
        directory mask = 0775

```

注释：
workgroup 项应与 Windows 主机保持一致，这里是WORKGROUP
security、map to guest项设置为允许匿名用户访问
再下面有两个section，实际为两个目录，section名就是目录名（映射到Windows上可以看见）
默认文件属性644/755（不然的话，Windows上在这个目录下新建的文件会有“可执行”属性）
创建用户组：
groupadd co3
创建用户：
useradd jc -g co3 -s /sbin/nologin
添加用户：
smbpasswd -a jc
授权用户：
smbpasswd -e  jc
启动Samba服务，设置开机启动
systemctl start smb
systemctl enable smb
查看Samba

```css
# systemctl start smb nmb ##注:NMB对客户端提供NetBIOS服务
# systemctl status smb nmb

```

重启防火墙

```css
systemctl restart firewalld

```

本机测试：

```css
testparm

```

参考文献

- [文献1](https://www.cnblogs.com/muscleape/p/6385583.html)
- [文献2](https://blog.csdn.net/wang10051225/article/details/82194691)
- [文献3](https://www.linuxidc.com/Linux/2017-03/141390.htm)
- [文献4](https://www.server-world.info/en/note?os=CentOS_7&p=samba&f=1)

