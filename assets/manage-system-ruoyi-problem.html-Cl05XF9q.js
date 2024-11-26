import{_ as e,c as i,a as n,o as t}from"./app-JRvFIbSa.js";const a={};function p(o,l){return t(),i("div",null,l[0]||(l[0]=[n('<h1 id="若依优化与问题记录" tabindex="-1"><a class="header-anchor" href="#若依优化与问题记录"><span>若依优化与问题记录</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>记录使用过程中bug或优化建议</p><h2 id="_2-若依bug" tabindex="-1"><a class="header-anchor" href="#_2-若依bug"><span>2. 若依BUG</span></a></h2><h3 id="_2-1-后端" tabindex="-1"><a class="header-anchor" href="#_2-1-后端"><span>2.1 后端</span></a></h3><ol><li>树结构采用递归方式，导致系统超时</li></ol><h3 id="_2-2-前端" tabindex="-1"><a class="header-anchor" href="#_2-2-前端"><span>2.2 前端</span></a></h3><ol><li>修复打包后字体图标偶现的乱码问题（提交RP时，发现最新版3.8一星期前已提交）</li></ol><h2 id="_3-若依优化" tabindex="-1"><a class="header-anchor" href="#_3-若依优化"><span>3. 若依优化</span></a></h2><h3 id="_3-1-后端" tabindex="-1"><a class="header-anchor" href="#_3-1-后端"><span>3.1 后端</span></a></h3><ol><li><p>数据库主键自增，在分布式场景下的局限非常大，且迁移的时候非常麻烦</p></li><li><p>适配多数据源</p><ol><li>现在从mysql变更到oracle 不单单sql 语句不支持</li></ol></li><li><p>多数据库支持</p><ol><li>代码层与代码生成器都适配</li><li>方案 <ol><li>我的方案：根据数据库类型，针对有方言问题的sql写兼容sql</li><li>若依大佬：疯狂的狮子和芋道源码的做法，都是将此部门功能移到mybatis plus</li></ol></li></ol></li><li><p>主键采用自增方案，不适合分布式架构</p><blockquote><p>若依作者：我只能说你想多了，你说的方式对大部分人来说用不到，且不友好。<br> 如果有分布式需求或安全要求可以自己根据实际情况去修改。</p></blockquote></li><li><p>代码生成swagger模板（已提交PR）</p></li><li><p>日志输出格式优化，控制台彩色日志，info与error 同一文件输出，方便实施导出日志</p></li><li><p>下载的方式很麻烦。先生成文件，返回文件名给前端。再拿文件名 windows.open</p></li><li><p>分页控制在controller，只能第一个查询才能分页（PageHelper 方案问题）</p></li><li><p>excel 操作太难用</p></li><li><p>文件下载方式太奇葩，还先获取文件名，再去下载</p></li><li><p>树结构采用递归方式性能损耗极大</p></li><li><p>Redis 并发，高可用问题</p></li><li><p>日志分散在各个系统，最好能记录下日志链路</p></li><li><p>系统监控是单点的，集群环境下只能监控到请求的那台服务器。且获取系统信息超级慢</p></li><li><p>返回结果不支持泛型，在接口文档处不能很好的体现返回值</p></li><li><p>部分场景 用户ip 获取不准确，hutool 的工具类可以</p></li></ol><h3 id="_3-2-前端" tabindex="-1"><a class="header-anchor" href="#_3-2-前端"><span>3.2 前端</span></a></h3><ol><li>前端下载文件指定文件名</li><li>自动生成的前端弹框，容易误触消失（准备提交PR）</li></ol>',13)]))}const s=e(a,[["render",p],["__file","manage-system-ruoyi-problem.html.vue"]]),h=JSON.parse('{"path":"/posts/Architect/manage-system/manage-system-ruoyi-problem.html","title":"若依优化与问题记录","lang":"zh-CN","frontmatter":{"description":"若依优化与问题记录 1. 背景 记录使用过程中bug或优化建议 2. 若依BUG 2.1 后端 树结构采用递归方式，导致系统超时 2.2 前端 修复打包后字体图标偶现的乱码问题（提交RP时，发现最新版3.8一星期前已提交） 3. 若依优化 3.1 后端 数据库主键自增，在分布式场景下的局限非常大，且迁移的时候非常麻烦 适配多数据源 现在从mysql变更...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/manage-system/manage-system-ruoyi-problem.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"若依优化与问题记录"}],["meta",{"property":"og:description","content":"若依优化与问题记录 1. 背景 记录使用过程中bug或优化建议 2. 若依BUG 2.1 后端 树结构采用递归方式，导致系统超时 2.2 前端 修复打包后字体图标偶现的乱码问题（提交RP时，发现最新版3.8一星期前已提交） 3. 若依优化 3.1 后端 数据库主键自增，在分布式场景下的局限非常大，且迁移的时候非常麻烦 适配多数据源 现在从mysql变更..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"若依优化与问题记录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 若依BUG","slug":"_2-若依bug","link":"#_2-若依bug","children":[{"level":3,"title":"2.1 后端","slug":"_2-1-后端","link":"#_2-1-后端","children":[]},{"level":3,"title":"2.2 前端","slug":"_2-2-前端","link":"#_2-2-前端","children":[]}]},{"level":2,"title":"3. 若依优化","slug":"_3-若依优化","link":"#_3-若依优化","children":[{"level":3,"title":"3.1 后端","slug":"_3-1-后端","link":"#_3-1-后端","children":[]},{"level":3,"title":"3.2 前端","slug":"_3-2-前端","link":"#_3-2-前端","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"posts/Architect/manage-system/manage-system-ruoyi-problem.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>记录使用过程中bug或优化建议</p>\\n<h2>2. 若依BUG</h2>\\n<h3>2.1 后端</h3>\\n<ol>\\n<li>树结构采用递归方式，导致系统超时</li>\\n</ol>\\n<h3>2.2 前端</h3>\\n<ol>\\n<li>修复打包后字体图标偶现的乱码问题（提交RP时，发现最新版3.8一星期前已提交）</li>\\n</ol>\\n<h2>3. 若依优化</h2>\\n<h3>3.1 后端</h3>\\n<ol>\\n<li>\\n<p>数据库主键自增，在分布式场景下的局限非常大，且迁移的时候非常麻烦</p>\\n</li>\\n<li>\\n<p>适配多数据源</p>\\n<ol>\\n<li>现在从mysql变更到oracle 不单单sql 语句不支持</li>\\n</ol>\\n</li>\\n<li>\\n<p>多数据库支持</p>\\n<ol>\\n<li>代码层与代码生成器都适配</li>\\n<li>方案\\n<ol>\\n<li>我的方案：根据数据库类型，针对有方言问题的sql写兼容sql</li>\\n<li>若依大佬：疯狂的狮子和芋道源码的做法，都是将此部门功能移到mybatis plus</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n<li>\\n<p>主键采用自增方案，不适合分布式架构</p>\\n<blockquote>\\n<p>若依作者：我只能说你想多了，你说的方式对大部分人来说用不到，且不友好。<br>\\n如果有分布式需求或安全要求可以自己根据实际情况去修改。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>代码生成swagger模板（已提交PR）</p>\\n</li>\\n<li>\\n<p>日志输出格式优化，控制台彩色日志，info与error 同一文件输出，方便实施导出日志</p>\\n</li>\\n<li>\\n<p>下载的方式很麻烦。先生成文件，返回文件名给前端。再拿文件名 windows.open</p>\\n</li>\\n<li>\\n<p>分页控制在controller，只能第一个查询才能分页（PageHelper 方案问题）</p>\\n</li>\\n<li>\\n<p>excel 操作太难用</p>\\n</li>\\n<li>\\n<p>文件下载方式太奇葩，还先获取文件名，再去下载</p>\\n</li>\\n<li>\\n<p>树结构采用递归方式性能损耗极大</p>\\n</li>\\n<li>\\n<p>Redis 并发，高可用问题</p>\\n</li>\\n<li>\\n<p>日志分散在各个系统，最好能记录下日志链路</p>\\n</li>\\n<li>\\n<p>系统监控是单点的，集群环境下只能监控到请求的那台服务器。且获取系统信息超级慢</p>\\n</li>\\n<li>\\n<p>返回结果不支持泛型，在接口文档处不能很好的体现返回值</p>\\n</li>\\n<li>\\n<p>部分场景 用户ip 获取不准确，hutool 的工具类可以</p>\\n</li>\\n</ol>","autoDesc":true}');export{s as comp,h as data};
