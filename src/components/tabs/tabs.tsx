import { defineComponent, PropType } from "vue";
import S from "./tabs.module.scss";
export const Tabs = defineComponent({
    props: {
        selectedValue: {
            type: String as PropType<String>,
            required: false
        },
        tabs: {
            type: Array as PropType<Array<any>>,
            required: true,
            default: () => []
        },
        selectedItemTab: {
            type: Function as PropType<Function>,
            required: false,
            default: () => {}
        }
    },
    setup(props, context) {
        return () => (
            <ul class={S.tabs}>
                {props.tabs.map((item) => (
                    <li class={props.selectedValue === item.name ? S.selectItme : ""} onClick={() => props.selectedItemTab(item.name)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
});
