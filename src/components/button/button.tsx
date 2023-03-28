import {defineComponent}from 'vue'
import S from './button.module.scss'
export const Button = defineComponent({
    setup(props,context){
        return () =>(
            <button class={S.button}>{context.slots.default?.()}</button>
        )
    }
})