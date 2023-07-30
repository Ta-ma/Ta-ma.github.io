import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueViewer from 'v-viewer'

import 'viewerjs/dist/viewer.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueViewer)

app.mount('#app')
