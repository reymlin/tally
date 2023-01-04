import {defineComponent}from 'vue'
import S from './welcom.module.scss'
import logo from '../../assets/logo.svg'
export const WelcomIndex = defineComponent({
    setup(){
        return () => 
        <div class={S.welcom}>
            <button class={S.jump}>跳过</button>
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