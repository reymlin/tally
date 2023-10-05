import { defineComponent, ref } from "vue";
import S from "./mainLayout.module.scss";
// import { NavBar } from "@/components/navBar/navBar";
import { Overlay } from "@/components/overlay/overlay";
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

        // 浮层组件状态
        const visibleOverly = ref(false);

        // 展示导航悬浮层
        const showOverlay = () => {
            visibleOverly.value = true;
        };
        // 关闭导航悬浮层
        const closeOverlay = () => {
            visibleOverly.value = false;
        };

        return () => (
            <>
                <div class={S.mainBody}>
                    <div class={S.topBar}>
                        <div class={S.imgBox} onClick={showOverlay}>
                            {slots?.leftImg()}
                        </div>
                        <div class={S.titleBox}>{slots?.title()}</div>
                    </div>
                    {props.tabs.length ? (
                        <ul>
                            {props.tabs.map((item) => (
                                <li class={props.selectedValue === item.name ? S.selectItme : ""} onClick={() => props.changeSelectedValue(item.name)}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        ""
                    )}
                    <div class={S.mainContent}>{slots?.main()}</div>
                </div>

                {visibleOverly.value ? <Overlay onClose={closeOverlay} /> : ""}
            </>
        );
    }
});
