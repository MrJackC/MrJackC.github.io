# 个人博客

这是我的个人博客项目，主要是学习的笔记，偶尔写写其他的东西😊🎉。

博客主题使用:[Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll)

# Install and setup
Before using it, you may need Bower and Bundler on your local to install dependencies.

* Fork code and clone
* Run bower install to install all dependencies in bower.json
* Run bundle install to install all dependencies in Gemfile
* Update _config.yml with your own settings.
* Add posts in /_posts
* Commit to your own Username.github.io repository.
* Then come back to star this theme!

> When install dependencies by bundler or gem, you may have some errors depending on your environment.

> Because the software version is different, there will be no way for the blog to preview locally. After the clone code is local, you may need to upgrade your software version.
If something goes wrong, you can try the following steps.

>Mac platform, if you are using the system's own Ruby, and the version of Ruby is relatively low, you can install the latest version of Ruby through brew.
```css
1、brew install Ruby
```
>If you have Ruby installed on your computer, you will need to change the environment variables to switch to the latest version.
```css
2、echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
```
>Update environment variables
```css
3、source ~/.bash_profile
```
```css
4、gem install rails
```
```css
5、gem install bundler:1.17.0
```
```css
6、bundle install
```
>If the prompt is missing any dependent libraries, you can execute the corresponding command according to the error prompt.
```css
7、eg:bundle update rails-dom-testing
```
```css
8、bundle exec jeklly server
```
```css
9、Browser access 127.0.0.1:4000
```
