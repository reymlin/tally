import { defineComponent } from "vue";
import S from "./floatButton.module.scss";
export const FloatButton = defineComponent({
    props: {
        path: {
            type: String,
            default: () => "",
            require: false
        }
    },
    setup(props, context) {
        return () => (
            <div class={S.imgBox}>
                <img src={props.path} alt="" />
            </div>
        );
    }
});
