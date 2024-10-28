import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "discover", link: "/demo/" },
  {
    text: "笔记分类",
    icon: "edit",
    children: [
      {
        text: "代码笔记",
        prefix:"/posts/",
        children: [
          { text: "计算机基础", icon: "windows", link: "Computer-Basics/" },
          { text: "数据结构与算法", icon: "calculate", link: "Data-Structure/" },
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "数据库", icon: "table", link: "Database/" },
          { text: "Docker", icon: "expansion", link: "Docker/" },
          { text: "Git", icon: "git", link: "Git/" },
          { text: "Redis", icon: "lock", link: "Redis/" },
          { text: "中间件", icon: "process", link: "MiddleWare/" },
          { text: "大数据", icon: "hot", link: "BigData/" },
          { text: "架构师", icon: "study", link: "Architect/" },
          { text: "日常思考", icon: "mark", link: "Daily-Thoughts/" },
          { text: "开发工具", icon: "tool", link: "Development-Tools/" },
        ],
      },
      {
        text: "博客相关",
        prefix:"/blog/",
        children: [
          { text: "博客相关", icon: "blog", link: "" },
        ],
      },
    ],
  },
  {
    text: "Java",
    icon: "java",
    link: "/posts/Java/",
  },
  {
    text: "收藏",
    icon: "hk-shoucang1",
    link: "/collect",
  },
  {
    text: "说说",
    icon: "news",
    link: "/news/",
  },
  {
    text: "留言板",
    icon: "mark",
    link: "/visitorsbook",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "info",
    children:[
      { text: "关于我", icon: "people", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ]
  },
]);
