 
import {defineComponent} from 'vue'

export const App = defineComponent({

setup(){ 
    return () => 
    <>
    <header>
        <p> 
            <router-link to="/login">登录</router-link>
        </p>
        <p> 
            <router-link to="/404">404</router-link>
        </p>
    </header> 
        <router-view></router-view>
    </>
    }
 })