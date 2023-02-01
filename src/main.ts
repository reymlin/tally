import { createApp } from 'vue' 
import {App} from './App'
 import {Router} from './router/index'
 import {setDomFontSize} from './utils/resize'

 setDomFontSize()
createApp(App).use(Router).mount('#app')
