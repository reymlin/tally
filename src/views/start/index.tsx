import {defineComponent} from 'vue'
import S from './start.module.scss'
import addImg from '@/assets/imgs/add.png'
import menuImg from '@/assets/imgs/menu.png'
import piggy from '@/assets/welcom-icons/piggy.svg'
import { Button } from '@/components/button/button'
import { NavBar } from '@/components/navBar/navBar'
import { FloatButton } from '@/components/floatButton/floatButton' 


export const Start = defineComponent({
    setup(){
        const onClickBtn = () => {
            console.log('click btn'); 
        }
        return () => <> 
           <div class={S.btn_wrapper}> 
                <NavBar>{
                    { default:'省钱助手', icon:() => <img src={menuImg} />}
                }</NavBar>
                <div class={S.piggBox}>
                    <img src={piggy} alt="" />
                </div>
                <Button class={S.btn} onClick={onClickBtn}>开始记账</Button>
                <FloatButton class={S.floatAddIcon} path={addImg}></FloatButton>
           </div>

        </>
    }
})