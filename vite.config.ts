import path from 'node:path';
import { defineConfig } from 'vite';
import UnoCSS  from 'unocss/vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite';
import VueMacros from 'unplugin-vue-macros/vite';
import generateSitemap from 'vite-ssg-sitemap';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-vue-markdown';
import Shiki from 'markdown-it-shiki';
import LinkAttributes from 'markdown-it-link-attributes';
import VueDevTools from 'vite-plugin-vue-devtools'
import WebfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
      },
    }),
    VueDevTools(),
    UnoCSS(),
    Pages({
      // dirs: "src/pages", //需要生成路由的文件目录，默认文件夹为pages
      // exclude: ["**/components/*.vue"], //排除components目录下的.vue文件
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      markdownItSetup(md:any) {
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        });
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    WebfontDownload(),
  ],
  test:{
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    }
  },
  ssr: {
    // SSG Vue-i18n workaround
    noExternal: [/vue-i18n/],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      generateSitemap();
    },
  },
})
