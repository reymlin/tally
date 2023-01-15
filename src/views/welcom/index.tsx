import {defineComponent,Transition,VNode }from 'vue'
import S from './welcom.module.scss'
import logo from '../../assets/logo.svg'
import {RouterView,useRouter,RouteLocationNormalizedLoaded} from 'vue-router'
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
            <div class={S.wrapper}> 
                <RouterView>
                    {({ Component: X, route: R }:  { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
                        <Transition
                            enterFromClass={S.enter_from}
                            enterActiveClass={S.enter_active}
                            leaveToClass={S.leave_to}
                            leaveActiveClass={S.leave_active}
                        >
                            {X}
                        </Transition>
                    )}
                </RouterView>   
            </div>
        </div>
    }
})