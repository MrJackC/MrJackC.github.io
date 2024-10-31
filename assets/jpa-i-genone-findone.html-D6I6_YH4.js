import{_ as a,c as i,a as n,o as l}from"./app-mWs04Xnh.js";const e={};function t(o,s){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="jpa中的getone-findone以及findbyid区别" tabindex="-1"><a class="header-anchor" href="#jpa中的getone-findone以及findbyid区别"><span>JPA中的getOne,findOne以及findById区别</span></a></h1><p>使用 Spring Data JPA 时，经常会看到 <code>findById</code>、<code>getOne</code>、<code>findOne</code> 三个方法。</p><p>从字面上理解，他们都是根据 ID 、或根据指定的查询条件，获取单个实体对象。</p><p>但他们的底层获取机制、返回值类型、以及抛异常的机制是不一样的，因此对应的使用场景也不一样。</p><h2 id="_1-findbyid-方法" tabindex="-1"><a class="header-anchor" href="#_1-findbyid-方法"><span>1. findById 方法</span></a></h2><p><code>findById</code> 方法会立即（EAGER）访问数据库，并返回和指定 ID 关联的实体对象；如果没有找到，则返回 <code>Optional.empty()</code>。</p><p>定义如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> CrudRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Repository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span><span style="color:#E06C75;--shiki-dark:#E06C75;">	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * Retrieves an entity by its id.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> must not be {@literal null}.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> the entity with the given id or {@literal Optional#empty()} if none found.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@throws</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> IllegalArgumentException</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> if {@literal id} is {@literal null}.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 */</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">	Optional</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findById</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ID</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_2-getone-方法" tabindex="-1"><a class="header-anchor" href="#_2-getone-方法"><span>2. getOne 方法</span></a></h2><p><code>getOne</code> 是一个延迟加载方法，<strong>它并不立即访问数据库</strong>，而是返回一个代理（<code>proxy</code>）对象，这个代理对象是对实体对象的引用，仅在 <strong>使用代理对象访问对象属性时才会去真正访问数据库</strong> ，如果找不到，则抛出 <code>EntityNotFoundException</code>。</p><p>定义如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> JpaRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PagingAndSortingRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ID</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> QueryByExampleExecutor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * Returns a reference to the entity with the given identifier. Depending on how the JPA persistence provider is</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * implemented this is very likely to always return an instance and throw an</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * {@link javax.persistence.EntityNotFoundException} on first access. Some of them will reject invalid identifiers</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * immediately.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> must not be {@literal null}.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> a reference to the entity with the given identifier.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@see</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> EntityManager#getReference(Class, Object) for details on when an exception is thrown.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 */</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">	T</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> getOne</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">ID</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="_3-findone-方法" tabindex="-1"><a class="header-anchor" href="#_3-findone-方法"><span>3. findOne 方法</span></a></h2><p>除了 <code>findById</code>、<code>getOne</code> 外，Spring Data JPA 还提供了两个 <code>findOne</code> 方法：</p><ul><li><code>Optional findOne(@Nullable Specification spec)</code></li><li><code> Optional findOne(Example example)</code></li></ul><p>这两个方法用于需要动态构建多条件查询的场景中，它们都是立即访问数据库的。</p><p>定义如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> QueryByExampleExecutor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * Returns a single entity matching the given {@link Example} or {@literal null} if none was found.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> example</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> must not be {@literal null}.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> a single entity matching the given {@link Example} or {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> Optional</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">empty()</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">} if none was found.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@throws</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> org.springframework.dao.IncorrectResultSizeDataAccessException</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> if the Example yields more than one result.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">	&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">S</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Optional</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findOne</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Example</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">example</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> JpaSpecificationExecutor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * Returns a single entity matching the given {@link Specification} or {</span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@link</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> Optional</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">empty()</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">} if none found.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@param</span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> spec</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> can be {@literal null}.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> never {@literal null}.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 * </span><span style="color:#C678DD;font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@throws</span><span style="color:#E5C07B;font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic;"> org.springframework.dao.IncorrectResultSizeDataAccessException</span><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> if more than one entity found.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	 */</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">	Optional</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> findOne</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Nullable</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Specification</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">T</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">spec</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回类型为 <code>Optional</code> ，如果没有检索到，返回 <code>Optional.empty()</code>，结果满足条件的记录条数超过一条，则抛出 <code>IncorrectResultSizeDataAccessException</code></p><h2 id="_4-如何选择" tabindex="-1"><a class="header-anchor" href="#_4-如何选择"><span>4. 如何选择</span></a></h2><p>从上面的描述可以看出：它们主要的区别在于 <strong>加载时期</strong> 及 <strong>是否支持动态构建查询条件</strong> 的不同。</p><h3 id="_4-1、多条件查询的场景中-可使用-findone" tabindex="-1"><a class="header-anchor" href="#_4-1、多条件查询的场景中-可使用-findone"><span>4.1、多条件查询的场景中，可使用 findOne</span></a></h3><p>例如，根据 <code>openId</code> 以及 <code>state</code> 查询指定的用户：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Optional</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> user </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        postRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">findOne</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            (root, query, cb) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                cb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">and</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">cb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">equal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">root</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;openId&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), </span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;aaa&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">cb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">equal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">root</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;state&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)));</span></span></code></pre></div><p>或者使用 <code>findOne(Example example)</code>：</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> u </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> User</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">u</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setOpenId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;xxx&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">u</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Example</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> example </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> Example</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">of</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(u);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Optional</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> user </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> postRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">findOne</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(example);</span></span></code></pre></div><p>以上两种写法是等效的，执行的 SQL 如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Hibernate: select user0_.id as id1_0_, user0_.created_at as created_2_0_, user0_.open_id as open_id3_0_, user0_.state as state4_0_ from t_users user0_ where user0_.open_id=? and user0_.state=1</span></span></code></pre></div><h2 id="_4-2-按-id-检索的场景中-使用-findbyid-或-getone" tabindex="-1"><a class="header-anchor" href="#_4-2-按-id-检索的场景中-使用-findbyid-或-getone"><span>4.2 按 ID 检索的场景中，使用 findById 或 getOne</span></a></h2><p>前面已经描述过，<code>findById</code> 和 <code>getOne</code> 的最大的区别是加载时期的不同。</p><p>因此：</p><p>1、在需要延迟加载时，选择 <code>getOne</code></p><p>2、不需要延迟加载时，选择 <code>findById</code></p><p>当然了，<code>findOne</code> 也可以根据 ID 进行查询，但是写法累赘、且晦涩不易读，不要那样。</p><div class="language-java" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Optional</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">User</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> user </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> postRepository</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">findOne</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">((root, query, cb) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">-&gt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> cb</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">equal</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">root</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">get</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;id&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), </span><span style="color:#D19A66;--shiki-dark:#D19A66;">1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">));</span></span></code></pre></div><h1 id="_5、总结" tabindex="-1"><a class="header-anchor" href="#_5、总结"><span>5、总结</span></a></h1><p>1、<code>getOne</code> 是延迟加载；而 <code>findById</code>、<code>findOne</code> 是立即加载。</p><p>2、 <code>getOne</code> 如果找不到记录会抛出<code>EntityNotFoundException</code>；而 <code>findById</code>、<code>findOne</code> 会返回 <code>Optional.empty()</code>。</p><p>3、 在 <code>@ManyToOne</code> 的场景中使用 <code>findOne</code> ，可以获得延迟加载机制带来的性能优势。</p><p>4、 在根据非 <code>ID</code> 查询、或动态查询的场景中，使用 <code>findOne</code>。</p><p>5、 <code>findOne</code> 查询结果不能返回超过一条，否则会抛出 <code>IncorrectResultSizeDataAccessException</code>。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p><a href="https://www.cnblogs.com/ktgu/p/13772236.html" target="_blank" rel="noopener noreferrer">Spring Data JPA 中 findById、getOne、findOne 的区别</a></p>`,43)]))}const p=a(e,[["render",t],["__file","jpa-i-genone-findone.html.vue"]]),c=JSON.parse('{"path":"/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-i-genone-findone.html","title":"JPA中的getOne,findOne以及findById区别","lang":"zh-CN","frontmatter":{"description":"JPA中的getOne,findOne以及findById区别 使用 Spring Data JPA 时，经常会看到 findById、getOne、findOne 三个方法。 从字面上理解，他们都是根据 ID 、或根据指定的查询条件，获取单个实体对象。 但他们的底层获取机制、返回值类型、以及抛异常的机制是不一样的，因此对应的使用场景也不一样。 1. ...","head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Java/Java%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BE%9D%E8%B5%96/jpa/jpa-i-genone-findone.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"JPA中的getOne,findOne以及findById区别"}],["meta",{"property":"og:description","content":"JPA中的getOne,findOne以及findById区别 使用 Spring Data JPA 时，经常会看到 findById、getOne、findOne 三个方法。 从字面上理解，他们都是根据 ID 、或根据指定的查询条件，获取单个实体对象。 但他们的底层获取机制、返回值类型、以及抛异常的机制是不一样的，因此对应的使用场景也不一样。 1. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-21T07:03:09.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-21T07:03:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JPA中的getOne,findOne以及findById区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-21T07:03:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. findById 方法","slug":"_1-findbyid-方法","link":"#_1-findbyid-方法","children":[]},{"level":2,"title":"2. getOne 方法","slug":"_2-getone-方法","link":"#_2-getone-方法","children":[]},{"level":2,"title":"3. findOne 方法","slug":"_3-findone-方法","link":"#_3-findone-方法","children":[]},{"level":2,"title":"4. 如何选择","slug":"_4-如何选择","link":"#_4-如何选择","children":[{"level":3,"title":"4.1、多条件查询的场景中，可使用 findOne","slug":"_4-1、多条件查询的场景中-可使用-findone","link":"#_4-1、多条件查询的场景中-可使用-findone","children":[]}]},{"level":2,"title":"4.2 按 ID 检索的场景中，使用 findById 或 getOne","slug":"_4-2-按-id-检索的场景中-使用-findbyid-或-getone","link":"#_4-2-按-id-检索的场景中-使用-findbyid-或-getone","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1729494189000,"updatedTime":1729494189000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":3.26,"words":979},"filePathRelative":"posts/Java/Java第三方依赖/jpa/jpa-i-genone-findone.md","localizedDate":"2024年10月21日","excerpt":"\\n<p>使用 Spring Data JPA 时，经常会看到 <code>findById</code>、<code>getOne</code>、<code>findOne</code> 三个方法。</p>\\n<p>从字面上理解，他们都是根据 ID 、或根据指定的查询条件，获取单个实体对象。</p>\\n<p>但他们的底层获取机制、返回值类型、以及抛异常的机制是不一样的，因此对应的使用场景也不一样。</p>\\n<h2>1. findById 方法</h2>\\n<p><code>findById</code> 方法会立即（EAGER）访问数据库，并返回和指定 ID 关联的实体对象；如果没有找到，则返回 <code>Optional.empty()</code>。</p>","autoDesc":true}');export{p as comp,c as data};
