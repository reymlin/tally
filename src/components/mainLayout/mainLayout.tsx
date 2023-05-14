import { defineComponent } from "vue";
import S from "./mainLayout.module.scss";
import { NavBar } from "@/components/navBar/navBar";
export const MianLayout = defineComponent({
    setup(props, context: any) {
        return () => (
            <>
                <NavBar>
                    {{
                        default: context.slots.title?.(),
                        icon: context.slots.icon?.()
                    }}
                </NavBar>
                {context?.slots?.main()}
            </>
        );
    }
});
