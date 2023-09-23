import S from "./bill.module.scss";
import { List } from "./components/list";
import menuImg from "@/assets/imgs/menu.png";
import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import { useRouter } from "vue-router";
export const Bill = defineComponent({
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
                        main: () => (
                            <div class={S.billPageBody}>
                                {" "}
                                <List v-model:selectedValue={selectedValue.value}></List>
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
