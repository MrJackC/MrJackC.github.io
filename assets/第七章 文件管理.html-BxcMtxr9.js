import{_ as e,c as i,a as t,o as a}from"./app-JRvFIbSa.js";const n={};function r(s,l){return a(),i("div",null,l[0]||(l[0]=[t('<h1 id="第七章-文件管理" tabindex="-1"><a class="header-anchor" href="#第七章-文件管理"><span>第七章：文件管理</span></a></h1><h2 id="数据项" tabindex="-1"><a class="header-anchor" href="#数据项"><span>数据项</span></a></h2><ul><li>基本数据项</li><li>组合数据项</li></ul><h2 id="记录" tabindex="-1"><a class="header-anchor" href="#记录"><span>记录</span></a></h2><ul><li>记录是一组相关数据项的集合，用于描述一个对象在某个方面的属性</li></ul><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h2><ul><li>文件类型</li><li>文件长度</li><li>文件的物理位置</li><li>文件的建立时间</li></ul><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h2><ul><li>创建文件</li><li>删除文件</li><li>读文件</li><li>写文件</li><li>设置文件读写的位置</li></ul><h2 id="文件的逻辑结构" tabindex="-1"><a class="header-anchor" href="#文件的逻辑结构"><span>文件的逻辑结构</span></a></h2><ul><li>顺序文件</li><li>记录寻址</li><li>索引文件</li><li>索引顺序文件</li><li>直接文件和哈希文件</li></ul><h2 id="文件目录" tabindex="-1"><a class="header-anchor" href="#文件目录"><span>文件目录</span></a></h2><ul><li>文件控制块（FCB）</li></ul><ul><li>文件名+inode(属性)</li></ul><ul><li>简单的文件目录</li></ul><ul><li>单级文件目录 <ul><li>查找慢</li><li>不允许重名</li><li>不便于实现文件共享</li></ul></li><li>两级文件目录 <ul><li>提高检索速度，从M*N到M+N</li></ul></li></ul><h3 id="树形结构目录" tabindex="-1"><a class="header-anchor" href="#树形结构目录"><span>树形结构目录</span></a></h3><ul><li>路径名 <ul><li>“..”是父目录</li><li>“/”是根目录</li><li>区别绝对路径和相对路径（../.../.../1/2/3/）</li></ul></li></ul><h2 id="文件共享" tabindex="-1"><a class="header-anchor" href="#文件共享"><span>文件共享</span></a></h2><h3 id="有向无循环图-dag" tabindex="-1"><a class="header-anchor" href="#有向无循环图-dag"><span>有向无循环图（DAG）</span></a></h3><h3 id="利用符号链接实现文件共享" tabindex="-1"><a class="header-anchor" href="#利用符号链接实现文件共享"><span>利用符号链接实现文件共享</span></a></h3><ul><li>实际上就是“快捷方式”</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第七章 文件管理.png" alt="第七章 文件管理" tabindex="0" loading="lazy"><figcaption>第七章 文件管理</figcaption></figure>',23)]))}const o=e(n,[["render",r],["__file","第七章 文件管理.html.vue"]]),c=JSON.parse('{"path":"/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%B8%83%E7%AB%A0%20%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html","title":"8、文件管理","lang":"zh-CN","frontmatter":{"title":"8、文件管理","date":"2024-01-01 13:56","category":["操作系统"],"tag":["操作系统"],"description":"第七章：文件管理 数据项 基本数据项 组合数据项 记录 记录是一组相关数据项的集合，用于描述一个对象在某个方面的属性 文件 文件类型 文件长度 文件的物理位置 文件的建立时间 文件操作 创建文件 删除文件 读文件 写文件 设置文件读写的位置 文件的逻辑结构 顺序文件 记录寻址 索引文件 索引顺序文件 直接文件和哈希文件 文件目录 文件控制块（FCB） ...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Computer-Basics/Operating-System/%E7%AC%AC%E4%B8%83%E7%AB%A0%20%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"8、文件管理"}],["meta",{"property":"og:description","content":"第七章：文件管理 数据项 基本数据项 组合数据项 记录 记录是一组相关数据项的集合，用于描述一个对象在某个方面的属性 文件 文件类型 文件长度 文件的物理位置 文件的建立时间 文件操作 创建文件 删除文件 读文件 写文件 设置文件读写的位置 文件的逻辑结构 顺序文件 记录寻址 索引文件 索引顺序文件 直接文件和哈希文件 文件目录 文件控制块（FCB） ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第七章%20文件管理.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T09:16:19.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2024-01-01T13:56:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T09:16:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8、文件管理\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/第七章%20文件管理.png\\"],\\"datePublished\\":\\"2024-01-01T13:56:00.000Z\\",\\"dateModified\\":\\"2024-10-25T09:16:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"数据项","slug":"数据项","link":"#数据项","children":[]},{"level":2,"title":"记录","slug":"记录","link":"#记录","children":[]},{"level":2,"title":"文件","slug":"文件","link":"#文件","children":[]},{"level":2,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]},{"level":2,"title":"文件的逻辑结构","slug":"文件的逻辑结构","link":"#文件的逻辑结构","children":[]},{"level":2,"title":"文件目录","slug":"文件目录","link":"#文件目录","children":[{"level":3,"title":"树形结构目录","slug":"树形结构目录","link":"#树形结构目录","children":[]}]},{"level":2,"title":"文件共享","slug":"文件共享","link":"#文件共享","children":[{"level":3,"title":"有向无循环图（DAG）","slug":"有向无循环图-dag","link":"#有向无循环图-dag","children":[]},{"level":3,"title":"利用符号链接实现文件共享","slug":"利用符号链接实现文件共享","link":"#利用符号链接实现文件共享","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729847779000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":2}]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"posts/Computer-Basics/Operating-System/第七章 文件管理.md","localizedDate":"2024年1月1日","excerpt":"\\n<h2>数据项</h2>\\n<ul>\\n<li>基本数据项</li>\\n<li>组合数据项</li>\\n</ul>\\n<h2>记录</h2>\\n<ul>\\n<li>记录是一组相关数据项的集合，用于描述一个对象在某个方面的属性</li>\\n</ul>\\n<h2>文件</h2>\\n<ul>\\n<li>文件类型</li>\\n<li>文件长度</li>\\n<li>文件的物理位置</li>\\n<li>文件的建立时间</li>\\n</ul>\\n<h2>文件操作</h2>\\n<ul>\\n<li>创建文件</li>\\n<li>删除文件</li>\\n<li>读文件</li>\\n<li>写文件</li>\\n<li>设置文件读写的位置</li>\\n</ul>","autoDesc":true}');export{o as comp,c as data};
