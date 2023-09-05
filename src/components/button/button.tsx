import { defineComponent } from "vue";
import S from "./button.module.scss";

// interface Props {
//     onClick: (e: MouseEvent) => void | undefined;
// }
export const Button = defineComponent({
    props: {
        level: {
            type: String,
            require: false,
            default: () => ""
        },
        onClick: {
            type: Function
        }
    },
    setup(props, context) {
        return () => (
            <button class={[S.button, S[props.level]]}>
                {context.slots.default?.()}
                <span></span>
            </button>
        );
    }
});
