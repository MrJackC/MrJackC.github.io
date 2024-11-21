import{_ as i,c as a,a as n,o as l}from"./app-CZJgH_ea.js";const e={};function t(r,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="地区-ip-库" tabindex="-1"><a class="header-anchor" href="#地区-ip-库"><span>地区 &amp; IP 库</span></a></h1><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-biz-ip" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-biz-ip</code> (opens new window)</a>业务组件，提供地区 &amp; IP 库的封装。</p><h2 id="_1-地区" tabindex="-1"><a class="header-anchor" href="#_1-地区"><span><a href="https://doc.iocoder.cn/area-and-ip/#_1-%E5%9C%B0%E5%8C%BA" target="_blank" rel="noopener noreferrer">#</a>1. 地区</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/java/cn/iocoder/yudao/framework/ip/core/utils/AreaUtils.java" target="_blank" rel="noopener noreferrer">AreaUtils (opens new window)</a>是地区工具类，可以查询中国的省、市、区县，也可以查询国外的国家。</p><p>它的数据来自 <a href="https://github.com/modood/Administrative-divisions-of-China" target="_blank" rel="noopener noreferrer">Administrative-divisions-of-China (opens new window)</a>项目，最终整理到项目的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/resources/area.csv" target="_blank" rel="noopener noreferrer">area.csv (opens new window)</a>文件。每一行的数据，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/java/cn/iocoder/yudao/framework/ip/core/Area.java" target="_blank" rel="noopener noreferrer">Area (opens new window)</a>对象。代码所示：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Area</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 编号</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 名字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 类型</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 枚举 {@link AreaTypeEnum}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 1 - 国家</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 2 - 省份</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 3 - 城市</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 4 - 地区, 例如说县、镇、区等</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 父节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Area</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> parent</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 子节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Area</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> children</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AreaUtils 主要有如下两个方法：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// AreaUtils.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 获得指定编号对应的区域</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 区域编号</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 区域</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Area</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getArea</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Integer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ... 省略具体实现</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 格式化区域</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 例如说：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *      1. id = “静安区”时：上海 上海市 静安区</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *      2. id = “上海市”时：上海 上海市</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *      3. id = “上海”时：上海</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *      4. id = “美国”时：美国</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 当区域在中国时，默认不显示中国</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 区域编号</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> separator</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 分隔符</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 格式化后的区域</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> format</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Integer</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> separator) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ... 省略具体实现</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体的使用，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/test/java/cn/iocoder/yudao/framework/ip/core/utils/AreaUtilsTest.java" target="_blank" rel="noopener noreferrer">AreaUtilsTest (opens new window)</a>测试类。</li></ul><p>另外，管理后台提供了 [系统管理 -&gt; 地区管理] 菜单，可以按照树形结构查看地区列表。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/地区与IP/地区管理.png" alt="地区管理" tabindex="0" loading="lazy"><figcaption>地区管理</figcaption></figure><ul><li>后端代码，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/ip/AreaController.java#L29-L35" target="_blank" rel="noopener noreferrer">AreaController (opens new window)</a>的 <code>/admin-api/system/area/tree</code> 接口</li><li>前端代码，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/system/area/index.vue" target="_blank" rel="noopener noreferrer">system/area/index.vue (opens new window)</a>界面</li></ul><h2 id="_2-ip" tabindex="-1"><a class="header-anchor" href="#_2-ip"><span><a href="https://doc.iocoder.cn/area-and-ip/#_2-ip" target="_blank" rel="noopener noreferrer">#</a>2. IP</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/java/cn/iocoder/yudao/framework/ip/core/utils/IPUtils.java" target="_blank" rel="noopener noreferrer">IPUtils (opens new window)</a>是 IP 工具类，可以查询 IP 对应的城市信息。</p><p>它的数据来自 <a href="https://gitee.com/lionsoul/ip2region" target="_blank" rel="noopener noreferrer">ip2region (opens new window)</a>项目，最终整理到项目的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/resources/ip2region.xdb" target="_blank" rel="noopener noreferrer">ip2region.xdb (opens new window)</a>文件。</p><p>IPUtils 主要有如下两个方法：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// IPUtils.java</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 查询 IP 对应的地区编号</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ip</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> IP 地址，格式为 127.0.0.1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 地区id</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Integer</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getAreaId</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ip) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ... 省略具体实现</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * 查询 IP 对应的地区</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ip</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> IP 地址，格式为 127.0.0.1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 地区</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> static</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Area</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getArea</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">String</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ip) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // ... 省略具体实现</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体的使用，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/test/java/cn/iocoder/yudao/framework/ip/core/utils/IPUtilsTest.java" target="_blank" rel="noopener noreferrer">IPUtilsTest (opens new window)</a>测试类。</li></ul><p>另外，管理后台提供了 [系统管理 -&gt; 地区管理] 菜单，也提供了 IP 查询城市的示例。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/地区与IP/IP查询城市.png" alt="IP 查询城市" tabindex="0" loading="lazy"><figcaption>IP 查询城市</figcaption></figure><ul><li>后端代码，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/ip/AreaController.java#L37-L48" target="_blank" rel="noopener noreferrer">AreaController (opens new window)</a>的 <code>/admin-api/system/area/get-by-ip</code> 接口</li></ul><p>上次更新: 2023/01/27, 21:55:46</p>`,22)]))}const p=i(e,[["render",t],["__file","6.地区 _ IP 库.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Ruoyi-Vue-Pro/9.%E7%B3%BB%E7%BB%9F%E6%89%8B%E5%86%8C/6.%E5%9C%B0%E5%8C%BA%20_%20IP%20%E5%BA%93.html","title":"地区 & IP 库","lang":"zh-CN","frontmatter":{"description":"地区 & IP 库 yudao-spring-boot-starter-biz-ip (opens new window)业务组件，提供地区 & IP 库的封装。 #1. 地区 AreaUtils (opens new window)是地区工具类，可以查询中国的省、市、区县，也可以查询国外的国家。 它的数据来自 Administrative-divis...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Ruoyi-Vue-Pro/9.%E7%B3%BB%E7%BB%9F%E6%89%8B%E5%86%8C/6.%E5%9C%B0%E5%8C%BA%20_%20IP%20%E5%BA%93.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"地区 & IP 库"}],["meta",{"property":"og:description","content":"地区 & IP 库 yudao-spring-boot-starter-biz-ip (opens new window)业务组件，提供地区 & IP 库的封装。 #1. 地区 AreaUtils (opens new window)是地区工具类，可以查询中国的省、市、区县，也可以查询国外的国家。 它的数据来自 Administrative-divis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://doc.iocoder.cn/img/%E5%9C%B0%E5%8C%BA%E4%B8%8EIP/%E5%9C%B0%E5%8C%BA%E7%AE%A1%E7%90%86.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T07:41:53.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-11-21T07:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"地区 & IP 库\\",\\"image\\":[\\"https://doc.iocoder.cn/img/%E5%9C%B0%E5%8C%BA%E4%B8%8EIP/%E5%9C%B0%E5%8C%BA%E7%AE%A1%E7%90%86.png\\",\\"https://doc.iocoder.cn/img/%E5%9C%B0%E5%8C%BA%E4%B8%8EIP/IP%E6%9F%A5%E8%AF%A2%E5%9F%8E%E5%B8%82.png\\"],\\"dateModified\\":\\"2024-11-21T07:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"#1. 地区","slug":"_1-地区","link":"#_1-地区","children":[]},{"level":2,"title":"#2. IP","slug":"_2-ip","link":"#_2-ip","children":[]}],"git":{"createdTime":1732174913000,"updatedTime":1732174913000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":2.64,"words":793},"filePathRelative":"posts/Java/Ruoyi-Vue-Pro/9.系统手册/6.地区 & IP 库.md","localizedDate":"2024年11月21日","excerpt":"\\n<p><a href=\\"https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-biz-ip\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>yudao-spring-boot-starter-biz-ip</code> (opens new window)</a>业务组件，提供地区 &amp; IP 库的封装。</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#_1-地区\\"><span></span></a><a href=\\"https://doc.iocoder.cn/area-and-ip/#_1-%E5%9C%B0%E5%8C%BA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a>1. 地区</h2>","autoDesc":true}');export{p as comp,c as data};
