import{_ as a,c as s,a as n,o as i}from"./app-mWs04Xnh.js";const l={};function r(t,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="selenium入门" tabindex="-1"><a class="header-anchor" href="#selenium入门"><span>Selenium入门</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>Selenium是 自动化测试工具。它支持各种浏览器，包括 Chrome，Safari，Firefox 等主流界面式浏览器。主要用电脑模拟人操作浏览器网页，可以实现自动化，测试等</p><h2 id="_2-初步体验" tabindex="-1"><a class="header-anchor" href="#_2-初步体验"><span>2. 初步体验</span></a></h2><blockquote><p>忽略安装Selenium 和 浏览器驱动安装和配置，如有需求自行百度</p></blockquote><p>运行如下代码，会自动打开浏览器，然后访问百度。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>from selenium import webdriver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>browser = webdriver.Chrome()</span></span>
<span class="line"><span># browser = webdriver.Chrome(r&quot;C:\\Users\\Administrator\\Downloads\\chromedriver_win32\\chromedriver.exe&quot;)</span></span>
<span class="line"><span>browser.get(&#39;http://www.baidu.com/&#39;)</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955271.png" alt="image-20210204133157683" tabindex="0" loading="lazy"><figcaption>image-20210204133157683</figcaption></figure><h2 id="_3-模拟提交" tabindex="-1"><a class="header-anchor" href="#_3-模拟提交"><span>3. 模拟提交</span></a></h2><p>下面的代码实现模拟提交搜索功能，首先等页面加载完成，然后输入到搜索框文本，点击提交。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>from selenium import webdriver</span></span>
<span class="line"><span>from selenium.webdriver.common.keys import Keys</span></span>
<span class="line"><span></span></span>
<span class="line"><span># driver = webdriver.Firefox()</span></span>
<span class="line"><span>driver = webdriver.Chrome(r&quot;C:\\Users\\Administrator\\Downloads\\chromedriver_win32\\chromedriver.exe&quot;)</span></span>
<span class="line"><span>driver.get(&quot;http://www.python.org&quot;)</span></span>
<span class="line"><span>assert &quot;Python&quot; in driver.title</span></span>
<span class="line"><span>elem = driver.find_element_by_name(&quot;q&quot;)</span></span>
<span class="line"><span>elem.clear()</span></span>
<span class="line"><span>elem.send_keys(&quot;pycon&quot;)</span></span>
<span class="line"><span>elem.send_keys(Keys.RETURN)</span></span>
<span class="line"><span>assert &quot;No results found.&quot; not in driver.page_source</span></span>
<span class="line"><span>driver.close()</span></span></code></pre></div><ul><li><p>其中 driver.get 方法会打开请求的 URL，WebDriver 会等待页面完全加载完成之后才会返回，即程序会等待页面的所有内容加载完成，JS 渲染完毕之后才继续往下执行。注意：如果这里用到了特别多的 Ajax 的话，程序可能不知道是否已经完全加载完毕。</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">driver.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;http://www.python.org&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p>WebDriver 提供了大量的方法让你去查询页面中的元素，这些方法形如： find_element_by_*。 例如：包含 name 属性的input输入框可以通过 find_element_by_name 方法查找到， 详细的查找方法可以在第四节元素查找中查看</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">elem </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> driver.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_element_by_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;q&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li><li><p>我们发送了一个关键字，这个方法的作用类似于你用键盘输入关键字</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">elem.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">clear</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">elem.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">send_keys</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;pycon&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">elem.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">send_keys</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(Keys.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">RETURN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div></li></ul><h2 id="_4-元素定位" tabindex="-1"><a class="header-anchor" href="#_4-元素定位"><span>4. 元素定位</span></a></h2><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>find_element_by_id()</span></span>
<span class="line"><span>find_element_by_name()</span></span>
<span class="line"><span>find_element_by_class_name()</span></span>
<span class="line"><span>find_element_by_tag_name()</span></span>
<span class="line"><span>find_element_by_link_text()</span></span>
<span class="line"><span>find_element_by_partial_link_text()</span></span>
<span class="line"><span>find_element_by_xpath()</span></span>
<span class="line"><span>find_element_by_css_selector()</span></span></code></pre></div><p>在<code>element</code>变成<code>elements</code>就是找所有满足的条件，返回数组。</p><p>一般我都自己采用 <strong>xpath</strong> 获取元素的，复制即可</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955312.png" alt="image-20210204134742935" tabindex="0" loading="lazy"><figcaption>image-20210204134742935</figcaption></figure><h2 id="_5-控制浏览器操作" tabindex="-1"><a class="header-anchor" href="#_5-控制浏览器操作"><span>5. 控制浏览器操作</span></a></h2><ul><li>控制浏览器窗口大小</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>driver.set_window_size(480, 800)</span></span></code></pre></div><ul><li>浏览器后退，前进</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 后退 driver.back()</span></span>
<span class="line"><span># 前进 driver.forward()</span></span></code></pre></div><ul><li>刷新</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>driver.refresh() # 刷新</span></span></code></pre></div><h2 id="_6-webelement常用方法" tabindex="-1"><a class="header-anchor" href="#_6-webelement常用方法"><span>6. Webelement常用方法</span></a></h2><ul><li>点击和输入</li></ul><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>driver.find_element_by_id(&quot;kw&quot;).clear() # 清除文本 driver.find_element_by_id(&quot;kw&quot;).send_keys(&quot;selenium&quot;) # 模拟按键输入 driver.find_element_by_id(&quot;su&quot;).click() # 单机元素</span></span></code></pre></div><ul><li>提交</li></ul><p>可以在搜索框模拟回车操作</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>search_text = driver.find_element_by_id(&#39;kw&#39;) search_text.send_keys(&#39;selenium&#39;) search_text.submit()</span></span></code></pre></div><ul><li>其他</li></ul><p>size： 返回元素的尺寸。</p><p>text： 获取元素的文本。</p><p>get_attribute(name)： 获得属性值。</p><p>is_displayed()： 设置该元素是否用户可见。</p><h2 id="_7-鼠标操作" tabindex="-1"><a class="header-anchor" href="#_7-鼠标操作"><span>7. 鼠标操作</span></a></h2><p>在 WebDriver 中， 将这些关于鼠标操作的方法封装在 ActionChains 类提供。</p><p>ActionChains 类提供了鼠标操作的常用方法：</p><ul><li>perform()： 执行所有 ActionChains 中存储的行为；</li><li>context_click()： 右击；</li><li>double_click()： 双击；</li><li>drag_and_drop()： 拖动；</li><li>move_to_element()： 鼠标悬停。</li></ul><p>举个例子：</p><div class="language-python" data-ext="python" data-title="python"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> selenium </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> webdriver</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 引入 ActionChains 类</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> selenium.webdriver.common.action_chains </span><span style="color:#C678DD;--shiki-dark:#C678DD;">import</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ActionChains</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">driver </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> webdriver.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Chrome</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">driver.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;https://www.baidu.cn&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 定位到要悬停的元素</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">above </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> driver.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">find_element_by_link_text</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;设置&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 对定位到的元素执行鼠标悬停操作</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">ActionChains</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(driver).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">move_to_element</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(above).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">perform</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span></code></pre></div><h2 id="_8-键盘事件" tabindex="-1"><a class="header-anchor" href="#_8-键盘事件"><span>8. 键盘事件</span></a></h2><p>以下为常用的键盘操作：</p><ul><li>send_keys(Keys.BACK_SPACE) 删除键（BackSpace）</li><li>send_keys(Keys.SPACE) 空格键(Space)</li><li>send_keys(Keys.TAB) 制表键(Tab)</li><li>send_keys(Keys.ESCAPE) 回退键（Esc）</li><li>send_keys(Keys.ENTER) 回车键（Enter）</li><li>send_keys(Keys.CONTROL,&#39;a&#39;) 全选（Ctrl+A）</li><li>send_keys(Keys.CONTROL,&#39;c&#39;) 复制（Ctrl+C）</li><li>send_keys(Keys.CONTROL,&#39;x&#39;) 剪切（Ctrl+X）</li><li>send_keys(Keys.CONTROL,&#39;v&#39;) 粘贴（Ctrl+V）</li><li>send_keys(Keys.F1) 键盘 F1</li><li>……</li><li>send_keys(Keys.F12) 键盘 F12</li></ul><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span># 输入框输入内容</span></span>
<span class="line"><span>driver.find_element_by_id(&quot;kw&quot;).send_keys(&quot;seleniumm&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除多输入的一个 m</span></span>
<span class="line"><span>driver.find_element_by_id(&quot;kw&quot;).send_keys(Keys.BACK_SPACE)</span></span></code></pre></div><h2 id="_9-警告框处理" tabindex="-1"><a class="header-anchor" href="#_9-警告框处理"><span>9. 警告框处理</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>alert = driver.switch_to_alert()</span></span></code></pre></div><ul><li>text：返回 alert/confirm/prompt 中的文字信息。</li><li>accept()：接受现有警告框。</li><li>dismiss()：解散现有警告框。</li><li>send_keys(keysToSend)：发送文本至警告框。keysToSend：将文本发送至警告框。</li></ul><h2 id="_10-下拉框选择" tabindex="-1"><a class="header-anchor" href="#_10-下拉框选择"><span>10. 下拉框选择</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>from selenium import webdriver</span></span>
<span class="line"><span>from selenium.webdriver.support.select import Select</span></span>
<span class="line"><span>from time import sleep</span></span>
<span class="line"><span></span></span>
<span class="line"><span>driver = webdriver.Chrome()</span></span>
<span class="line"><span>driver.implicitly_wait(10)</span></span>
<span class="line"><span>driver.get(&#39;http://www.baidu.com&#39;)</span></span>
<span class="line"><span>sel = driver.find_element_by_xpath(&quot;//select[@id=&#39;nr&#39;]&quot;)</span></span>
<span class="line"><span>Select(sel).select_by_value(&#39;50&#39;)  # 显示50条</span></span></code></pre></div><h2 id="_11-文件上传" tabindex="-1"><a class="header-anchor" href="#_11-文件上传"><span>11. 文件上传</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>driver.find_element_by_name(&quot;file&quot;).send_keys(&#39;D:\\\\upload_file.txt&#39;)  # # 定位上传按钮，添加本地文件</span></span></code></pre></div><h2 id="_12-cookie操作" tabindex="-1"><a class="header-anchor" href="#_12-cookie操作"><span>12. cookie操作</span></a></h2><p>WebDriver操作cookie的方法：</p><ul><li>get_cookies()： 获得所有cookie信息。</li><li>get_cookie(name)： 返回字典的key为“name”的cookie信息。</li><li>add_cookie(cookie_dict) ： 添加cookie。“cookie_dict”指字典对象，必须有name 和value 值。</li><li>delete_cookie(name,optionsString)：删除cookie信息。“name”是要删除的cookie的名称，“optionsString”是该cookie的选项，目前支持的选项包括“路径”，“域”。</li><li>delete_all_cookies()： 删除所有cookie信息</li></ul><h2 id="_13-调用javascript代码" tabindex="-1"><a class="header-anchor" href="#_13-调用javascript代码"><span>13. 调用JavaScript代码</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>js=&quot;window.scrollTo(100,450);&quot;</span></span>
<span class="line"><span>driver.execute_script(js) # 通过javascript设置浏览器窗口的滚动条位置</span></span></code></pre></div><p>通过execute_script()方法执行JavaScripts代码来移动滚动条的位置。</p><h2 id="_14-窗口截图" tabindex="-1"><a class="header-anchor" href="#_14-窗口截图"><span>14. 窗口截图</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>driver.get_screenshot_as_file(&quot;D:\\\\baidu_img.jpg&quot;) # 截取当前窗口，并指定截图图片的保存位置</span></span></code></pre></div><h2 id="_15-关闭浏览器" tabindex="-1"><a class="header-anchor" href="#_15-关闭浏览器"><span>15. 关闭浏览器</span></a></h2><ul><li>close() 关闭单个窗口</li><li>quit() 关闭所有窗口</li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/111859925" target="_blank" rel="noopener noreferrer">Selenium Python 教程</a></p><p><a href="https://selenium-python-zh.readthedocs.io/en/latest/locating-elements.html" target="_blank" rel="noopener noreferrer">selenium官方文档</a></p>`,65)]))}const p=a(l,[["render",r],["__file","python-selenium-started.html.vue"]]),d=JSON.parse(`{"path":"/posts/Python/python-selenium-started.html","title":"Selenium入门","lang":"zh-CN","frontmatter":{"description":"Selenium入门 1. 简介 Selenium是 自动化测试工具。它支持各种浏览器，包括 Chrome，Safari，Firefox 等主流界面式浏览器。主要用电脑模拟人操作浏览器网页，可以实现自动化，测试等 2. 初步体验 忽略安装Selenium 和 浏览器驱动安装和配置，如有需求自行百度 运行如下代码，会自动打开浏览器，然后访问百度。 ima...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Python/python-selenium-started.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Selenium入门"}],["meta",{"property":"og:description","content":"Selenium入门 1. 简介 Selenium是 自动化测试工具。它支持各种浏览器，包括 Chrome，Safari，Firefox 等主流界面式浏览器。主要用电脑模拟人操作浏览器网页，可以实现自动化，测试等 2. 初步体验 忽略安装Selenium 和 浏览器驱动安装和配置，如有需求自行百度 运行如下代码，会自动打开浏览器，然后访问百度。 ima..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955271.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Selenium入门\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955271.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404230955312.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 初步体验","slug":"_2-初步体验","link":"#_2-初步体验","children":[]},{"level":2,"title":"3. 模拟提交","slug":"_3-模拟提交","link":"#_3-模拟提交","children":[]},{"level":2,"title":"4. 元素定位","slug":"_4-元素定位","link":"#_4-元素定位","children":[]},{"level":2,"title":"5. 控制浏览器操作","slug":"_5-控制浏览器操作","link":"#_5-控制浏览器操作","children":[]},{"level":2,"title":"6. Webelement常用方法","slug":"_6-webelement常用方法","link":"#_6-webelement常用方法","children":[]},{"level":2,"title":"7. 鼠标操作","slug":"_7-鼠标操作","link":"#_7-鼠标操作","children":[]},{"level":2,"title":"8. 键盘事件","slug":"_8-键盘事件","link":"#_8-键盘事件","children":[]},{"level":2,"title":"9. 警告框处理","slug":"_9-警告框处理","link":"#_9-警告框处理","children":[]},{"level":2,"title":"10. 下拉框选择","slug":"_10-下拉框选择","link":"#_10-下拉框选择","children":[]},{"level":2,"title":"11. 文件上传","slug":"_11-文件上传","link":"#_11-文件上传","children":[]},{"level":2,"title":"12. cookie操作","slug":"_12-cookie操作","link":"#_12-cookie操作","children":[]},{"level":2,"title":"13. 调用JavaScript代码","slug":"_13-调用javascript代码","link":"#_13-调用javascript代码","children":[]},{"level":2,"title":"14. 窗口截图","slug":"_14-窗口截图","link":"#_14-窗口截图","children":[]},{"level":2,"title":"15. 关闭浏览器","slug":"_15-关闭浏览器","link":"#_15-关闭浏览器","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.89,"words":1166},"filePathRelative":"posts/Python/python-selenium-started.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>Selenium是 自动化测试工具。它支持各种浏览器，包括 Chrome，Safari，Firefox 等主流界面式浏览器。主要用电脑模拟人操作浏览器网页，可以实现自动化，测试等</p>\\n<h2>2. 初步体验</h2>\\n<blockquote>\\n<p>忽略安装Selenium 和 浏览器驱动安装和配置，如有需求自行百度</p>\\n</blockquote>\\n<p>运行如下代码，会自动打开浏览器，然后访问百度。</p>\\n<div class=\\"language-\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>from selenium import webdriver</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>browser = webdriver.Chrome()</span></span>\\n<span class=\\"line\\"><span># browser = webdriver.Chrome(r\\"C:\\\\Users\\\\Administrator\\\\Downloads\\\\chromedriver_win32\\\\chromedriver.exe\\")</span></span>\\n<span class=\\"line\\"><span>browser.get('http://www.baidu.com/')</span></span></code></pre>\\n</div>","autoDesc":true}`);export{p as comp,d as data};
