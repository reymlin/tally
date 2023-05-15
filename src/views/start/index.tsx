import { defineComponent } from "vue";
import S from "./start.module.scss";
import addImg from "@/assets/imgs/add.png";
import menuImg from "@/assets/imgs/menu.png";
import piggy from "@/assets/welcom-icons/piggy.svg";
import { Button } from "@/components/button/button";
import { FloatButton } from "@/components/floatButton/floatButton";
import { MianLayout } from "@/components/mainLayout/mainLayout";
export const Start = defineComponent({
    setup() {
        const onClickBtn = () => {
            console.log("click btn");
        };
        return () => (
            <>
                <MianLayout>
                    {{
                        title: () => "省钱助手",
                        icon: () => <img src={menuImg} />,
                        main: () => (
                            <div class={S.btn_wrapper}>
                                <div class={S.piggBox}>
                                    <img src={piggy} alt="" />
                                </div>
                                <router-link to="/note">
                                    <Button class={S.btn} onClick={onClickBtn}>
                                        开始记账
                                    </Button>
                                </router-link>
                                <router-link to="/note">
                                    <FloatButton class={S.floatAddIcon} path={addImg}></FloatButton>
                                </router-link>
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
