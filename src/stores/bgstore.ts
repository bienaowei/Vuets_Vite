// // 定义一个Pinia store  
// import { defineStore } from 'pinia';  
  
// export const useUserStore = defineStore('user', {  
//   state: () => ({  
//     user: JSON.parse(localStorage.getItem('user')) || null  
//   }),  
//   getters: {  
//     // 你可以在这里定义getters  
//   },  
//   actions: {  
//     setUser(user:string) {  
//       this.user = user;  
//       localStorage.setItem('user', JSON.stringify(user));  
//     },  
//     // 其他actions...  
//   }  
// });