import{_ as a,c as n,a as l,o as i}from"./app-mWs04Xnh.js";const e={};function p(o,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="mybatis使用collection解决一对多关联查询" tabindex="-1"><a class="header-anchor" href="#mybatis使用collection解决一对多关联查询"><span>Mybatis使用collection解决一对多关联查询</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>一对多使用场景有很多，例如</p><ul><li>一个部门下有多个用户，一个用户只属于一个部门</li></ul><h2 id="_2-实现方式" tabindex="-1"><a class="header-anchor" href="#_2-实现方式"><span>2. 实现方式</span></a></h2><h3 id="_2-1-collection关联查询" tabindex="-1"><a class="header-anchor" href="#_2-1-collection关联查询"><span>2.1 collection关联查询</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resultMap</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDeptUserDetail&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDeptResultByLeftJoin&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deptId&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dept_id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">result</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deptName&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dept_name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">collection</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;userList&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">  resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysUserResult&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resultMap</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysUser&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysUserResult&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#D19A66;--shiki-dark:#D19A66;">     property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;userId&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">       column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;user_id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">result</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;userName&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">     column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;user_name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">result</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;nickName&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">     column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;nick_name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectDeptUserListByLeftJoin&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> parameterType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDept&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDeptResultByLeftJoin&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        select d.dept_id,d.dept_name,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">               u.user_id,u.user_name,u.nick_name</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        from sys_dept d</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        left join sys_user u on u.dept_id = d.dept_id</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deptName != null and deptName != &#39;&#39;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            AND dept_name like concat(&#39;%&#39;, #{deptName}, &#39;%&#39;)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-查询的sql日志" tabindex="-1"><a class="header-anchor" href="#_2-1-1-查询的sql日志"><span>2.1.1 查询的sql日志</span></a></h4><div class="language-sql" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  Preparing: </span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> d</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">dept_id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">d</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">dept_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">u</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">user_id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">u</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">user_name</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#D19A66;--shiki-dark:#D19A66;">u</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">nick_name</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> from</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sys_dept d </span><span style="color:#C678DD;--shiki-dark:#C678DD;">left join</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sys_user u </span><span style="color:#C678DD;--shiki-dark:#C678DD;">on</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> u</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">dept_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> d</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">dept_id</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  Parameters: </span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &lt;==</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      Total: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231555982.png" alt="image-20211005154305109" tabindex="0" loading="lazy"><figcaption>image-20211005154305109</figcaption></figure><h4 id="_2-1-2-优缺点" tabindex="-1"><a class="header-anchor" href="#_2-1-2-优缺点"><span>2.1.2 优缺点</span></a></h4><ul><li>优点： <ul><li>只用一条sql语句就实现了查询</li></ul></li><li>缺点 <ul><li>但是一对多的分页会出现数量不对的问题</li></ul></li></ul><h3 id="_2-2-collection嵌套查询" tabindex="-1"><a class="header-anchor" href="#_2-2-collection嵌套查询"><span>2.2 collection嵌套查询</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resultMap</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> type</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDeptUserDetail&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDeptResult&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">id</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deptId&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dept_id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">result</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deptName&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dept_name&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">collection</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;userList&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dept_id&quot;</span></span>
<span class="line"><span style="color:#D19A66;--shiki-dark:#D19A66;">                    select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;com.ygn.system.mapper.SysUserDao.selectByDeptId&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectDeptUserList&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> parameterType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDept&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultMap</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;SysDeptResult&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        select d.dept_id,d.dept_name</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        from sys_dept d</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> test</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;deptName != null and deptName != &#39;&#39;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            AND dept_name like concat(&#39;%&#39;, #{deptName}, &#39;%&#39;)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SysUserDao</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">mapper</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> namespace</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;com.ygn.system.mapper.SysUserDao&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;selectByDeptId&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> resultType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;com.ygn.common.core.domain.entity.SysUser&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		select * from sys_user where dept_id=#{dept_id}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">mapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>特别注意：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;">collection</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;userList&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> column</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;dept_id&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;com.ygn.system.mapper.SysUserDao.selectByDeptId&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">collection</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><ul><li>select : 嵌套查询的sql语句</li><li>column： 传递到嵌套查询的参数</li></ul><h4 id="_2-2-1-查询的sql日志" tabindex="-1"><a class="header-anchor" href="#_2-2-1-查询的sql日志"><span>2.2.1 查询的sql日志</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231555023.png" alt="image-20211005154247410" tabindex="0" loading="lazy"><figcaption>image-20211005154247410</figcaption></figure><h4 id="_2-2-2-优缺点" tabindex="-1"><a class="header-anchor" href="#_2-2-2-优缺点"><span>2.2.2 优缺点</span></a></h4><ul><li><p>优点：</p><ul><li>能解决一对多情况，分页导致的分页不准问题</li></ul></li><li><p>缺点</p><ul><li>产生N+1问题: sql 实际上嵌套了n条 关联sql</li></ul></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://blog.csdn.net/zjy15203167987/article/details/79463887" target="_blank" rel="noopener noreferrer">collection解决一对多关联查询</a></p>`,25)]))}const B=a(e,[["render",p],["__file","mybatis-z-one-more-join.html.vue"]]),t=JSON.parse(`{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-one-more-join.html","title":"Mybatis使用collection解决一对多关联查询","lang":"zh-CN","frontmatter":{"description":"Mybatis使用collection解决一对多关联查询 1. 简介 一对多使用场景有很多，例如 一个部门下有多个用户，一个用户只属于一个部门 2. 实现方式 2.1 collection关联查询 2.1.1 查询的sql日志 image-20211005154305109image-20211005154305109 2.1.2 优缺点 优点： 只用...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/mybatis/mybatis-z-one-more-join.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"Mybatis使用collection解决一对多关联查询"}],["meta",{"property":"og:description","content":"Mybatis使用collection解决一对多关联查询 1. 简介 一对多使用场景有很多，例如 一个部门下有多个用户，一个用户只属于一个部门 2. 实现方式 2.1 collection关联查询 2.1.1 查询的sql日志 image-20211005154305109image-20211005154305109 2.1.2 优缺点 优点： 只用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231555982.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis使用collection解决一对多关联查询\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231555982.png\\",\\"https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/202404231555023.png\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 实现方式","slug":"_2-实现方式","link":"#_2-实现方式","children":[{"level":3,"title":"2.1 collection关联查询","slug":"_2-1-collection关联查询","link":"#_2-1-collection关联查询","children":[]},{"level":3,"title":"2.2 collection嵌套查询","slug":"_2-2-collection嵌套查询","link":"#_2-2-collection嵌套查询","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"posts/Java/Java第三方依赖/mybatis/mybatis-z-one-more-join.md","localizedDate":"2024年10月21日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>一对多使用场景有很多，例如</p>\\n<ul>\\n<li>一个部门下有多个用户，一个用户只属于一个部门</li>\\n</ul>\\n<h2>2. 实现方式</h2>\\n<h3>2.1 collection关联查询</h3>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">resultMap</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> type</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysDeptUserDetail\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> id</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysDeptResultByLeftJoin\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">id</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> property</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"deptId\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> column</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"dept_id\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">result</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> property</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"deptName\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> column</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"dept_name\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">/&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">collection</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> property</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"userList\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">  resultMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysUserResult\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\"> &gt;&lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">collection</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">resultMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">resultMap</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> type</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysUser\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> id</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysUserResult\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">id</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">     property</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"userId\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">       column</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"user_id\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">      /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">result</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> property</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"userName\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">     column</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"user_name\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">result</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> property</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"nickName\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\">     column</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"nick_name\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">resultMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">select</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> id</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"selectDeptUserListByLeftJoin\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> parameterType</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysDept\\"</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> resultMap</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"SysDeptResultByLeftJoin\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        select d.dept_id,d.dept_name,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">               u.user_id,u.user_name,u.nick_name</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        from sys_dept d</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        left join sys_user u on u.dept_id = d.dept_id</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">if</span><span style=\\"color:#D19A66;--shiki-dark:#D19A66\\"> test</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">=</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">\\"deptName != null and deptName != ''\\"</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">            AND dept_name like concat('%', #{deptName}, '%')</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">        &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">if</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"color:#E06C75;--shiki-dark:#E06C75\\">select</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{B as comp,t as data};
