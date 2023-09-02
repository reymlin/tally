import { defineComponent } from "vue";
import S from "./mainLayout.module.scss";
// import { NavBar } from "@/components/navBar/navBar";
export const MianLayout = defineComponent({
    props: {
        selectedValue: {
            type: String,
            default: "",
            required: false
        },
        changeSelectedValue: {
            type: Function,
            required: false,
            default: () => {}
        },
        tabs: {
            type: Array<{ name: string }>,
            required: false,
            default: () => []
        }
    },
    setup(props, context: any) {
        const { slots } = context;
        return () => (
            <div class={S.mainBody}>
                <div class={S.topBar}>
                    <div class={S.imgBox}>{slots?.leftImg()}</div>
                    <div class={S.titleBox}>{slots?.title()}</div>
                </div>
                <ul v-if={props.tabs.length}>
                    {props.tabs.map((item) => (
                        <li class={props.selectedValue === item.name ? S.selectItme : ""} onClick={() => props.changeSelectedValue(item.name)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
                <div class={S.mainContent}>{slots?.main()}</div>
            </div>
        );
    }
});
