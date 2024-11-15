import{_ as a,c as i,a as n,o as l}from"./app-fWubcX7c.js";const e={};function r(t,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="树结构优化记录" tabindex="-1"><a class="header-anchor" href="#树结构优化记录"><span>树结构优化记录</span></a></h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景"><span>1. 背景</span></a></h2><p>本来是很简单的一个树结构，但是我们数据库中的数据过大，导致查询SQL 和 转换为树结构的时候速度过慢</p><h2 id="_2-优化前数据" tabindex="-1"><a class="header-anchor" href="#_2-优化前数据"><span>2. 优化前数据</span></a></h2><table><thead><tr><th>数据量</th><th>SQL 查询耗时</th><th>转为树结构</th></tr></thead><tbody><tr><td>6000条</td><td>1881ms</td><td>12658ms</td></tr></tbody></table><p>我们前端10s 就超时了，所以这里总共耗费14s 是不能接受的</p><h2 id="_3-优化前代码" tabindex="-1"><a class="header-anchor" href="#_3-优化前代码"><span>3. 优化前代码</span></a></h2><p>Controller 层</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 获取部门下拉树列表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">GetMapping</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;/treeselect&quot;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AjaxResult</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> treeselect</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dept)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> depts </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> deptService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectDeptList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(dept);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> AjaxResult</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">success</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">deptService</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">buildDeptTreeSelect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(depts));</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre></div><ol><li>查询部门下所有数据</li><li>将数据转为树结构</li></ol><p>service 层</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 构建前端所需要下拉树结构</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> depts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 部门列表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 下拉树结构列表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">TreeSelect</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> buildDeptTreeSelect</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">SysDept</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> depts)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> deptTrees </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> buildDeptTree</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(depts)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> deptTrees</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">stream</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">map</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(TreeSelect</span><span style="color:#C678DD;--shiki-dark:#C678DD;">::new</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">collect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Collectors</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">toList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 构建前端所需要树结构</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> depts</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 部门列表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 树结构列表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">SysDept</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> buildDeptTree</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">SysDept</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> depts)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> returnList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ArrayList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tempList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ArrayList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dept </span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> depts)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            tempList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">dept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getDeptId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Iterator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> iterator </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> depts</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">iterator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> iterator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hasNext</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            SysDept</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dept </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (SysDept) </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">iterator</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">next</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 如果是顶级节点, 遍历该父节点的所有子节点</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">tempList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">contains</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">dept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParentId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                recursionFn</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(depts</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> dept)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                returnList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">add</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(dept);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">returnList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isEmpty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#E06C75;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            returnList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> depts</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> returnList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 递归列表</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    private</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> recursionFn</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">SysDept</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> SysDept</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 得到子节点列表</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> childList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getChildList</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> t)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        t</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setChildren</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(childList);</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        for</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">SysDept</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tChild </span><span style="color:#C678DD;--shiki-dark:#C678DD;">:</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> childList)</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">hasChild</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tChild))</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                recursionFn</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(list</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tChild)</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其用递归实现树结构排序，导致排序非常耗时</p><h2 id="_4-优化后代码" tabindex="-1"><a class="header-anchor" href="#_4-优化后代码"><span>4. 优化后代码</span></a></h2><h3 id="_4-1-使用非递归方式构建树" tabindex="-1"><a class="header-anchor" href="#_4-1-使用非递归方式构建树"><span>4.1 使用非递归方式构建树</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * 用非递归的方式实现转换为数结构</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> depts</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Tree</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Long</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> buildDeptTreeSelectNoRecursion</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">List</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">SysDept</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> depts</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> parentId) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //配置</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        TreeNodeConfig</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> treeNodeConfig </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> TreeNodeConfig</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        treeNodeConfig</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setNameKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;label&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 自定义属性名 都要默认值的</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Tree</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> treeList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> TreeUtil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">build</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(depts, parentId, treeNodeConfig,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                (treeNode, tree) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    tree</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">treeNode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getDeptId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    tree</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setParentId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">treeNode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getParentId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    tree</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">treeNode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getDeptName</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    tree</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">putExtra</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">treeNode</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getDeptId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                });</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> treeList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-优化后数据" tabindex="-1"><a class="header-anchor" href="#_4-优化后数据"><span>4. 优化后数据</span></a></h2><table><thead><tr><th></th><th>数据量</th><th>SQL 查询耗时</th><th>转为树结构</th></tr></thead><tbody><tr><td>优化前</td><td>6000条</td><td>1881ms</td><td>12658ms</td></tr><tr><td>优化后</td><td>6000条</td><td></td><td>22ms</td></tr></tbody></table>`,18)]))}const o=a(e,[["render",r],["__file","optimization-x-tree-structure.html.vue"]]),k=JSON.parse('{"path":"/posts/Daily-Thoughts/optimization/optimization-x-tree-structure.html","title":"树结构优化记录","lang":"zh-CN","frontmatter":{"aliases":"树结构优化记录","tags":null,"cssclass":null,"source":null,"created":"2024-02-22 10:53","updated":"2024-05-30 17:23","description":"树结构优化记录 1. 背景 本来是很简单的一个树结构，但是我们数据库中的数据过大，导致查询SQL 和 转换为树结构的时候速度过慢 2. 优化前数据 我们前端10s 就超时了，所以这里总共耗费14s 是不能接受的 3. 优化前代码 Controller 层 查询部门下所有数据 将数据转为树结构 service 层 其用递归实现树结构排序，导致排序非常耗时...","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Daily-Thoughts/optimization/optimization-x-tree-structure.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"树结构优化记录"}],["meta",{"property":"og:description","content":"树结构优化记录 1. 背景 本来是很简单的一个树结构，但是我们数据库中的数据过大，导致查询SQL 和 转换为树结构的时候速度过慢 2. 优化前数据 我们前端10s 就超时了，所以这里总共耗费14s 是不能接受的 3. 优化前代码 Controller 层 查询部门下所有数据 将数据转为树结构 service 层 其用递归实现树结构排序，导致排序非常耗时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树结构优化记录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 优化前数据","slug":"_2-优化前数据","link":"#_2-优化前数据","children":[]},{"level":2,"title":"3. 优化前代码","slug":"_3-优化前代码","link":"#_3-优化前代码","children":[]},{"level":2,"title":"4. 优化后代码","slug":"_4-优化后代码","link":"#_4-优化后代码","children":[{"level":3,"title":"4.1 使用非递归方式构建树","slug":"_4-1-使用非递归方式构建树","link":"#_4-1-使用非递归方式构建树","children":[]}]},{"level":2,"title":"4. 优化后数据","slug":"_4-优化后数据","link":"#_4-优化后数据","children":[]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"posts/Daily-Thoughts/optimization/optimization-x-tree-structure.md","localizedDate":"2024年10月28日","excerpt":"\\n<h2>1. 背景</h2>\\n<p>本来是很简单的一个树结构，但是我们数据库中的数据过大，导致查询SQL 和 转换为树结构的时候速度过慢</p>\\n<h2>2. 优化前数据</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>数据量</th>\\n<th>SQL 查询耗时</th>\\n<th>转为树结构</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>6000条</td>\\n<td>1881ms</td>\\n<td>12658ms</td>\\n</tr>\\n</tbody>\\n</table>\\n<p>我们前端10s 就超时了，所以这里总共耗费14s 是不能接受的</p>\\n<h2>3. 优化前代码</h2>","autoDesc":true}');export{o as comp,k as data};
