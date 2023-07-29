import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './local'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(i18n).mount('#app')

setTimeout(() => {
  console.log(pinia.state.value)
}, 3000)
