import{_ as a,c as n,a as i,o as e}from"./app-DP7tPpgD.js";const t={};function r(l,s){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="minio基础-多版本功能使用详解" tabindex="-1"><a class="header-anchor" href="#minio基础-多版本功能使用详解"><span>Minio基础 - 多版本功能使用详解</span></a></h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h2><h3 id="_1-1-使用场景" tabindex="-1"><a class="header-anchor" href="#_1-1-使用场景"><span>1.1 使用场景</span></a></h3><p>利用多版本控制，您可以在一个桶中保留多个版本的对象，使您更方便地检索和还原各个版本，在意外操作或应用程序故障时快速恢复数据。</p><p>默认情况下，新创建的桶不会开启多版本功能，向同一个桶上传同名的对象时，新上传的对象将覆盖原有的对象。</p><h3 id="_1-2-多版本控制" tabindex="-1"><a class="header-anchor" href="#_1-2-多版本控制"><span>1.2 多版本控制</span></a></h3><p>版本说明：</p><table><thead><tr><th>版本</th><th>描述</th></tr></thead><tbody><tr><td>最新版本</td><td>多版本控制开启后，同名对象多次操作，每次操作都会对应一个版本号进行保存。最后一次操作保存的版本号，为最新版本。</td></tr><tr><td>历史版本</td><td>多版本控制开启后，同名对象多次操作，每次操作都会对应一个版本号进行保存。除最后一次外的，其他保存的版本号为历史版本。</td></tr></tbody></table><p>只有 MinIO 本身才能生成版本 ID，并且不能被编辑。版本 ID 很简单，使用DCE 1.1 v4 UUID 4（基于随机数据）算法，UUID 是 128 位数字，旨在在空间和时间上具有很高的唯一性，并且在计算上难以猜测。它们是全球唯一标识符，无需联系全球注册机构即可在本地生成。UUID 旨在作为具有极短生命周期的大量标记对象的唯一标识符，并可靠地识别网络中非常持久的对象。</p><p>当您将对象放入启用版本控制的存储桶中时，不会覆盖非当前版本。下图显示当一个新版本的PUT 到一个已经包含同名对象的桶中时，原来的对象（ID =fae684ddsd ）留在桶中，MinIO 生成一个新版本（ID = fae684da），并添加存储桶的较新版本。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411422.png" alt="image-20220723230540366" tabindex="0" loading="lazy"><figcaption>image-20220723230540366</figcaption></figure><p>当你 DELETE 一个对象时，所有版本都保留在存储桶中，MinIO 会添加一个删除标记，如下所示：</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411471.png" alt="image-20220723230624512" tabindex="0" loading="lazy"><figcaption>image-20220723230624512</figcaption></figure><p>现在删除标记成为对象的当前版本。默认情况下，GET 请求总是检索最新存储的版本。因此，当当前版本是删除标记时执行简单的 GET 对象请求将返回404。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411497.png" alt="image-20220723230714062" tabindex="0" loading="lazy"><figcaption>image-20220723230714062</figcaption></figure><p>通过指定如下所示的版本 ID GET 请求，您可以检索特定对象版本。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411526.png" alt="image-20220723230748189" tabindex="0" loading="lazy"><figcaption>image-20220723230748189</figcaption></figure><p>永久删除对象需要指定要删除的版本，只有拥有相应权限的用户才能永久删除版本。如下所示，使用特定版本 ID 调用的 DELETE 请求会从存储桶中永久删除对象。不会为具有版本 ID 的 DELETE 请求添加删除标记。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411545.png" alt="image-20220723230825011" tabindex="0" loading="lazy"><figcaption>image-20220723230825011</figcaption></figure><p>注意事项</p><ul><li>列出桶内对象列表时默认列出最新对象列表。</li><li>可以指定版本号下载对象，不指定版本号默认下载最新的对象。</li><li>MinIO 上的所有 Bucket 始终处于以下状态之一：未版本控制（默认）和所有其他现有部署、启用版本控制或暂停版本控制。</li><li>版本控制状态适用于启用版本控制的存储桶中的所有对象。首次为存储桶启用版本控制时，存储桶中的对象此后始终进行版本控制并被赋予唯一的版本 ID。</li><li>可以在启用版本控制的情况下创建现有或更新的存储桶，最终也可以暂停。对象的现有版本保持原样，仍然可以使用版本 ID 访问。</li><li>在删除存储桶之前，应删除所有版本，包括删除标记。</li><li>版本控制功能仅在纠删码和分布式纠删码设置中可用。</li></ul><h2 id="_2-开启多版本" tabindex="-1"><a class="header-anchor" href="#_2-开启多版本"><span>2. 开启多版本</span></a></h2><p>必须在存储桶上显式启用版本控制，默认情况下不启用版本控制。启用对象锁定的存储桶会自动启用版本控制。启用和暂停版本控制是在存储桶级别完成的。</p><p>要控制数据保留和存储使用，请将对象版本控制与对象生命周期管理结合使用。如果您的非版本控制存储桶中有对象过期生命周期策略，并且您希望在启用版本控制的存储桶上保持相同的永久删除行为，则必须添加非当前过期策略。非当前到期生命周期策略将管理启用版本控制的存储桶中非当前对象版本的删除。（启用版本的存储桶维护一个当前和零个或多个非当前对象版本。）</p><h3 id="_2-1-页面开启" tabindex="-1"><a class="header-anchor" href="#_2-1-页面开启"><span>2.1 页面开启</span></a></h3><p>直接在桶管理页面，可以查看版本控制信息，点击切换开启或者关闭。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411573.png" alt="image-20220723231033642" tabindex="0" loading="lazy"><figcaption>image-20220723231033642</figcaption></figure><h3 id="_2-2-sdk-开启" tabindex="-1"><a class="header-anchor" href="#_2-2-sdk-开启"><span>2.2 SDK 开启</span></a></h3><p>通过以下API可以开启或者关闭版本控制：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Enable versioning on &#39;my-bucketname&#39;.</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      minioClient</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setBucketVersioning</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">          SetBucketVersioningArgs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">builder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bucket</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;my-bucketname&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> VersioningConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">VersioningConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ENABLED</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Bucket versioning is enabled successfully&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // Suspend versioning on &#39;my-bucketname&#39;.</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      minioClient</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setBucketVersioning</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">          SetBucketVersioningArgs</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">builder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">bucket</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;my-bucketname&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> VersioningConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">VersioningConfiguration</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Status</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SUSPENDED</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">              .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">      System</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">out</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">println</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;Bucket versioning is suspended successfully&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试" tabindex="-1"><a class="header-anchor" href="#_3-测试"><span>3. 测试</span></a></h2><p>同一个存储桶，上传多个同名对象，可以看到添加了多个版本号。</p><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411599.png" alt="image-20220723231144106" tabindex="0" loading="lazy"><figcaption>image-20220723231144106</figcaption></figure><p>可以在获取对象时，指定版本号：</p><pre><code>        InputStream stream =
                minioClient.getObject(
                        GetObjectArgs.builder().bucket(&quot;aaaaa&quot;).object(&quot;my-objectname&quot;).versionId(&quot;aadsadsafsa&quot;).build());
</code></pre><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://yunyanchengyu.blog.csdn.net/article/details/120867981" target="_blank" rel="noopener noreferrer">Minio入门系列【11】多版本功能使用详解</a></p>`,37)]))}const p=a(t,[["render",r],["__file","minio-multi-version.html.vue"]]),c=JSON.parse('{"path":"/posts/Architect/minio/minio-multi-version.html","title":"Minio基础 - 多版本功能使用详解","lang":"zh-CN","frontmatter":{"aliases":"Minio基础 - 多版本功能使用详解","tags":null,"cssclass":null,"source":null,"order":250,"category":["Minio"],"created":"2024-04-24 14:35","updated":"2024-04-30 14:12","description":"Minio基础 - 多版本功能使用详解 1. 前言 1.1 使用场景 利用多版本控制，您可以在一个桶中保留多个版本的对象，使您更方便地检索和还原各个版本，在意外操作或应用程序故障时快速恢复数据。 默认情况下，新创建的桶不会开启多版本功能，向同一个桶上传同名的对象时，新上传的对象将覆盖原有的对象。 1.2 多版本控制 版本说明： 只有 MinIO 本身才...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/minio/minio-multi-version.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Minio基础 - 多版本功能使用详解"}],["meta",{"property":"og:description","content":"Minio基础 - 多版本功能使用详解 1. 前言 1.1 使用场景 利用多版本控制，您可以在一个桶中保留多个版本的对象，使您更方便地检索和还原各个版本，在意外操作或应用程序故障时快速恢复数据。 默认情况下，新创建的桶不会开启多版本功能，向同一个桶上传同名的对象时，新上传的对象将覆盖原有的对象。 1.2 多版本控制 版本说明： 只有 MinIO 本身才..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411422.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Minio基础 - 多版本功能使用详解\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411422.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411471.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411497.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411526.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411545.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411573.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404301411599.png\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[{"level":3,"title":"1.1 使用场景","slug":"_1-1-使用场景","link":"#_1-1-使用场景","children":[]},{"level":3,"title":"1.2 多版本控制","slug":"_1-2-多版本控制","link":"#_1-2-多版本控制","children":[]}]},{"level":2,"title":"2. 开启多版本","slug":"_2-开启多版本","link":"#_2-开启多版本","children":[{"level":3,"title":"2.1 页面开启","slug":"_2-1-页面开启","link":"#_2-1-页面开启","children":[]},{"level":3,"title":"2.2 SDK 开启","slug":"_2-2-sdk-开启","link":"#_2-2-sdk-开启","children":[]}]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1405},"filePathRelative":"posts/Architect/minio/minio-multi-version.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 前言</h2>\\n<h3>1.1 使用场景</h3>\\n<p>利用多版本控制，您可以在一个桶中保留多个版本的对象，使您更方便地检索和还原各个版本，在意外操作或应用程序故障时快速恢复数据。</p>\\n<p>默认情况下，新创建的桶不会开启多版本功能，向同一个桶上传同名的对象时，新上传的对象将覆盖原有的对象。</p>\\n<h3>1.2 多版本控制</h3>\\n<p>版本说明：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>版本</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>最新版本</td>\\n<td>多版本控制开启后，同名对象多次操作，每次操作都会对应一个版本号进行保存。最后一次操作保存的版本号，为最新版本。</td>\\n</tr>\\n<tr>\\n<td>历史版本</td>\\n<td>多版本控制开启后，同名对象多次操作，每次操作都会对应一个版本号进行保存。除最后一次外的，其他保存的版本号为历史版本。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{p as comp,c as data};
