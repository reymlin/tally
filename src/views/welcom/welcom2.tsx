import {defineComponent}from 'vue'
import {MiddleContent} from './components/middle-content'
import clock from '@/assets/welcom-icons/clock.svg'
export const Welcom2 = defineComponent({ 
    setup(){
        const param = {
            path:'/welcom/3',
            title1:'每日提醒',
            title2:'不会漏每一笔账单',
            img:clock
        }
        return () => 
        <>
            <MiddleContent v-model:value={param}></MiddleContent> 
        </>
    }
})