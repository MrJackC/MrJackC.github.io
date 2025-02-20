# pyenv-win —— windows 端 python 版本管理工具
#### pyenv-win —— windows 端 python 版本管理工具
 
- [pyenv-win —— windows 端 python 版本管理工具](#pyenv-win--windows-端-python-版本管理工具)
      - [pyenv-win —— windows 端 python 版本管理工具](#pyenv-win--windows-端-python-版本管理工具-1)
  - [pyenv-win 下载](#pyenv-win-下载)
  - [配置环境变量](#配置环境变量)
  - [使用 pyenv-win 管理 python 版本](#使用-pyenv-win-管理-python-版本)
    - [一、安装 和 卸载 python](#一安装-和-卸载-python)
    - [二、设置 全局的 python 版本；设置指定文件夹下的 python 版本](#二设置-全局的-python-版本设置指定文件夹下的-python-版本)
    - [三、验证 python 是否安装成功](#三验证-python-是否安装成功)

## pyenv-win 下载
 ` 本文通过 git 方式下载 ` 

1. 在 github 中 找到 pyenv-win 的 git 仓库 快速打开 [pyenv-win](https://github.com/pyenv-win/pyenv-win )
2. 打开终端，切换到想要安装的路径，在终端中使用 git clone https://github.com/pyenv-win/pyenv-win.git 命令 将 pyenv-win 克隆到安装目录 （安装目录不要出现中文和空格）
 
```shell
git clone https://github.com/pyenv-win/pyenv-win.git
```
通过以上步骤 就可以完成 pyenv-win 的下载

## 配置环境变量

1.  打开[资源管理器](https://so.csdn.net/so/search?q=%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86%E5%99%A8&spm=1001.2101.3001.7020 )，在左侧菜单栏中的 此电脑 右键，选择属性
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bcb0fefb31a00fb7f3768f1d68c3a0e8.png )

 
2.  在打开的 **设置----关于** 窗口中滚动鼠标 找到 **高级系统设置**，打开 **高级系统设置**

 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fc8f0107f86c6cbda35438a75afc622c.png )

 
3.  在 打开的 **系统属性 – 高级选项卡** 中 点击 **环境变量**
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f76b9cfa39e1dd29c70029fbcdc3dfc8.png )

 
4.  在 打开的 **环境变量** 窗口中 的 系统变量部分 选择 **新建(W)…**；输入 变量名：PYENV; 变量值：上面步骤pyenv-win的安装目录\pyenv-win\pyenv-win；点击 **确定**
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2125420280abb27b518343a825ba3880.png )

 
5.  在系统变量中找到 变量名为 **Path** 的环境变量 点击 **编辑**；在打开的 编辑环境变量 窗口中 点击 **新建** 添加 两条 环境变量： %PYENV%\bin %PYENV%\shims
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/307390b553a3a46755c4f8f73fa41449.png )

 
6.  打开终端 在 命令行中输入 pyenv --version 验证是否 配置成功，返回版本信息则为 环境配置成功（如图：）
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9a8a267ee962e7e03d1fb874874c02d0.png )

 
完成以上步骤 pyenv-win 的 环境就 配置 好了

## 使用 pyenv-win 管理 python 版本

### 一、安装 和 卸载 python
 
```shell
# 查看所有可安装的 python 版本
pyenv install -l
# 安装指定版本的 python
pyenv install 3.5.2
# 一个命令中安装多个版本
pyenv install 2.4.3 3.6.8
# 卸载 指定 版本 的 python
pyenv uninstall 3.5.2
# 查看已安装的版本
pyenv versions
# 查看当前使用版本
pyenv version
```

>  
 使用 pyenv 下载python镜像可能会有点慢，等不及的小伙伴可以在 执行  ` pyenv install 2.7.18 `  （当From 和 To 的路径输出出来后 ` ctrl + c `  取消执行）后 手动使用 From 后面的下载路径放到浏览器中下载，然后拷贝到 To 后面的路径中，再次执行  ` pyenv install 2.7.18 ` 

 
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c1db27ed32a0b1bf2c3172983542f053.png )

### 二、设置 全局的 python 版本；设置指定文件夹下的 python 版本
```shell
# 设置 全局的 python 版本
pyenv global 3.5.2
# 设置指定文件夹下的 python 版本；在指定 文件夹下执行该命令，文件夹下会生成一个配置文件（不能删除）
pyenv local 3.5.2
```
### 三、验证 python 是否安装成功

>  
 在 终端 中输入  ` python -V `  查看打印的版本号是否与设置的版本号 一致（如图）
 
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/db2616eaaae719ce29dd45718c573ff2.png )

该教程是 **本菜鸟** 凭借记忆 完成的 可能存在 问题 和 纰漏，旨在交流和学习；如发现问题 请评论区友好指出（勿喷…）
 
参考文档: [pyenv-win 官网文档](https://pyenv-win.github.io/pyenv-win/#validate-installation )

                
[!其他安装文档](https://blog.csdn.net/2301_82000445/article/details/135478769)                

                
                
        

