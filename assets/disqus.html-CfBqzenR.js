import{_ as t,c as o,a,o as r}from"./app-CZJgH_ea.js";const i={};function n(s,e){return r(),o("div",null,e[0]||(e[0]=[a('<blockquote><p>由于多说评论系统将于 6 月 1 日下线，所以准备迁移至<a href="https://disqus.com/" target="_blank" rel="noopener noreferrer">disqus</a>，相比较的话对于国内环境还是多说好用一点，毕竟加载快，支持各大媒体的分享，也不用小伙伴们翻墙；而 disqus 分享也只支持 Facebook 和 twitter。。PS:貌似现在又被墙了，以后有时间再换吧，目前就先这样，国内据说<a href="http://changyan.kuaizhan.com/static/help/" target="_blank" rel="noopener noreferrer">畅言</a>还不错</p></blockquote><h2 id="迁移过程" tabindex="-1"><a class="header-anchor" href="#迁移过程"><span>迁移过程</span></a></h2><h3 id="_1-首先为了不丢失原有评论-导出多说评论" tabindex="-1"><a class="header-anchor" href="#_1-首先为了不丢失原有评论-导出多说评论"><span>1.首先为了不丢失原有评论，导出多说评论</span></a></h3><figure><img src="http://i2.muimg.com/567571/f0d7b62ff410decf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-文件转换" tabindex="-1"><a class="header-anchor" href="#_2-文件转换"><span>2.文件转换</span></a></h3><ul><li>由于 disqus 不支持多说导出的.json 文件，所以需要进行转换为 xml 文件，此处使用 github 上的轮子<a href="https://github.com/JamesPan/duoshuo-migrator" target="_blank" rel="noopener noreferrer">JamesPan/duoshuo-migrator</a></li><li>使用步骤 <ol><li>下载<a href="https://github.com/JamesPan/duoshuo-migrator/blob/master/duoshuo-migrator.py?raw=true" target="_blank" rel="noopener noreferrer">duoshuo-migrator.py</a>并安装依赖<br><img src="http://i2.muimg.com/567571/f98e1281fec1cdd7.png" alt="" loading="lazy"></li><li>执行 <code>python duoshuo-migrator.py -i ~/Desktop/export.json -o disqus.xml</code>命令<br><img src="http://i2.muimg.com/567571/8e27bcddc31c29b2.png" alt="" loading="lazy"></li><li>将转换完成文件导入<br><img src="http://i2.muimg.com/567571/213761ad8cf62886.png" alt="" loading="lazy"></li></ol></li></ul>',6)]))}const c=t(i,[["render",n],["__file","disqus.html.vue"]]),p=JSON.parse('{"path":"/blog/disqus.html","title":"评论系统从多说迁移到disqus指南","lang":"zh-CN","frontmatter":{"title":"评论系统从多说迁移到disqus指南","shortTitle":"多说迁移到disqus指南","icon":"expansion","date":"2017-04-14T00:00:00.000Z","category":["Blog"],"tag":["Blog"],"description":"由于多说评论系统将于 6 月 1 日下线，所以准备迁移至disqus，相比较的话对于国内环境还是多说好用一点，毕竟加载快，支持各大媒体的分享，也不用小伙伴们翻墙；而 disqus 分享也只支持 Facebook 和 twitter。。PS:貌似现在又被墙了，以后有时间再换吧，目前就先这样，国内据说畅言还不错 迁移过程 1.首先为了不丢失原有评论，导出多...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/blog/disqus.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"评论系统从多说迁移到disqus指南"}],["meta",{"property":"og:description","content":"由于多说评论系统将于 6 月 1 日下线，所以准备迁移至disqus，相比较的话对于国内环境还是多说好用一点，毕竟加载快，支持各大媒体的分享，也不用小伙伴们翻墙；而 disqus 分享也只支持 Facebook 和 twitter。。PS:貌似现在又被墙了，以后有时间再换吧，目前就先这样，国内据说畅言还不错 迁移过程 1.首先为了不丢失原有评论，导出多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://i2.muimg.com/567571/f0d7b62ff410decf.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:published_time","content":"2017-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"评论系统从多说迁移到disqus指南\\",\\"image\\":[\\"http://i2.muimg.com/567571/f0d7b62ff410decf.png\\",\\"http://i2.muimg.com/567571/f98e1281fec1cdd7.png\\",\\"http://i2.muimg.com/567571/8e27bcddc31c29b2.png\\",\\"http://i2.muimg.com/567571/213761ad8cf62886.png\\"],\\"datePublished\\":\\"2017-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"迁移过程","slug":"迁移过程","link":"#迁移过程","children":[{"level":3,"title":"1.首先为了不丢失原有评论，导出多说评论","slug":"_1-首先为了不丢失原有评论-导出多说评论","link":"#_1-首先为了不丢失原有评论-导出多说评论","children":[]},{"level":3,"title":"2.文件转换","slug":"_2-文件转换","link":"#_2-文件转换","children":[]}]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"blog/disqus.md","localizedDate":"2017年4月14日","excerpt":"<blockquote>\\n<p>由于多说评论系统将于 6 月 1 日下线，所以准备迁移至<a href=\\"https://disqus.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">disqus</a>，相比较的话对于国内环境还是多说好用一点，毕竟加载快，支持各大媒体的分享，也不用小伙伴们翻墙；而 disqus 分享也只支持 Facebook 和 twitter。。PS:貌似现在又被墙了，以后有时间再换吧，目前就先这样，国内据说<a href=\\"http://changyan.kuaizhan.com/static/help/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">畅言</a>还不错</p>\\n</blockquote>","autoDesc":true}');export{c as comp,p as data};
