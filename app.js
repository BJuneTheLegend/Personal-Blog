import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')