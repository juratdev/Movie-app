import "@/style.css"
import {
  createApp
} from 'vue'
import App from '@/App.vue'
import uiComponents from './components/ui-components'

const app = createApp(App)

uiComponents.map(component => app.component(component.name, component))

app.mount('#app')