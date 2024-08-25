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

#### i18n Ally vs Code插件
```
直接查看{{ t('test') }} 内容，与右下角语言切换配合

生产环境：
  "vue-i18n": "9.2.2",
开发环境：
  "@intlify/unplugin-vue-i18n": "0.12.2",

vite.config.ts中配置

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