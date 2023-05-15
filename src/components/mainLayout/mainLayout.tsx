import { defineComponent } from "vue";
import S from "./mainLayout.module.scss";
import { NavBar } from "@/components/navBar/navBar";
export const MianLayout = defineComponent({
    setup(props, context: any) {
        return () => (
            <div class={S.mianWrapper}>
                <NavBar>
                    {{
                        icon: context.slots.icon?.(),
                        title: context.slots.title?.()
                    }}
                </NavBar>
                <div class={S.mainBody}>{context?.slots?.main()}</div>
            </div>
        );
    }
});
