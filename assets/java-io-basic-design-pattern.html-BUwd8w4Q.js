import{_ as e,c as t,a as r,o as n}from"./app-BQBjlK2G.js";const o={};function i(s,a){return n(),t("div",null,a[0]||(a[0]=[r(`<h1 id="java-io-设计模式-装饰者模式" tabindex="-1"><a class="header-anchor" href="#java-io-设计模式-装饰者模式"><span>Java IO - 设计模式(装饰者模式)</span></a></h1><blockquote><p>Java I/O 使用了装饰者模式来实现。</p></blockquote><h2 id="_1-装饰者模式" tabindex="-1"><a class="header-anchor" href="#_1-装饰者模式"><span>1. 装饰者模式</span></a></h2><p>请参考<a href="https://pdai.tech/md/dev-spec/pattern/12_decorator.html" target="_blank" rel="noopener noreferrer">装饰者模式详解</a></p><p>装饰者(Decorator)和具体组件(ConcreteComponent)都继承自组件(Component)，具体组件的方法实现不需要依赖于其它对象，而装饰者组合了一个组件，这样它可以装饰其它装饰者或者具体组件。所谓装饰，就是把这个装饰者套在被装饰者之上，从而动态扩展被装饰者的功能。装饰者的方法有一部分是自己的，这属于它的功能，然后调用被装饰者的方法实现，从而也保留了被装饰者的功能。可以看到，具体组件应当是装饰层次的最低层，因为只有具体组件的方法实现不需要依赖于其它对象。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923274.png" alt="image-20220830203657281" tabindex="0" loading="lazy"><figcaption>image-20220830203657281</figcaption></figure><h2 id="_2-io-装饰者模式" tabindex="-1"><a class="header-anchor" href="#_2-io-装饰者模式"><span>2. IO 装饰者模式</span></a></h2><p>以 InputStream 为例，</p><ul><li>InputStream 是抽象组件；</li><li>FileInputStream 是 InputStream 的子类，属于具体组件，提供了字节流的输入操作；</li><li>FilterInputStream 属于抽象装饰者，装饰者用于装饰组件，为组件提供额外的功能。例如 BufferedInputStream 为 FileInputStream 提供缓存的功能。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923325.png" alt="image-20220830203804788" tabindex="0" loading="lazy"><figcaption>image-20220830203804788</figcaption></figure><p>实例化一个具有缓存功能的字节流对象时，只需要在 FileInputStream 对象上再套一层 BufferedInputStream 对象即可。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">FileInputStream</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> fileInputStream </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> FileInputStream</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(filePath)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">BufferedInputStream</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bufferedInputStream </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> BufferedInputStream</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(fileInputStream)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>DataInputStream 装饰者提供了对更多数据类型进行输入的操作，比如 int、double 等基本类型。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/io/java-io-basic-design-pattern.html" target="_blank" rel="noopener noreferrer"><strong>Java IO - 设计模式(装饰者模式)</strong></a></p>`,15)]))}const l=e(o,[["render",i],["__file","java-io-basic-design-pattern.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/JavaIO/java-io-basic-design-pattern.html","title":"Java IO - 设计模式(装饰者模式)","lang":"zh-CN","frontmatter":{"aliases":"Java IO - 设计模式(装饰者模式)","tags":null,"cssclass":null,"source":null,"order":30,"category":["Java","IO"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:24","description":"Java IO - 设计模式(装饰者模式) Java I/O 使用了装饰者模式来实现。 1. 装饰者模式 请参考装饰者模式详解 装饰者(Decorator)和具体组件(ConcreteComponent)都继承自组件(Component)，具体组件的方法实现不需要依赖于其它对象，而装饰者组合了一个组件，这样它可以装饰其它装饰者或者具体组件。所谓装饰，就...","head":[["meta",{"property":"og:url","content":"https://mrjackc.github.io/posts/Java/JavaIO/java-io-basic-design-pattern.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java IO - 设计模式(装饰者模式)"}],["meta",{"property":"og:description","content":"Java IO - 设计模式(装饰者模式) Java I/O 使用了装饰者模式来实现。 1. 装饰者模式 请参考装饰者模式详解 装饰者(Decorator)和具体组件(ConcreteComponent)都继承自组件(Component)，具体组件的方法实现不需要依赖于其它对象，而装饰者组合了一个组件，这样它可以装饰其它装饰者或者具体组件。所谓装饰，就..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923274.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java IO - 设计模式(装饰者模式)\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923274.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923325.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://mrjackc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 装饰者模式","slug":"_1-装饰者模式","link":"#_1-装饰者模式","children":[]},{"level":2,"title":"2. IO 装饰者模式","slug":"_2-io-装饰者模式","link":"#_2-io-装饰者模式","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.49,"words":446},"filePathRelative":"posts/Java/JavaIO/java-io-basic-design-pattern.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>Java I/O 使用了装饰者模式来实现。</p>\\n</blockquote>\\n<h2>1. 装饰者模式</h2>\\n<p>请参考<a href=\\"https://pdai.tech/md/dev-spec/pattern/12_decorator.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">装饰者模式详解</a></p>\\n<p>装饰者(Decorator)和具体组件(ConcreteComponent)都继承自组件(Component)，具体组件的方法实现不需要依赖于其它对象，而装饰者组合了一个组件，这样它可以装饰其它装饰者或者具体组件。所谓装饰，就是把这个装饰者套在被装饰者之上，从而动态扩展被装饰者的功能。装饰者的方法有一部分是自己的，这属于它的功能，然后调用被装饰者的方法实现，从而也保留了被装饰者的功能。可以看到，具体组件应当是装饰层次的最低层，因为只有具体组件的方法实现不需要依赖于其它对象。</p>","autoDesc":true}');export{l as comp,c as data};
