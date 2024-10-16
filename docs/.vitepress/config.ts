import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/scp15/",
  title: "15班收容所",
  description: "嘻嘻",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "面向写作者的教程", link: "/howtouse" },
    ],

    sidebar: [
      { text: "主目录", items: [{ text: "麦镜隆", link: "/mai" }] },
      {
        text: "教程",
        items: [
          { text: "面向写作者的教程", link: "/howtouse" },
          { text: "面向开发与维护人员", link: "/api-examples" },
        ],
      },
    ],
  },
});
