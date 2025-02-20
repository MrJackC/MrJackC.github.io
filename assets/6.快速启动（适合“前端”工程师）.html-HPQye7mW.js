import{_ as e,c as n,a as i,o as s}from"./app-4x2aIoqi.js";const o={};function t(r,a){return s(),n("div",null,a[0]||(a[0]=[i(`<h1 id="快速启动-适合-前端-工程师" tabindex="-1"><a class="header-anchor" href="#快速启动-适合-前端-工程师"><span>快速启动（适合“前端”工程师）</span></a></h1><p>目标：在 <strong>本地</strong> 将前端项目运行起来，使用 <strong>远程</strong> 演示环境的后端服务。</p><p>整个过程非常简单，预计 5 分钟就可以完成，取决于大家的网速。</p><p>接口文档？</p><p>阅读 <a href="https://doc.iocoder.cn/api-doc" target="_blank" rel="noopener noreferrer">《开发指南 —— 接口文档》</a> 呀~~</p><h2 id="_2-启动-vue3-element-plus-管理后台" tabindex="-1"><a class="header-anchor" href="#_2-启动-vue3-element-plus-管理后台"><span><a href="https://doc.iocoder.cn/quick-start-front/#_2-%E5%90%AF%E5%8A%A8-vue3-element-plus-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>2. 启动 Vue3 + element-plus 管理后台</span></a></h2><p><a href="https://github.com/yudaocode/yudao-ui-admin-vue3/" target="_blank" rel="noopener noreferrer"><code>yudao-ui-admin-vue3</code> (opens new window)</a>是前端 Vue3 管理后台项目。</p><p>① 克隆 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3.git" target="_blank" rel="noopener noreferrer">https://github.com/yudaocode/yudao-ui-admin-vue3.git (opens new window)</a>项目，并 Star 关注下该项目。</p><p>② 在根目录执行如下命令，进行启动：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 pnpm，提升依赖的安装速度</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> set</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://registry.npmjs.org</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -g</span><span style="color:#98C379;--shiki-dark:#98C379;"> pnpm</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pnpm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> front</span></span></code></pre></div><p>③ 启动完成后，浏览器会自动打开 <a href="http://localhost/" target="_blank" rel="noopener noreferrer">http://localhost:80 (opens new window)</a>地址，可以看到前端界面。</p><figure><img src="https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-vue3-login.png?imageView2/2/format/webp/w/1280" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><p>友情提示：Vue3 使用 Vite 构建，所以它存在如下的情况，都是正常的：</p><ol><li>项目启动很快，浏览器打开需要等待 1 分钟左右，请保持耐心。</li><li>点击菜单，感觉会有一点卡顿，因为 Vite 采用懒加载机制。不用担心，最终部署到生产环境，就不存在这个问题了。</li></ol><p>详细说明，可见 <a href="https://juejin.cn/post/7129041114174062628" target="_blank" rel="noopener noreferrer">《为什么有人说 Vite 快，有人却说 Vite 慢？》 (opens new window)</a>文章。</p><h2 id="_3-启动-vue3-vben-ant-design-vue-管理后台" tabindex="-1"><a class="header-anchor" href="#_3-启动-vue3-vben-ant-design-vue-管理后台"><span><a href="https://doc.iocoder.cn/quick-start-front/#_3-%E5%90%AF%E5%8A%A8-vue3-vben-ant-design-vue-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>3. 启动 Vue3 + vben(ant-design-vue) 管理后台</span></a></h2><p><a href="https://github.com/yudaocode/yudao-ui-admin-vben/" target="_blank" rel="noopener noreferrer"><code>yudao-ui-admin-vue3</code> (opens new window)</a>是前端 Vue3 + vben(ant-design-vue) 管理后台项目。</p><p>① 克隆 <a href="https://github.com/yudaocode/yudao-ui-admin-vben.git" target="_blank" rel="noopener noreferrer">https://github.com/yudaocode/yudao-ui-admin-vben.git (opens new window)</a>项目，并 Star 关注下该项目。</p><p>② 在根目录执行如下命令，进行启动：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 pnpm，提升依赖的安装速度</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> config</span><span style="color:#98C379;--shiki-dark:#98C379;"> set</span><span style="color:#98C379;--shiki-dark:#98C379;"> registry</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://registry.npmjs.org</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -g</span><span style="color:#98C379;--shiki-dark:#98C379;"> pnpm</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">pnpm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> front</span></span></code></pre></div><p>③ 启动完成后，浏览器会自动打开 <a href="http://localhost/" target="_blank" rel="noopener noreferrer">http://localhost:80 (opens new window)</a>地址，可以看到前端界面。</p><figure><img src="https://doc.iocoder.cn/img/快速启动/前端界面-vben.png" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><h2 id="_4-启动-vue2-管理后台" tabindex="-1"><a class="header-anchor" href="#_4-启动-vue2-管理后台"><span><a href="https://doc.iocoder.cn/quick-start-front/#_4-%E5%90%AF%E5%8A%A8-vue2-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>4. 启动 Vue2 管理后台</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/" target="_blank" rel="noopener noreferrer"><code>yudao-ui-admin</code> (opens new window)</a>是前端 Vue2 管理后台项目。</p><p>〇 克隆 <a href="https://github.com/YunaiV/ruoyi-vue-pro.git" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/ruoyi-vue-pro.git (opens new window)</a>项目，并 Star 关注下该项目。</p><p>① 在 <code>yudao-ui-admin</code> 目录下，执行如下命令，进行启动：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入项目目录</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> yudao-ui-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 Yarn，提升依赖的安装速度</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> --global</span><span style="color:#98C379;--shiki-dark:#98C379;"> yarn</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">yarn</span><span style="color:#98C379;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> run</span><span style="color:#98C379;--shiki-dark:#98C379;"> front</span></span></code></pre></div><figure><img src="http://static.iocoder.cn/images/Yudao/2021-02-21/41.png?imageView2/2/format/webp/w/1280" alt="启动前端项目" tabindex="0" loading="lazy"><figcaption>启动前端项目</figcaption></figure><p>② 启动完成后，浏览器会自动打开 <a href="http://localhost:1024/" target="_blank" rel="noopener noreferrer">http://localhost:1024 (opens new window)</a>地址，可以看到前端界面。</p><figure><img src="https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-vue2-login.png?imageView2/2/format/webp/w/1280" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><h2 id="_5-启动-uni-app-管理后台" tabindex="-1"><a class="header-anchor" href="#_5-启动-uni-app-管理后台"><span><a href="https://doc.iocoder.cn/quick-start-front/#_5-%E5%90%AF%E5%8A%A8-uni-app-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>5. 启动 uni-app 管理后台</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin-uniapp/" target="_blank" rel="noopener noreferrer"><code>yudao-ui-admin-uniapp</code> (opens new window)</a>是前端 uni-app 管理后台项目。</p><p>〇 克隆 <a href="https://github.com/YunaiV/ruoyi-vue-pro.git" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/ruoyi-vue-pro.git (opens new window)</a>项目，并 Star 关注下该项目。</p><p>① 下载 <a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noopener noreferrer">HBuilder (opens new window)</a>工具，并进行安装。</p><p>② 点击 HBuilder 的 [文件 -&gt; 导入 -&gt; 从本地项目导入...] 菜单，选择项目的 <code>yudao-ui-admin-uniapp</code> 目录。</p><p>然后，修改 <code>config.js</code> 配置文件的 <code>baseUrl</code> 后端服务的地址为 <code>&#39;http://api-dashboard.yudao.iocoder.cn</code>。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/快速启动/修改后台uniapp的config.png" alt="修改  配置文件的  后端服务的地址" tabindex="0" loading="lazy"><figcaption>修改 配置文件的 后端服务的地址</figcaption></figure><p>③ 执行如下命令，安装 npm 依赖：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入项目目录</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">cd</span><span style="color:#98C379;--shiki-dark:#98C379;"> yudao-ui-admin-uniapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 npm 依赖</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">npm</span><span style="color:#98C379;--shiki-dark:#98C379;"> i</span></span></code></pre></div><p>④ 点击 HBuilder 的 [运行 -&gt; 运行到内置浏览器] 菜单，使用 H5 的方式运行。成功后，界面如下图所示：</p><figure><img src="https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-uniapp-login.png?imageView2/2/format/webp/w/1280" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><p>友情提示：登录时，滑块验证码，在内存浏览器可能存在兼容性的问题，此时使用 Chrome 浏览器，并使用“开发者工具”，设置为 iPhone 12 Pro 模式！</p><h2 id="_6-启动-uni-app-用户前台" tabindex="-1"><a class="header-anchor" href="#_6-启动-uni-app-用户前台"><span><a href="https://doc.iocoder.cn/quick-start-front/#_6-%E5%90%AF%E5%8A%A8-uni-app-%E7%94%A8%E6%88%B7%E5%89%8D%E5%8F%B0" target="_blank" rel="noopener noreferrer">#</a>6. 启动 uni-app 用户前台</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-app/" target="_blank" rel="noopener noreferrer"><code>yudao-ui-app</code> (opens new window)</a>是前端 uni-app 用户前台项目。</p><p>〇 克隆 <a href="https://github.com/YunaiV/ruoyi-vue-pro.git" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/ruoyi-vue-pro.git (opens new window)</a>项目，并 Star 关注下该项目。</p><p>① 下载 <a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noopener noreferrer">HBuilder (opens new window)</a>工具，并进行安装。</p><p>② 点击 HBuilder 的 [文件 -&gt; 导入 -&gt; 从本地项目导入...] 菜单，选择项目的 <code>yudao-ui-app</code> 目录</p><p>然后，修改 <code>config.js</code> 配置文件的 <code>baseUrl</code> 后端服务的地址为 <code>&#39;http://api-dashboard.yudao.iocoder.cn/app-api</code>。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/快速启动/修改前台uniapp的config.png" alt="修改  配置文件的  后端服务的地址" tabindex="0" loading="lazy"><figcaption>修改 配置文件的 后端服务的地址</figcaption></figure><p>③ 点击 HBuilder 的 [运行 -&gt; 运行到内置浏览器] 菜单，使用 H5 的方式运行。成功后，界面如下图所示：</p><figure><img src="http://static.iocoder.cn/images/Yudao/2021-02-21/71.png?imageView2/2/format/webp/w/1280" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><h2 id="_7-参与项目" tabindex="-1"><a class="header-anchor" href="#_7-参与项目"><span><a href="https://doc.iocoder.cn/quick-start-front/#_7-%E5%8F%82%E4%B8%8E%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">#</a>7. 参与项目</span></a></h2><p>如果你想参与到前端项目的开发，可以微信 wangwenbin-server 噢。</p><p>近期，重点开发 Vue3 管理后台、uniapp 商城，欢迎大家参与进来。</p><p>上次更新: 2023/04/15, 00:03:57</p>`,55)]))}const l=e(o,[["render",t],["__file","6.快速启动（适合“前端”工程师）.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/1.%E8%90%8C%E6%96%B0%E5%BF%85%E8%AF%BB/6.%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%EF%BC%88%E9%80%82%E5%90%88%E2%80%9C%E5%89%8D%E7%AB%AF%E2%80%9D%E5%B7%A5%E7%A8%8B%E5%B8%88%EF%BC%89.html","title":"快速启动（适合“前端”工程师）","lang":"zh-CN","frontmatter":{"description":"快速启动（适合“前端”工程师） 目标：在 本地 将前端项目运行起来，使用 远程 演示环境的后端服务。 整个过程非常简单，预计 5 分钟就可以完成，取决于大家的网速。 接口文档？ 阅读 《开发指南 —— 接口文档》 呀~~ #2. 启动 Vue3 + element-plus 管理后台 yudao-ui-admin-vue3 (opens new win...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/1.%E8%90%8C%E6%96%B0%E5%BF%85%E8%AF%BB/6.%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%EF%BC%88%E9%80%82%E5%90%88%E2%80%9C%E5%89%8D%E7%AB%AF%E2%80%9D%E5%B7%A5%E7%A8%8B%E5%B8%88%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"快速启动（适合“前端”工程师）"}],["meta",{"property":"og:description","content":"快速启动（适合“前端”工程师） 目标：在 本地 将前端项目运行起来，使用 远程 演示环境的后端服务。 整个过程非常简单，预计 5 分钟就可以完成，取决于大家的网速。 接口文档？ 阅读 《开发指南 —— 接口文档》 呀~~ #2. 启动 Vue3 + element-plus 管理后台 yudao-ui-admin-vue3 (opens new win..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-vue3-login.png?imageView2/2/format/webp/w/1280"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速启动（适合“前端”工程师）\\",\\"image\\":[\\"https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-vue3-login.png?imageView2/2/format/webp/w/1280\\",\\"https://doc.iocoder.cn/img/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8/%E5%89%8D%E7%AB%AF%E7%95%8C%E9%9D%A2-vben.png\\",\\"http://static.iocoder.cn/images/Yudao/2021-02-21/41.png?imageView2/2/format/webp/w/1280\\",\\"https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-vue2-login.png?imageView2/2/format/webp/w/1280\\",\\"https://doc.iocoder.cn/img/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8/%E4%BF%AE%E6%94%B9%E5%90%8E%E5%8F%B0uniapp%E7%9A%84config.png\\",\\"https://static.iocoder.cn/images/Yudao/2022-09-04/yudao-admin-uniapp-login.png?imageView2/2/format/webp/w/1280\\",\\"https://doc.iocoder.cn/img/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8/%E4%BF%AE%E6%94%B9%E5%89%8D%E5%8F%B0uniapp%E7%9A%84config.png\\",\\"http://static.iocoder.cn/images/Yudao/2021-02-21/71.png?imageView2/2/format/webp/w/1280\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#2. 启动 Vue3 + element-plus 管理后台","slug":"_2-启动-vue3-element-plus-管理后台","link":"#_2-启动-vue3-element-plus-管理后台","children":[]},{"level":2,"title":"#3. 启动 Vue3 + vben(ant-design-vue) 管理后台","slug":"_3-启动-vue3-vben-ant-design-vue-管理后台","link":"#_3-启动-vue3-vben-ant-design-vue-管理后台","children":[]},{"level":2,"title":"#4. 启动 Vue2 管理后台","slug":"_4-启动-vue2-管理后台","link":"#_4-启动-vue2-管理后台","children":[]},{"level":2,"title":"#5. 启动 uni-app 管理后台","slug":"_5-启动-uni-app-管理后台","link":"#_5-启动-uni-app-管理后台","children":[]},{"level":2,"title":"#6. 启动 uni-app 用户前台","slug":"_6-启动-uni-app-用户前台","link":"#_6-启动-uni-app-用户前台","children":[]},{"level":2,"title":"#7. 参与项目","slug":"_7-参与项目","link":"#_7-参与项目","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.46,"words":1339},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/1.萌新必读/6.快速启动（适合“前端”工程师）.md","localizedDate":"2024年11月21日","excerpt":"\\n<p>目标：在 <strong>本地</strong> 将前端项目运行起来，使用 <strong>远程</strong> 演示环境的后端服务。</p>\\n<p>整个过程非常简单，预计 5 分钟就可以完成，取决于大家的网速。</p>\\n<p>接口文档？</p>\\n<p>阅读 <a href=\\"https://doc.iocoder.cn/api-doc\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《开发指南 —— 接口文档》</a> 呀~~</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#_2-启动-vue3-element-plus-管理后台\\"><span></span></a><a href=\\"https://doc.iocoder.cn/quick-start-front/#_2-%E5%90%AF%E5%8A%A8-vue3-element-plus-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>2. 启动 Vue3 + element-plus 管理后台</h2>","autoDesc":true}');export{l as comp,c as data};
