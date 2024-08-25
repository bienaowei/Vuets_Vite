declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {  
  // 引入Vue的DefineComponent类型，这是Vue 3中用于定义组件的类型  
  import { type DefineComponent } from 'vue'  
  
  // 声明一个名为component的常量，这个常量是一个DefineComponent类型的对象  
  // DefineComponent泛型参数分别代表props的类型、上下文(context)的类型、以及组件的选项（例如methods, computed等）  
  // 这里使用{}表示props和context的类型为空（即不限制），使用any表示组件选项的类型（这是为了简化示例，实际开发中可能需要根据具体需求进行类型定义）  
  const component: DefineComponent<{}, {}, any>  
  
  // 导出这个常量，使其成为该模块（即*.vue文件）的默认导出  
  export default component  
}
