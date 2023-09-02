import { defineComponent } from "vue";
import S from "./button.module.scss";

interface Props {
    onClick: (e: MouseEvent) => void | undefined;
}
export const Button = defineComponent<Props>({
    setup(props, context) {
        return () => (
            <button class={S.button}>
                {context.slots.default?.()}
                <span></span>
            </button>
        );
    }
});
