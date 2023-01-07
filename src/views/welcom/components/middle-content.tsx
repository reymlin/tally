import {defineComponent}from 'vue'
import S from './middle.module.scss' 
import { RouterLink } from 'vue-router';
export const MiddleContent = defineComponent({
    props: {
        value: {
            type: Object,
            default: () =>  {},
            require: true
        },
    },
    setup(props, context){ 
        const {img,title1,title2,path} = props.value || {} 
        return () => 
        <div class={S.middle}>
            <img src={img} alt="" />
            <p>{title1}</p>
            <p>{title2}</p>
            <RouterLink to={path}>下一页</RouterLink>
        </div>
    }
})

 