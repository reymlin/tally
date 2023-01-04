 
import './styles/App.scss';
import './styles/variable.scss'
import {defineComponent} from 'vue'
export const App = defineComponent({
    setup(){ 
        return () => (
            <router-view></router-view>
        )
    }
 })