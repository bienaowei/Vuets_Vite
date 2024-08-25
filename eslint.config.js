// import pluginVue from 'eslint-plugin-vue'
// import vueEslintParser from 'vue-eslint-parser'
// import js from '@eslint/js'
// import globals from 'globals'
// import tyParser from '@typescript-eslint/parser'

// // eslint.config.js
// export default [
//     {
//         languageOptions: {
//             globals: {
//                 ...globals.browser,
//                 computed: 'readonly',
//                 defineEmits: 'readonly',
//                 defineExpose: 'readonly',
//                 defineProps: 'readonly',
//                 onMounted: 'readonly',
//                 onUnmounted: 'readonly',
//                 reactive: 'readonly',
//                 ref: 'readonly',
//                 shallowReactive: 'readonly',
//                 shallowRef: 'readonly',
//                 toRef: 'readonly',
//                 toRefs: 'readonly',
//                 watch: 'readonly',
//                 watchEffect: 'readonly',
//             },
//         }
//     },
//     {
//         files: ["src/**/*.{vue,ts,js}"],
//         ignores: [],
//         rules: {
//             // ...js.configs.recommended.rules,
//             // ...pluginVue.configs["flat/recommended"].rules,
//             "no-debugger":"error",
//             // "vue/valid-define-emits":"error",
//             // "simple-import-sort/imports":"error",
//             // "simple-import-sort/exports":"error",
//         },
//         languageOptions: {
//             parser: vueEslintParser,
//             parserOptions: {
//                 // ecmaFeatures: {
//                 //     jsx: true
//                 // }
//             },
//             // extraFileExtensions: [".vue"],
//             parser:tyParser

//         },
//         //eslint 9.x版本的插件注册方式
//         // plugins: {
//         //     vue: pluginVue,
//         //     "simple-import-sort":importSort
//         // }
//     }
// ];