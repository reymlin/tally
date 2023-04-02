import {defineComponent}from 'vue'
import addIcon from '@/assets/global-icons/add.svg'
import S from './floatButton.module.scss'

export const FloatButton = defineComponent({ 
    props: {
        svgName: {
            type: String,
            default: () =>  '',
            require: false
        },
    }, 
    setup(props,context){
        const path = `/src/assets/global-icons/${props.svgName}.svg`

        return () => (
            <div class={S.imgBox} > 
                <img src={ path } alt="" /> 
            </div>
        )
    }
})