# 网站常见问题
## waline 评论插件
[leancloud](https://console.leancloud.app/apps/fLyHyR8wWAOUpdgZuZmGadUd-MdYXbMMI/settings/keys)

[waline](https://waline.js.org/guide/features/reaction.html)

[vercel](https://vercel.com/mrjackcs-projects/blog-comments/T9cGMYsinmTAShJyMXyVtqZQG1dX)

### 评论出现跨域问题，要配置vercel中的vercel.json 文件

[评论管理](https://blog-comments-31kqr5pt2-mrjackcs-projects.vercel.app/ui/profile)
## docsearch 搜索插件
[docsearch](https://docsearch.algolia.com/apply/)

[爬虫问题解决](https://theme-hope.vuejs.press/zh/guide/feature/search.html)

[爬虫问题解决algolia官网说明](https://support.algolia.com/hc/en-us/articles/14876674614289-Why-my-DocSearch-index-is-not-populated-with-crawler-data)

[爬虫问题解决docsearch官网说明](https://docsearch.algolia.com/docs/record-extractor)



### algolia爬虫代码

```js
new Crawler({
    appId: "1J80T0VL5V",
    apiKey: "6fd085fb5cad2f05e65d5488e0bfa7f4",
    indexPrefix: "",
    rateLimit: 8,
    maxDepth: 10,
    maxUrls: null,
    startUrls: ["https://xxxxx.github.io"],
    sitemaps: ["https://xxxxx.github.io/sitemap.xml"],
    ignoreNoFollowTo: true,
    ignoreNoIndex: true,
    ignoreRobotsTxtRules: true,
    ignoreCanonicalTo: true,
    renderJavaScript: false,
    exclusionPatterns: [],
    schedule: "at 02:00 every 1 day",
    actions: [
      {
        indexName: "mrjackc_crawler",
        pathsToMatch: ["https://xxxxx.github.io/**"],
        recordExtractor: ({ helpers }) => {
          return helpers.docsearch({
            recordProps: {
              lvl1: ["header h1", "article h1", "main h1", "h1", "head > title"],
              content: ["article p, article li", "main p, main li", "p, li"],
              lvl0: {
                selectors: "",
                defaultValue: "Documentation",
              },
              lvl2: ["article h2", "main h2", "h2"],
              lvl3: ["article h3", "main h3", "h3"],
              lvl4: ["article h4", "main h4", "h4"],
              lvl5: ["article h5", "main h5", "h5"],
              lvl6: ["article h6", "main h6", "h6"],
            },
            aggregateContent: true,
            recordVersion: "v3",
          });
        },
      },
    ],
    safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 30 } },
    initialIndexSettings: {
      mrjackc_crawler: {
        attributesForFaceting: ["type", "lang", "language", "version"],
        attributesToRetrieve: [
          "hierarchy",
          "content",
          "anchor",
          "url",
          "url_without_anchor",
          "type",
        ],
        attributesToHighlight: ["hierarchy", "content"],
        attributesToSnippet: ["content:10"],
        camelCaseAttributes: ["hierarchy", "content"],
        searchableAttributes: [
          "unordered(hierarchy_radio_camel.lvl0)",
          "unordered(hierarchy_radio.lvl0)",
          "unordered(hierarchy_radio_camel.lvl1)",
          "unordered(hierarchy_radio.lvl1)",
          "unordered(hierarchy_radio_camel.lvl2)",
          "unordered(hierarchy_radio.lvl2)",
          "unordered(hierarchy_radio_camel.lvl3)",
          "unordered(hierarchy_radio.lvl3)",
          "unordered(hierarchy_radio_camel.lvl4)",
          "unordered(hierarchy_radio.lvl4)",
          "unordered(hierarchy_radio_camel.lvl5)",
          "unordered(hierarchy_radio.lvl5)",
          "unordered(hierarchy_radio_camel.lvl6)",
          "unordered(hierarchy_radio.lvl6)",
          "unordered(hierarchy_camel.lvl0)",
          "unordered(hierarchy.lvl0)",
          "unordered(hierarchy_camel.lvl1)",
          "unordered(hierarchy.lvl1)",
          "unordered(hierarchy_camel.lvl2)",
          "unordered(hierarchy.lvl2)",
          "unordered(hierarchy_camel.lvl3)",
          "unordered(hierarchy.lvl3)",
          "unordered(hierarchy_camel.lvl4)",
          "unordered(hierarchy.lvl4)",
          "unordered(hierarchy_camel.lvl5)",
          "unordered(hierarchy.lvl5)",
          "unordered(hierarchy_camel.lvl6)",
          "unordered(hierarchy.lvl6)",
          "content",
        ],
        distinct: true,
        attributeForDistinct: "url",
        customRanking: [
          "desc(weight.pageRank)",
          "desc(weight.level)",
          "asc(weight.position)",
        ],
        ranking: [
          "words",
          "filters",
          "typo",
          "attribute",
          "proximity",
          "exact",
          "custom",
        ],
        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        highlightPostTag: "</span>",
        minWordSizefor1Typo: 3,
        minWordSizefor2Typos: 7,
        allowTyposOnNumericTokens: false,
        minProximity: 1,
        ignorePlurals: true,
        advancedSyntax: true,
        attributeCriteriaComputedByMinProximity: true,
        removeWordsIfNoResults: "allOptional",
      },
    },
  });
```
## github page
[github](https://juejin.cn/post/7245980207315861562)

[action](https://juejin.cn/post/7241226276253433916)


## us.kg域名免费申请

[us.kg域名免费申请](https://register.us.kg/auth/register)

![注册申请](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241101152632.png)

使用虚拟身份,但是邮箱最好保证是@gmail.com、@163.com等官网支持的邮箱，否则Github校验不太好通过

### 临时身份信息
[nametake](https://namefake.com/)
提交后需要邮箱验证,验证通过后可能需要KYC验证，根据页面指引在 此仓库 (https://github.com/DigitalPlatDev/US.KG/issues) 提出 issue，15分钟之内就通过了
然后在登录在后台「Domain Registration」注册域名，支持解析到 Cloudflare
## cloudflare 域名托管
[域名托管](https://dash.cloudflare.com/)

![域名托管](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241101153850.png)

Name Server(可更改)

- hal.ns.cloudflare.com
- chloe.ns.cloudflare.com

## github page 绑定自定义域名

![绑定自定义域名](https://cdn.jsdelivr.net/gh/MrJackC/PicGoImages/other/20241101154111.png)



