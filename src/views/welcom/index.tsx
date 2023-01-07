import {defineComponent}from 'vue'
import S from './welcom.module.scss'
import logo from '../../assets/logo.svg'
import {useRouter} from 'vue-router'
export const WelcomIndex = defineComponent({
    setup(){
        const router = useRouter()
        const onJump = () => {
            router.push('/start')
        }

        return () => 
        <div class={S.welcom}>
            <button class={S.jump} onClick={onJump}>跳过</button>
            <header>
                <img src={logo} alt="" />
                <p>某某记账</p>
            </header> 
            <section class={S.wrapper}>
                <router-view></router-view>
            </section>
        </div>
    }
})