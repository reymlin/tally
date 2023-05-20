import { defineComponent } from "vue";
import S from "./start.module.scss";
import addImg from "@/assets/imgs/add.png";
import piggy from "@/assets/welcom-icons/piggy.svg";
import { Button } from "@/components/button/button";
import { FloatButton } from "@/components/floatButton/floatButton";
export const Start = defineComponent({
    setup() {
        const onClickBtn = () => {
            console.log("click btn");
        };
        return () => (
            <>
                <div class={S.btn_wrapper}>
                    <div class={S.piggBox}>
                        <img src={piggy} alt="" />
                    </div>
                    <router-link to="/CreateNote">
                        <Button class={S.btn} onClick={onClickBtn}>
                            开始记账
                        </Button>
                    </router-link>
                    <router-link to="/CreateNote">
                        <FloatButton class={S.floatAddIcon} path={addImg}></FloatButton>
                    </router-link>
                </div>
            </>
        );
    }
});
