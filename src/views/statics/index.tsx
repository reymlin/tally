import S from "./statics.module.scss";
import menuImg from "@/assets/imgs/menu.png";
import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import { useRouter } from "vue-router";
export const Statics = defineComponent({
    setup(props, context) {
        const router = useRouter();
        const onBack = () => {
            router.replace("/start");
        };

        const tabs = [{ name: "本月" }, { name: "上月" }, { name: "今年" }];

        const selectedValue = ref("本月");

        const changeSelectedValue = (value: string) => {
            selectedValue.value = value;
        };
        return () => (
            <>
                <MianLayout v-model:selectedValue={selectedValue.value} v-model:changeSelectedValue={changeSelectedValue} v-model:tabs={tabs}>
                    {{
                        leftImg: () => <img src={menuImg} onClick={onBack} />,
                        title: () => "山竹记账",
                        main: () => <div class={S.staticsBosy}></div>
                    }}
                </MianLayout>
            </>
        );
    }
});
