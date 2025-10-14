import { CodeTabs } from "G:/Maths/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "G:/Maths/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "G:/Maths/node_modules/@vuepress/theme-default/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
