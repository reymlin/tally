import { ref, Ref, defineComponent } from "vue";
import S from "./navBar.module.scss";
import { Overlay } from "../overlay/overlay";
export const NavBar = defineComponent({
    setup(props, context) {
        const { slots } = context;
        const overlayVisible: Ref<boolean> = ref(false);

        const changeVisible = (): void => {
            overlayVisible.value = !overlayVisible.value;
        };

        return () => (
            <>
                <div class={S.navBarWrapper}>
                    <span class={S.icon} onClick={changeVisible}>
                        {slots.icon?.()}
                    </span>
                    <span class={S.title}>{slots.title?.()}</span>
                </div>
                {overlayVisible.value ? <Overlay onClose={() => (overlayVisible.value = false)}></Overlay> : ""}
            </>
        );
    }
});
