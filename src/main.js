import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './apollo'

const app = createApp(App)
app.provide(DefaultApolloClient, apolloClient)

app.use(router)

app.config.errorHandler = (err, instance, info) => {
  console.error('全局error', err)
}

app.mount('#app')
