import { defineComponent } from "vue";
import S from "./start.module.scss";
import addImg from "@/assets/imgs/add.png";
import menuImg from "@/assets/imgs/menu.png";
import piggy from "@/assets/welcom-icons/piggy.svg";
import { Button } from "@/components/button/button";
import { NavBar } from "@/components/navBar/navBar";
import { FloatButton } from "@/components/floatButton/floatButton";
import { MianLayout } from "@/components/mainLayout/mainLayout";
export const Note = defineComponent({
    setup() {
        return () => (
            <>
                <MianLayout>
                    {{
                        default: () => "记一笔",
                        icon: () => <img src={menuImg} />,
                        main: () => <div>记一笔body</div>
                    }}
                </MianLayout>
            </>
        );
    }
});
