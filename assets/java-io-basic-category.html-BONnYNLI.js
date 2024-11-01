import{_ as a,c as t,a as i,o as r}from"./app-DP7tPpgD.js";const n={};function l(p,e){return r(),t("div",null,e[0]||(e[0]=[i('<h1 id="java-io-分类-传输-操作" tabindex="-1"><a class="header-anchor" href="#java-io-分类-传输-操作"><span>Java IO - 分类(传输，操作)</span></a></h1><blockquote><p>本文主要从<code>传输方式</code>和<code>数据操作</code>两个方面分析Java IO的分类。</p></blockquote><h2 id="_1-io理解分类-从传输方式上" tabindex="-1"><a class="header-anchor" href="#_1-io理解分类-从传输方式上"><span>1. IO理解分类 - 从传输方式上</span></a></h2><p>从数据传输方式或者说是运输方式角度看，可以将 IO 类分为:</p><ul><li>字节流</li><li>字符流</li></ul><p><code>字节</code>是个计算机看的，<code>字符</code>才是给人看的</p><h3 id="_1-1-字节流" tabindex="-1"><a class="header-anchor" href="#_1-1-字节流"><span>1.1 字节流</span></a></h3><p>(整体结构如下，部分派生类有缺失)</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923572.png" alt="image-20220830201920368" tabindex="0" loading="lazy"><figcaption>image-20220830201920368</figcaption></figure><h3 id="_1-2-字符流" tabindex="-1"><a class="header-anchor" href="#_1-2-字符流"><span>1.2 字符流</span></a></h3><p>(整体结构如下，部分派生类有缺失)</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923618.png" alt="image-20220830201949483" tabindex="0" loading="lazy"><figcaption>image-20220830201949483</figcaption></figure><h3 id="_1-3-字节流和字符流的区别" tabindex="-1"><a class="header-anchor" href="#_1-3-字节流和字符流的区别"><span>1.3 字节流和字符流的区别</span></a></h3><ul><li>字节流读取单个字节，字符流读取单个字符(一个字符根据编码的不同，对应的字节也不同，如 UTF-8 编码中文汉字是 3 个字节，GBK编码中文汉字是 2 个字节。)</li><li>字节流用来处理二进制文件(图片、MP3、视频文件)，字符流用来处理文本文件(可以看做是特殊的二进制文件，使用了某种编码，人可以阅读)。</li></ul><blockquote><p>简而言之，字节是个计算机看的，字符才是给人看的。</p></blockquote><h3 id="_1-4-字节转字符input-outputstreamreader-writer" tabindex="-1"><a class="header-anchor" href="#_1-4-字节转字符input-outputstreamreader-writer"><span>1.4 字节转字符Input/OutputStreamReader/Writer</span></a></h3><p>编码就是把字符转换为字节，而解码是把字节重新组合成字符。</p><p>如果编码和解码过程使用不同的编码方式那么就出现了乱码。</p><ul><li>GBK 编码中，中文字符占 2 个字节，英文字符占 1 个字节；</li><li>UTF-8 编码中，中文字符占 3 个字节，英文字符占 1 个字节；</li><li>UTF-16be 编码中，中文字符和英文字符都占 2 个字节。</li></ul><p>UTF-16be 中的 be 指的是 Big Endian，也就是大端。相应地也有 UTF-16le，le 指的是 Little Endian，也就是小端。</p><p>Java 使用双字节编码 UTF-16be，这不是指 Java 只支持这一种编码方式，而是说 char 这种类型使用 UTF-16be 进行编码。char 类型占 16 位，也就是两个字节，Java 使用这种双字节编码是为了让一个中文或者一个英文都能使用一个 char 来存储。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923661.png" alt="image-20220830202338333" tabindex="0" loading="lazy"><figcaption>image-20220830202338333</figcaption></figure><h2 id="_2-io理解分类-从数据操作上" tabindex="-1"><a class="header-anchor" href="#_2-io理解分类-从数据操作上"><span>2. IO理解分类 - 从数据操作上</span></a></h2><p>从数据来源或者说是操作对象角度看，IO 类可以分为:</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923693.png" alt="image-20220830202429403" tabindex="0" loading="lazy"><figcaption>image-20220830202429403</figcaption></figure><h3 id="_2-1-文件-file" tabindex="-1"><a class="header-anchor" href="#_2-1-文件-file"><span>2.1 文件(file)</span></a></h3><p>FileInputStream、FileOutputStream、FileReader、FileWriter</p><h3 id="_2-2-数组" tabindex="-1"><a class="header-anchor" href="#_2-2-数组"><span>2.2 数组([])</span></a></h3><ul><li>字节数组(byte[]): ByteArrayInputStream、ByteArrayOutputStream</li><li>字符数组(char[]): CharArrayReader、CharArrayWriter</li></ul><h3 id="_2-3-管道操作" tabindex="-1"><a class="header-anchor" href="#_2-3-管道操作"><span>2.3 管道操作</span></a></h3><p>PipedInputStream、PipedOutputStream、PipedReader、PipedWriter</p><h3 id="_2-4-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-4-基本数据类型"><span>2.4 基本数据类型</span></a></h3><p>DataInputStream、DataOutputStream</p><h3 id="_2-5-缓冲操作" tabindex="-1"><a class="header-anchor" href="#_2-5-缓冲操作"><span>2.5 缓冲操作</span></a></h3><p>BufferedInputStream、BufferedOutputStream、BufferedReader、BufferedWriter</p><h3 id="_2-6-打印" tabindex="-1"><a class="header-anchor" href="#_2-6-打印"><span>2.6 打印</span></a></h3><p>PrintStream、PrintWriter</p><h3 id="_2-6-对象序列化反序列化" tabindex="-1"><a class="header-anchor" href="#_2-6-对象序列化反序列化"><span>2.6 对象序列化反序列化</span></a></h3><p>ObjectInputStream、ObjectOutputStream</p><h3 id="_2-7-转换" tabindex="-1"><a class="header-anchor" href="#_2-7-转换"><span>2.7 转换</span></a></h3><p>InputStreamReader、OutputStreamWriter</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://pdai.tech/md/java/io/java-io-basic-category.html" target="_blank" rel="noopener noreferrer"><strong>Java IO - 分类(传输，操作)</strong></a></p>',43)]))}const c=a(n,[["render",l],["__file","java-io-basic-category.html.vue"]]),s=JSON.parse('{"path":"/posts/Java/JavaIO/java-io-basic-category.html","title":"Java IO - 分类(传输，操作)","lang":"zh-CN","frontmatter":{"aliases":"Java IO - 分类(传输，操作)","tags":null,"cssclass":null,"source":null,"order":20,"category":["Java","IO"],"created":"2024-02-22 10:47","updated":"2024-03-12 09:23","description":"Java IO - 分类(传输，操作) 本文主要从传输方式和数据操作两个方面分析Java IO的分类。 1. IO理解分类 - 从传输方式上 从数据传输方式或者说是运输方式角度看，可以将 IO 类分为: 字节流 字符流 字节是个计算机看的，字符才是给人看的 1.1 字节流 (整体结构如下，部分派生类有缺失) image-2022083020192036...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/JavaIO/java-io-basic-category.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Java IO - 分类(传输，操作)"}],["meta",{"property":"og:description","content":"Java IO - 分类(传输，操作) 本文主要从传输方式和数据操作两个方面分析Java IO的分类。 1. IO理解分类 - 从传输方式上 从数据传输方式或者说是运输方式角度看，可以将 IO 类分为: 字节流 字符流 字节是个计算机看的，字符才是给人看的 1.1 字节流 (整体结构如下，部分派生类有缺失) image-2022083020192036..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923572.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java IO - 分类(传输，操作)\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923572.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923618.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923661.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923693.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. IO理解分类 - 从传输方式上","slug":"_1-io理解分类-从传输方式上","link":"#_1-io理解分类-从传输方式上","children":[{"level":3,"title":"1.1 字节流","slug":"_1-1-字节流","link":"#_1-1-字节流","children":[]},{"level":3,"title":"1.2 字符流","slug":"_1-2-字符流","link":"#_1-2-字符流","children":[]},{"level":3,"title":"1.3 字节流和字符流的区别","slug":"_1-3-字节流和字符流的区别","link":"#_1-3-字节流和字符流的区别","children":[]},{"level":3,"title":"1.4 字节转字符Input/OutputStreamReader/Writer","slug":"_1-4-字节转字符input-outputstreamreader-writer","link":"#_1-4-字节转字符input-outputstreamreader-writer","children":[]}]},{"level":2,"title":"2. IO理解分类 - 从数据操作上","slug":"_2-io理解分类-从数据操作上","link":"#_2-io理解分类-从数据操作上","children":[{"level":3,"title":"2.1 文件(file)","slug":"_2-1-文件-file","link":"#_2-1-文件-file","children":[]},{"level":3,"title":"2.2 数组([])","slug":"_2-2-数组","link":"#_2-2-数组","children":[]},{"level":3,"title":"2.3 管道操作","slug":"_2-3-管道操作","link":"#_2-3-管道操作","children":[]},{"level":3,"title":"2.4 基本数据类型","slug":"_2-4-基本数据类型","link":"#_2-4-基本数据类型","children":[]},{"level":3,"title":"2.5 缓冲操作","slug":"_2-5-缓冲操作","link":"#_2-5-缓冲操作","children":[]},{"level":3,"title":"2.6 打印","slug":"_2-6-打印","link":"#_2-6-打印","children":[]},{"level":3,"title":"2.6 对象序列化反序列化","slug":"_2-6-对象序列化反序列化","link":"#_2-6-对象序列化反序列化","children":[]},{"level":3,"title":"2.7 转换","slug":"_2-7-转换","link":"#_2-7-转换","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.31,"words":694},"filePathRelative":"posts/Java/JavaIO/java-io-basic-category.md","localizedDate":"2024年10月21日","excerpt":"\\n<blockquote>\\n<p>本文主要从<code>传输方式</code>和<code>数据操作</code>两个方面分析Java IO的分类。</p>\\n</blockquote>\\n<h2>1. IO理解分类 - 从传输方式上</h2>\\n<p>从数据传输方式或者说是运输方式角度看，可以将 IO 类分为:</p>\\n<ul>\\n<li>字节流</li>\\n<li>字符流</li>\\n</ul>\\n<p><code>字节</code>是个计算机看的，<code>字符</code>才是给人看的</p>\\n<h3>1.1 字节流</h3>\\n<p>(整体结构如下，部分派生类有缺失)</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202403120923572.png\\" alt=\\"image-20220830201920368\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220830201920368</figcaption></figure>","autoDesc":true}');export{c as comp,s as data};
