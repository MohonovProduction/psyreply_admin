import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from '@/components/UI/index'

//Crunch
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlzQWRtaW4iOnRydWUsInRva2VuVHlwZSI6MCwiaWF0IjoxNjY5MTU5MzYxLCJleHAiOjE2NzE3NTEzNjF9.bxIEIv5H2zs7Qz7TuGoOmyZw9UO-kTztvV6Ap2k2DSs')

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app.use(store).use(router).mount('#app')
