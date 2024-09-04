import{g as s,o as a,c as n,h as o}from"./app-da83c031.js";const l={class:"prose prose-sm m-auto text-left"},t=o(`<h1>es6-vue-template</h1><blockquote><p>ES6 Vue 项目模板</p></blockquote><h2>⛰️ 能力支持</h2><ul><li><a href="https://github.com/vuejs/router" target="_blank" rel="noopener"><code>Vue Router</code></a></li><li><a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener"><code>vite-plugin-pages</code></a> - 以文件系统为基础的路由</li><li><a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts" target="_blank" rel="noopener"><code>vite-plugin-vue-layouts</code></a> - 页面布局系统</li><li><a href="https://pinia.vuejs.org" target="_blank" rel="noopener"><code>Pinia</code></a> - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理</li><li><a href="https://github.com/antfu/vite-plugin-vue-markdown" target="_blank" rel="noopener"><code>vite-plugin-vue-markdown</code></a> - Markdown 作为组件，也可以让组件在 Markdown 中使用</li><li><a href="https://github.com/jGleitz/markdown-it-prism" target="_blank" rel="noopener"><code>markdown-it-prism</code></a> - <a href="https://prismjs.com/" target="_blank" rel="noopener">Prism</a> 的语法高亮</li><li><a href="https://github.com/antfu/prism-theme-vars" target="_blank" rel="noopener"><code>prism-theme-vars</code></a> - 利用 CSS 变量自定义 Prism.js 的主题</li><li><a href="https://github.com/intlify/vue-i18n-next" target="_blank" rel="noopener"><code>Vue I18n</code></a> - 国际化</li><li><a href="https://github.com/antfu/vueuse" target="_blank" rel="noopener"><code>VueUse</code></a> - 实用的 Composition API 工具合集</li><li><a href="https://github.com/vueuse/head" target="_blank" rel="noopener"><code>@vueuse/head</code></a> - 响应式地操作文档头信息</li><li><a href="https://github.com/webfansplz/vite-plugin-vue-devtools" target="_blank" rel="noopener"><code>vite-plugin-vue-devtools</code></a> - 旨在增强 Vue 开发者体验的 Vite 插件</li><li>使用 Composition API 地 <a href="https://github.com/vuejs/rfcs/pull/227" target="_blank" rel="noopener"><code>&lt;script setup&gt;</code> SFC 语法</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener"><code>TypeScript</code></a></li><li><a href="https://github.com/vitest-dev/vitest" target="_blank" rel="noopener"><code>Vitest</code></a> - 基于 Vite 的单元测试框架</li><li><a href="https://cypress.io/" target="_blank" rel="noopener"><code>Cypress</code></a> - E2E 测试</li></ul><h2>🛡️ 配置要求</h2><ul><li><a href="https://nodejs.org/en" target="_blank" rel="noopener">node</a> &gt;=14.18</li></ul><h2>🔨 如何使用</h2><p>1.下载代码仓库，执行如下指令</p><pre hidden></pre><div class="shiki-container language-sh"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#80A665;">git</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">clone</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">git@github.com:encode-studio-fe/es6-vue-template.git</span></span>
<span class="line"><span style="color:#B8A965;">cd</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">es6-vue-template</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#59873A;">git</span><span style="color:#393A34;"> </span><span style="color:#B56959;">clone</span><span style="color:#393A34;"> </span><span style="color:#B56959;">git@github.com:encode-studio-fe/es6-vue-template.git</span></span>
<span class="line"><span style="color:#998418;">cd</span><span style="color:#393A34;"> </span><span style="color:#B56959;">es6-vue-template</span></span>
<span class="line"></span></code></pre></div><p>2.安装依赖</p><blockquote><p>前提条件：使用最新版本的 pnpm</p></blockquote><pre hidden></pre><div class="shiki-container language-sh"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">run</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">init</span><span style="color:#DBD7CAEE;"> </span><span style="color:#758575DD;"># pnpm install</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">run</span><span style="color:#393A34;"> </span><span style="color:#B56959;">init</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;"># pnpm install</span></span>
<span class="line"></span></code></pre></div><p>3.执行指令</p><p>开发 只需要执行以下命令就可以在 <code>http://localhost:9999</code> 中看到</p><pre hidden></pre><div class="shiki-container language-sh"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">dev</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">dev</span></span>
<span class="line"></span></code></pre></div><p>构建</p><pre hidden></pre><div class="shiki-container language-sh"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">build</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">build</span></span>
<span class="line"></span></code></pre></div><p>然后会看到用于发布的 dist 文件夹被生成。</p>`,22),p=[t],g=[],k={__name:"README",setup(i,{expose:e}){return e({frontmatter:{meta:[]}}),s({meta:[]}),(d,h)=>(a(),n("div",l,p))}};export{k as default,g as meta};
