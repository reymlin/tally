import S from "./bill.module.scss";
import { List } from "./components/list";
import returnImg from "@/assets/imgs/return.png";
import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";

export const Bill = defineComponent({
    setup() {
        const onBack = () => {
            // router.replace("/CreateNote");
        };

        const tabs = [{ name: "本月" }, { name: "上月" }, { name: "今年" }, { name: "自定义时间" }];

        const selectedValue = ref("本月");

        const changeSelectedValue = (value: string) => {
            selectedValue.value = value;
        };
        return () => (
            <>
                <MianLayout v-model:selectedValue={selectedValue.value} v-model:changeSelectedValue={changeSelectedValue} v-model:tabs={tabs}>
                    {{
                        leftImg: () => <img src={returnImg} onClick={onBack} />,
                        title: () => "山竹记账",
                        main: () => (
                            <div class={S.billPageBody}>
                                {" "}
                                <List></List>
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
