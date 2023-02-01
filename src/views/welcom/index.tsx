import {defineComponent,Transition,VNode }from 'vue'
import S from './welcom.module.scss'
import logo from '../../assets/logo.svg'
import {RouterView,useRouter,useRoute,RouteLocationNormalizedLoaded} from 'vue-router'
export const WelcomIndex = defineComponent({
    setup(){
        const router = useRouter()
        const curentRouter = useRoute() 
        const onJump = () => {
            router.push('/start')
        }

        const toNextPage = () => {
            switch(curentRouter.path){
                case '/welcom/1':
                    router.push('/welcom/2');
                    break;
                case '/welcom/2':
                    router.push('/welcom/3');
                    break;
                case '/welcom/3':
                    router.push('/welcom/4');
                    break;
                case '/welcom/4':
                    router.push('/start');
                    break;
                default:
                    break;
            }
        }

        return () => 
        <div class={S.welcom}>
            <button class={S.jump} onClick={onJump}>跳过</button>
            <header>
                <img src={logo} alt="" />
                <p>省钱助手</p>
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

            <footer>
                <button onClick={toNextPage}>下一页</button>
            </footer>
        </div>
    }
})