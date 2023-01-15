import {defineComponent}from 'vue'
import {MiddleContent} from './components/middle-content'
import chart from '@/assets/welcom-icons/chart.svg'
export const Welcom3 = defineComponent({ 
    setup(){
        const param = {
            from:'/welcom/2',
            path:'/welcom/4',
            title1:'数据可视化',
            title2:'收支一目了然',
            img:chart
        }
        return () => 
        <div>
            <MiddleContent v-model:value={param}></MiddleContent> 
        </div>
    }
})