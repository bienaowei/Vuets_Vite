# vue+vite项目实践

## 插件安装

### unocss
 原子化Css
 1、Devdependencies："unocss": "^0.53.5"
 2、dependencies："@unocss/reset": "0.53.5"
 3、参考https://juejin.cn/post/7142466784971456548
 使用：https://www.tailwindcss.cn/docs/installation
 使用：https://unocss-cn.pages.dev/guide/
 
 常用解析：https://tiven.cn/p/7886fb00/

### 修改全局滚动条样式(webkit)
根据是否存在class='dark' 判断当前主题颜色
Globalscrollbar.css


```
:root {
  --scrollbars-bg:rgba(0, 0, 0, 0.1);
  --scrollbars-piece:rgba(0, 0, 0, 0.15);
  --scrollbars-hover:rgba(0, 0, 0, 0.3);
}

.dark{
  --scrollbars-bg:rgba(255, 255, 255, 0.1);
  --scrollbars-piece:rgba(255, 255, 255, 0.15);
  --scrollbars-hover:rgba(255, 255, 255, 0.3);
}
```



### 主题颜色控制

https://vueuse.org/core/useDark/
通过Vueuse Dark + unocss 实现 给html添加class
```
dark:text-gray-100

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

还可以自定义class 来控制背景颜色,设置boby中 class='color-scheme'即可
```
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
```

#### 图标按钮实现
参考carbon只安装了这部分
https://icon-sets.iconify.design/carbon/?category=General
"@iconify-json/carbon": "1.1.18",


### 自动导入

#### 依赖导入
"unplugin-auto-import": "0.16.6"
vite.config.ts中配置
其余配置可参考：https://www.mulingyuer.com/archives/930/

#### 组件导入
"unplugin-vue-components": "^0.25.1",
vite.config.ts中配置
其余配置可参考:https://blog.csdn.net/qq_42611074/article/details/123036252

### tsconfig.json配置


### eslint代码检验
暂未启用
```
    "eslint": "9.1.1",
    "@eslint/js": "9.1.1",
    "vue-eslint-parser": "9.4.2",
    "eslint-plugin-vue": "9.25.0",
    "@typescript-eslint/parser":"7.8.0",
    "globals": "15.1.0",

    导入顺序自动排序（当前未用，因为使用unplugin-auto-import自动导入）
    "eslint-plugin-simple-import-sort": "12.1.0",
```

### 多语言 i18n
-生产环境
"vue-i18n": "9.2.2",
-开发环境
"@intlify/unplugin-vue-i18n": "0.12.2",

-vite.config.ts
```
VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    })
```

-modules/i18n.ts 获取locales定义资源
-挂在到main.ts中
```
const app = createApp(App);  

import { install as installI18n } from './modules/i18n'; 
installI18n({app})
```

#### i18n Ally vs Code插件
直接查看{{ t('test') }} 内容，与右下角语言切换配合

生产环境：
  "vue-i18n": "9.2.2",
开发环境：
  "@intlify/unplugin-vue-i18n": "0.12.2",

vite.config.ts中配置
```
  VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
```



### unhead 文档头管理器
"@unhead/vue": "1.1.30",
"@vueuse/head": "1.1.26",
import { createHead } from "@unhead/vue"
const head = createHead()

createApp(App).use(head).mount('#app')
配置注入 页面直接使用
参考：https://unhead.unjs.io/usage/composables/use-head

### vite-plugin-pages、vite-plugin-vue-layouts
vite-plugin-papes
"vite-plugin-pages": "0.31.0",
作用：
可以读取指定的目录文件，自动化生成路由信息，高效快捷开发

vite-plugin-vue-layouts
"vite-plugin-vue-layouts": "0.8.0",
作用：
页面可以自由组合布局，可以在页面加载指定的layout。

互补性：vite-plugin-pages和vite-plugin-vue-layouts在Vite项目中经常一起使用，以实现自动化路由生成和基于路由的布局管理。vite-plugin-pages负责根据文件结构自动生成路由，而vite-plugin-vue-layouts则负责根据路由配置管理页面布局。

### nprogress 进度条样式
生产环境
"nprogress": "^0.2.0",
开发环境
"@types/nprogress": "^0.2.0",
全局引入css
@import './styles/nprogress.css';
路由控制
router.beforeEach(async (to, from) => {
  NProgress.start()
})

router.afterEach(to => {
  NProgress.done()
})


### markdown
-所需插件
```
"@types/markdown-it-link-attributes": "3.0.1",
"markdown-it-link-attributes": "4.0.1",
"markdown-it-shiki": "0.9.0",
"vite-plugin-vue-markdown": "0.23.5",
"shiki": "0.14.3"
```
1、vite-plugin-vue-markdown：将markdown作为component加载
2、markdown-it-shiki：着色，以及markdown.css 因为tailwind.css 导致样式被覆盖


### devtools
-Vue DevTools是一款旨在增强 Vue 开发人员体验的工具，它是一款功能强大且用途广泛的工具，可以在使用 Vue 应用程序时显著提高您的工作效率和调试能力。它的实时编辑、时间旅行调试和全面检查功能使其成为任何 Vue.js 开发人员的必备工具。
"vite-plugin-vue-devtools": "0.5.1"
vite.config.ts 配置


### taze（未安装）
-检查插件更新（包括大版本、小版本、补丁更新）
"taze": "^0.11.2",
-如script 中配置"up": "taze major -I" 大版本更新

### 单元测试
```
"vitest": "0.33.0",
"@vue/test-utils": "2.4.0"
```
-用来测试组件作为开发的好帮手
在test文件中

### 端对端测试 e2e
```
"cypress": "12.17.1",
"cypress-vite": "1.4.1"
```
内容包括：
-cypress文件
-cypress.config.ts
-pnpm test:e2e运行

更多实践参考官网：https://docs.cypress.io/api/table-of-contents

### 使用vite ssg
```
"vite-ssg": "0.23.0",
"vite-ssg-sitemap": "0.5.1",
```
-配置main.ts
-需安装vue-router unhead
-注意该vite为4版本

访问地址
https://vue-vite-umber.vercel.app/


### noscript
在浏览器禁止加载script时加载


### import引入排序
-当前未使用
https://github.com/lydell/eslint-plugin-simple-import-sort