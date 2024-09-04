import{g as a,o as n,c as e,h as l}from"./app-da83c031.js";const p={class:"prose prose-sm m-auto text-left"},o=l(`<h1>vue+vite项目实践</h1><h2>插件安装</h2><h3>unocss</h3><p>原子化Css 1、Devdependencies：“unocss”: “^0.53.5” 2、dependencies：“@unocss/reset”: “0.53.5” 3、参考<a href="https://juejin.cn/post/7142466784971456548" target="_blank" rel="noopener">https://juejin.cn/post/7142466784971456548</a> 使用：<a href="https://www.tailwindcss.cn/docs/installation" target="_blank" rel="noopener">https://www.tailwindcss.cn/docs/installation</a> 使用：<a href="https://unocss-cn.pages.dev/guide/" target="_blank" rel="noopener">https://unocss-cn.pages.dev/guide/</a></p><p>常用解析：<a href="https://tiven.cn/p/7886fb00/" target="_blank" rel="noopener">https://tiven.cn/p/7886fb00/</a></p><h3>修改全局滚动条样式(webkit)</h3><p>根据是否存在class=‘dark’ 判断当前主题颜色 Globalscrollbar.css</p><pre hidden></pre><div class="shiki-container language-"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#dbd7caee;">:root {</span></span>
<span class="line"><span style="color:#dbd7caee;">  --scrollbars-bg:rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span style="color:#dbd7caee;">  --scrollbars-piece:rgba(0, 0, 0, 0.15);</span></span>
<span class="line"><span style="color:#dbd7caee;">  --scrollbars-hover:rgba(0, 0, 0, 0.3);</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">.dark{</span></span>
<span class="line"><span style="color:#dbd7caee;">  --scrollbars-bg:rgba(255, 255, 255, 0.1);</span></span>
<span class="line"><span style="color:#dbd7caee;">  --scrollbars-piece:rgba(255, 255, 255, 0.15);</span></span>
<span class="line"><span style="color:#dbd7caee;">  --scrollbars-hover:rgba(255, 255, 255, 0.3);</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#393a34;">:root {</span></span>
<span class="line"><span style="color:#393a34;">  --scrollbars-bg:rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span style="color:#393a34;">  --scrollbars-piece:rgba(0, 0, 0, 0.15);</span></span>
<span class="line"><span style="color:#393a34;">  --scrollbars-hover:rgba(0, 0, 0, 0.3);</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">.dark{</span></span>
<span class="line"><span style="color:#393a34;">  --scrollbars-bg:rgba(255, 255, 255, 0.1);</span></span>
<span class="line"><span style="color:#393a34;">  --scrollbars-piece:rgba(255, 255, 255, 0.15);</span></span>
<span class="line"><span style="color:#393a34;">  --scrollbars-hover:rgba(255, 255, 255, 0.3);</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3>主题颜色控制</h3><p><a href="https://vueuse.org/core/useDark/" target="_blank" rel="noopener">https://vueuse.org/core/useDark/</a> 通过Vueuse Dark + unocss 实现 给html添加class</p><pre hidden></pre><div class="shiki-container language-"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#dbd7caee;">dark:text-gray-100</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">const isDark = useDark()</span></span>
<span class="line"><span style="color:#dbd7caee;">const toggleDark = useToggle(isDark)</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#393a34;">dark:text-gray-100</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">const isDark = useDark()</span></span>
<span class="line"><span style="color:#393a34;">const toggleDark = useToggle(isDark)</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>还可以自定义class 来控制背景颜色,设置boby中 class=&#39;color-scheme’即可</p><pre hidden></pre><div class="shiki-container language-"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#dbd7caee;">const isDark = useDark({</span></span>
<span class="line"><span style="color:#dbd7caee;">  selector: &#39;body&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">  attribute: &#39;color-scheme&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">  valueDark: &#39;dark&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">  valueLight: &#39;light&#39;,</span></span>
<span class="line"><span style="color:#dbd7caee;">})</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#393a34;">const isDark = useDark({</span></span>
<span class="line"><span style="color:#393a34;">  selector: &#39;body&#39;,</span></span>
<span class="line"><span style="color:#393a34;">  attribute: &#39;color-scheme&#39;,</span></span>
<span class="line"><span style="color:#393a34;">  valueDark: &#39;dark&#39;,</span></span>
<span class="line"><span style="color:#393a34;">  valueLight: &#39;light&#39;,</span></span>
<span class="line"><span style="color:#393a34;">})</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h4>图标按钮实现</h4><p>参考carbon只安装了这部分 <a href="https://icon-sets.iconify.design/carbon/?category=General" target="_blank" rel="noopener">https://icon-sets.iconify.design/carbon/?category=General</a> “@iconify-json/carbon”: “1.1.18”,</p><h3>自动导入</h3><h4>依赖导入</h4><p>“unplugin-auto-import”: “0.16.6” vite.config.ts中配置 其余配置可参考：<a href="https://www.mulingyuer.com/archives/930/" target="_blank" rel="noopener">https://www.mulingyuer.com/archives/930/</a></p><h4>组件导入</h4><p>“unplugin-vue-components”: “^0.25.1”, vite.config.ts中配置 其余配置可参考:<a href="https://blog.csdn.net/qq_42611074/article/details/123036252" target="_blank" rel="noopener">https://blog.csdn.net/qq_42611074/article/details/123036252</a></p><h3>tsconfig.json配置</h3><h3>eslint代码检验</h3><p>暂未启用</p><pre hidden></pre><div class="shiki-container language-"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#dbd7caee;">    &quot;eslint&quot;: &quot;9.1.1&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;@eslint/js&quot;: &quot;9.1.1&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;vue-eslint-parser&quot;: &quot;9.4.2&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;eslint-plugin-vue&quot;: &quot;9.25.0&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;@typescript-eslint/parser&quot;:&quot;7.8.0&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;globals&quot;: &quot;15.1.0&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    导入顺序自动排序（当前未用，因为使用unplugin-auto-import自动导入）</span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;eslint-plugin-simple-import-sort&quot;: &quot;12.1.0&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#393a34;">    &quot;eslint&quot;: &quot;9.1.1&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;@eslint/js&quot;: &quot;9.1.1&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;vue-eslint-parser&quot;: &quot;9.4.2&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;eslint-plugin-vue&quot;: &quot;9.25.0&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;@typescript-eslint/parser&quot;:&quot;7.8.0&quot;,</span></span>
<span class="line"><span style="color:#393a34;">    &quot;globals&quot;: &quot;15.1.0&quot;,</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    导入顺序自动排序（当前未用，因为使用unplugin-auto-import自动导入）</span></span>
<span class="line"><span style="color:#393a34;">    &quot;eslint-plugin-simple-import-sort&quot;: &quot;12.1.0&quot;,</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3>多语言 i18n</h3><h4>i18n Ally vs Code插件</h4><pre hidden></pre><div class="shiki-container language-"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#dbd7caee;">直接查看{{ t(&#39;test&#39;) }} 内容，与右下角语言切换配合</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">生产环境：</span></span>
<span class="line"><span style="color:#dbd7caee;">  &quot;vue-i18n&quot;: &quot;9.2.2&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;">开发环境：</span></span>
<span class="line"><span style="color:#dbd7caee;">  &quot;@intlify/unplugin-vue-i18n&quot;: &quot;0.12.2&quot;,</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">vite.config.ts中配置</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  VueI18n({</span></span>
<span class="line"><span style="color:#dbd7caee;">      runtimeOnly: true,</span></span>
<span class="line"><span style="color:#dbd7caee;">      compositionOnly: true,</span></span>
<span class="line"><span style="color:#dbd7caee;">      fullInstall: true,</span></span>
<span class="line"><span style="color:#dbd7caee;">      include: [path.resolve(__dirname, &#39;locales/**&#39;)],</span></span>
<span class="line"><span style="color:#dbd7caee;">    }),</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#393a34;">直接查看{{ t(&#39;test&#39;) }} 内容，与右下角语言切换配合</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">生产环境：</span></span>
<span class="line"><span style="color:#393a34;">  &quot;vue-i18n&quot;: &quot;9.2.2&quot;,</span></span>
<span class="line"><span style="color:#393a34;">开发环境：</span></span>
<span class="line"><span style="color:#393a34;">  &quot;@intlify/unplugin-vue-i18n&quot;: &quot;0.12.2&quot;,</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">vite.config.ts中配置</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  VueI18n({</span></span>
<span class="line"><span style="color:#393a34;">      runtimeOnly: true,</span></span>
<span class="line"><span style="color:#393a34;">      compositionOnly: true,</span></span>
<span class="line"><span style="color:#393a34;">      fullInstall: true,</span></span>
<span class="line"><span style="color:#393a34;">      include: [path.resolve(__dirname, &#39;locales/**&#39;)],</span></span>
<span class="line"><span style="color:#393a34;">    }),</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3>unhead 文档头管理器</h3><p>“@unhead/vue”: “1.1.30”, “@vueuse/head”: “1.1.26”, import { createHead } from “@unhead/vue” const head = createHead()</p><p>createApp(App).use(head).mount(‘#app’) 配置注入 页面直接使用 参考：<a href="https://unhead.unjs.io/usage/composables/use-head" target="_blank" rel="noopener">https://unhead.unjs.io/usage/composables/use-head</a></p><h3>vite-plugin-pages、vite-plugin-vue-layouts</h3><p>vite-plugin-papes “vite-plugin-pages”: “0.31.0”, 作用： 可以读取指定的目录文件，自动化生成路由信息，高效快捷开发</p><p>vite-plugin-vue-layouts “vite-plugin-vue-layouts”: “0.8.0”, 作用： 页面可以自由组合布局，可以在页面加载指定的layout。</p><p>互补性：vite-plugin-pages和vite-plugin-vue-layouts在Vite项目中经常一起使用，以实现自动化路由生成和基于路由的布局管理。vite-plugin-pages负责根据文件结构自动生成路由，而vite-plugin-vue-layouts则负责根据路由配置管理页面布局。</p><h3>nprogress 进度条样式</h3><p>生产环境 “nprogress”: “^0.2.0”, 开发环境 “@types/nprogress”: “^0.2.0”, 全局引入css @import ‘./styles/nprogress.css’; 路由控制 router.beforeEach(async (to, from) =&gt; { NProgress.start() })</p><p>router.afterEach(to =&gt; { NProgress.done() })</p>`,42),t=[o],h=[],b={__name:"xiangqing",setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),a({meta:[]}),(d,u)=>(n(),e("div",p,t))}};export{b as default,h as meta};
