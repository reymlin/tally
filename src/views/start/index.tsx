import {defineComponent} from 'vue'
import S from './start.module.scss'
import piggy from '@/assets/welcom-icons/piggy.svg'
import { Button } from '@/components/button/button'
import { FloatButton } from '@/components/floatButton/floatButton' 

export const Start = defineComponent({
    setup(){
        const onClickBtn = () => {
            console.log('click btn'); 
        }
        return () => <> 
           <div class={S.btn_wrapper}> 
                <div class={S.piggBox}>
                    <img src={piggy} alt="" />
                </div>
                <Button class={S.btn} onClick={onClickBtn}>开始记账</Button>
                <FloatButton class={S.floatAddIcon} svgName='add'></FloatButton>
           </div>

        </>
    }
})