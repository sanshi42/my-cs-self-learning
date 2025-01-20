import { CodeTabs } from "/home/huanglei/workspace/my-cs-self-learning/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.73_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_7e1bcca43c4d7829314cc73a213b6897/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/huanglei/workspace/my-cs-self-learning/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.73_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_7e1bcca43c4d7829314cc73a213b6897/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/huanglei/workspace/my-cs-self-learning/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.73_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_7e1bcca43c4d7829314cc73a213b6897/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
