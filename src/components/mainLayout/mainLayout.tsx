import { defineComponent } from "vue";
import S from "./mainLayout.module.scss";
import { NavBar } from "@/components/navBar/navBar";
export const MianLayout = defineComponent({
    setup(props, context: any) {
        return () => (
            <div class={S.mianWrapper}>
                <NavBar>
                    {{
                        default: context.slots.title?.(),
                        icon: context.slots.icon?.()
                    }}
                </NavBar>
                <div class={S.mainBody}>{context?.slots?.main()}</div>
            </div>
        );
    }
});
