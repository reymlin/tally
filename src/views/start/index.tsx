import {defineComponent} from 'vue'
import {Button} from '@/components/button/button'
import S from './start.module.scss'
export const Start = defineComponent({
    setup(){
        const onClickBtn = () => {
            console.log('click btn'); 
        }
        return () => <> 
           <div class={S.btn_wrapper}>
                <Button onClick={onClickBtn} class={S.btn} >开始记账</Button>
           </div>
        </>
    }
})