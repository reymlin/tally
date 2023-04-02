import {defineComponent} from 'vue'
import S from './navBar.module.scss'
export const NavBar = defineComponent({

    setup(props,context){
        const { slots } = context;
        return () => (
            <div class={S.navBarWrapper}>
                <span class={S.icon}>{slots.icon?.()}</span>
                <span class={S.title}>{slots.default?.()}</span>
            </div>
        )
    }
})