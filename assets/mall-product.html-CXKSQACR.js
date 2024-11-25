import{_ as a,c as n,a as l,o as i}from"./app-BfIe-EZg.js";const r={};function p(o,s){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="mall中商品设计" tabindex="-1"><a class="header-anchor" href="#mall中商品设计"><span>mall中商品设计</span></a></h1><blockquote><p>该篇文章主要参考<a href="http://www.macrozheng.com/#/README" target="_blank" rel="noopener noreferrer">mall官方文档</a>，并结合自己的使用感受做的一些笔记</p></blockquote><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h2 id="_2-接口设计" tabindex="-1"><a class="header-anchor" href="#_2-接口设计"><span>2. 接口设计</span></a></h2><h3 id="_2-1-获取商品详情" tabindex="-1"><a class="header-anchor" href="#_2-1-获取商品详情"><span>2.1 获取商品详情</span></a></h3><ol><li>获取商品的基础信息</li><li>获取品牌信息</li><li>获取商品属性信息</li><li>获取商品SKU库存信息</li><li>商品阶梯价格设置</li><li>商品满减价格设置</li><li>商品可用优惠券</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">public</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> PmsPortalProductDetail</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> detail</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> id) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    PmsPortalProductDetail</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> PmsPortalProductDetail</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //获取商品信息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    PmsProduct</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> product </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> productMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByPrimaryKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(id);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setProduct</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(product);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //获取品牌信息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    PmsBrand</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> brand </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> brandMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByPrimaryKey</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getBrandId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setBrand</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(brand);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //获取商品属性信息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    Long</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> productAttributeCategoryId </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getProductAttributeCategoryId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(productAttributeCategoryId </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#E06C75;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        PmsProductAttributeExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> attributeExample </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> PmsProductAttributeExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        attributeExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">andProductAttributeCategoryIdEqualTo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(productAttributeCategoryId);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PmsProductAttribute</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> productAttributeList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> productAttributeMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(attributeExample);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setProductAttributeList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(productAttributeList);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //获取商品属性值信息</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">CollUtil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isNotEmpty</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(productAttributeList)</span><span style="color:#E06C75;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Long</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> attributeIds </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> productAttributeList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">stream</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">map</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(PmsProductAttribute</span><span style="color:#C678DD;--shiki-dark:#C678DD;">::</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">getId).</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">collect</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Collectors</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">toList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            PmsProductAttributeValueExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> attributeValueExample </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> PmsProductAttributeValueExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            attributeValueExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">andProductIdEqualTo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    .</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">andProductAttributeIdIn</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(attributeIds);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PmsProductAttributeValue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> productAttributeValueList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> productAttributeValueMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(attributeValueExample);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setProductAttributeValueList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(productAttributeValueList);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //获取商品SKU库存信息</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        PmsSkuStockExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> skuExample </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> PmsSkuStockExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        skuExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">andProductIdEqualTo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PmsSkuStock</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> skuStockList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> skuStockMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(skuExample);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setSkuStockList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(skuStockList);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //商品阶梯价格设置</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getPromotionType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;">3</span><span style="color:#E06C75;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            PmsProductLadderExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ladderExample </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> PmsProductLadderExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            ladderExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">andProductIdEqualTo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PmsProductLadder</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> productLadderList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> productLadderMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(ladderExample);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setProductLadderList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(productLadderList);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //商品满减价格设置</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#E06C75;--shiki-dark:#E06C75;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getPromotionType</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#D19A66;--shiki-dark:#D19A66;">4</span><span style="color:#E06C75;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            PmsProductFullReductionExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> fullReductionExample </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> new</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> PmsProductFullReductionExample</span><span style="color:#E06C75;--shiki-dark:#E06C75;">()</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            fullReductionExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">createCriteria</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">().</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">andProductIdEqualTo</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            List</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">PmsProductFullReduction</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> productFullReductionList </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> productFullReductionMapper</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">selectByExample</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(fullReductionExample);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">            result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setProductFullReductionList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(productFullReductionList);</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //商品可用优惠券</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setCouponList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">portalProductDao</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getAvailableCouponList</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(),</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">product</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getProductCategoryId</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()));</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> result</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-获取可用优惠券列表" tabindex="-1"><a class="header-anchor" href="#_2-1-1-获取可用优惠券列表"><span>2.1.1 获取可用优惠券列表</span></a></h4><p>获取具体商品的可用优惠券，</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;getAvailableCouponList&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> resultMap</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;com.macro.mall.mapper.SmsCouponMapper.BaseResultMap&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sms_coupon</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    WHERE</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> use_type </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      AND</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> start_time &amp;lt; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOW</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">      AND</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> end_time &amp;gt; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOW</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    UNION</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    (</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> c.*</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sms_coupon_product_category_relation cpc</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                 LEFT JOIN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sms_coupon c </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ON</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> cpc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">coupon_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        WHERE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">use_type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          AND</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">start_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;lt; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOW</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          AND</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">end_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;gt; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOW</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          AND</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> cpc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">product_category_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> #{productCategoryId}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    )</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    UNION</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    (</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        SELECT</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> c.*</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        FROM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sms_coupon_product_relation cp</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                 LEFT JOIN</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> sms_coupon c </span><span style="color:#C678DD;--shiki-dark:#C678DD;">ON</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> cp</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">coupon_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">id</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        WHERE</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">use_type</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          AND</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">start_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;lt; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOW</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          AND</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> c</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">end_time</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> &amp;gt; </span><span style="color:#C678DD;--shiki-dark:#C678DD;">NOW</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">          AND</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> cp</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#D19A66;--shiki-dark:#D19A66;">product_id</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> #{productId}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    )</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#C678DD;--shiki-dark:#C678DD;">select</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const B=a(r,[["render",p],["__file","mall-product.html.vue"]]),t=JSON.parse('{"path":"/posts/Architect/mall/mall-product.html","title":"mall中商品设计","lang":"zh-CN","frontmatter":{"aliases":"mall中商品设计","tags":null,"cssclass":null,"source":null,"created":"2024-04-24 14:35","updated":"2024-04-30 11:42","description":"mall中商品设计 该篇文章主要参考mall官方文档，并结合自己的使用感受做的一些笔记 1. 简介 2. 接口设计 2.1 获取商品详情 获取商品的基础信息 获取品牌信息 获取商品属性信息 获取商品SKU库存信息 商品阶梯价格设置 商品满减价格设置 商品可用优惠券 2.1.1 获取可用优惠券列表 获取具体商品的可用优惠券，","watermark":true,"head":[["meta",{"property":"og:url","content":"https://springg.us.kg/posts/Architect/mall/mall-product.html"}],["meta",{"property":"og:site_name","content":"mrjason’s Blog"}],["meta",{"property":"og:title","content":"mall中商品设计"}],["meta",{"property":"og:description","content":"mall中商品设计 该篇文章主要参考mall官方文档，并结合自己的使用感受做的一些笔记 1. 简介 2. 接口设计 2.1 获取商品详情 获取商品的基础信息 获取品牌信息 获取商品属性信息 获取商品SKU库存信息 商品阶梯价格设置 商品满减价格设置 商品可用优惠券 2.1.1 获取可用优惠券列表 获取具体商品的可用优惠券，"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T01:58:08.000Z"}],["meta",{"property":"article:author","content":"MrJason"}],["meta",{"property":"article:modified_time","content":"2024-10-28T01:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mall中商品设计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T01:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MrJason\\",\\"url\\":\\"https://springg.us.kg\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 接口设计","slug":"_2-接口设计","link":"#_2-接口设计","children":[{"level":3,"title":"2.1 获取商品详情","slug":"_2-1-获取商品详情","link":"#_2-1-获取商品详情","children":[]}]}],"git":{"createdTime":1730080688000,"updatedTime":1730080688000,"contributors":[{"name":"MrJason","email":"845886914@qq.com","commits":1}]},"readingTime":{"minutes":1.43,"words":428},"filePathRelative":"posts/Architect/mall/mall-product.md","localizedDate":"2024年10月28日","excerpt":"\\n<blockquote>\\n<p>该篇文章主要参考<a href=\\"http://www.macrozheng.com/#/README\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mall官方文档</a>，并结合自己的使用感受做的一些笔记</p>\\n</blockquote>\\n<h2>1. 简介</h2>\\n<h2>2. 接口设计</h2>\\n<h3>2.1 获取商品详情</h3>\\n<ol>\\n<li>获取商品的基础信息</li>\\n<li>获取品牌信息</li>\\n<li>获取商品属性信息</li>\\n<li>获取商品SKU库存信息</li>\\n<li>商品阶梯价格设置</li>\\n<li>商品满减价格设置</li>\\n<li>商品可用优惠券</li>\\n</ol>","autoDesc":true}');export{B as comp,t as data};
