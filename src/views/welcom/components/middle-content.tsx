import {defineComponent,ref,watchEffect}from 'vue'
import S from './middle.module.scss' 
import { RouterLink ,useRouter} from 'vue-router';
import { useSwipe } from '../../../hooks/useSwipe';
export const MiddleContent = defineComponent({
    props: {
        value: {
            type: Object,
            default: () =>  {},
            require: true
        },
    },
    setup(props, context){ 
        const router = useRouter()
        const {from,img,title1,title2,path} = props.value || {} 

        const mainEle = ref<HTMLElement>();
        const { swiping, direction } = useSwipe(mainEle);
 
        watchEffect(() => { 
            if(swiping.value){
                if(direction.value === 'left'){
                    router.push(path) // 去下一页
                }else if (direction.value === 'right' && from){
                    // router.push(from)   // 返回上一页  
                }
                swiping.value = false;
            } 
        })

        return () => 
        <div class={S.middle} ref={mainEle}>
            <img src={img} alt="" />
            <p>{title1}</p>
            <p>{title2}</p> 
            <RouterLink to={path}>下一页</RouterLink> 
        </div>
    }
})

 