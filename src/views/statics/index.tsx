import S from "./statics.module.scss";
import menuImg from "@/assets/imgs/menu.png";
import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import { useRouter } from "vue-router";
import { LineChart } from "./components/line-chart";
import { PieChart } from "./components/pie-charts";
export const Statics = defineComponent({
    setup(props, context) {
        const router = useRouter();

        const tabs = [{ name: "本月" }, { name: "上月" }, { name: "今年" }];

        const selectedValue = ref("本月");

        const changeSelectedValue = (value: string) => {
            selectedValue.value = value;
        };

        const selectType = ref("支出");

        const changeType = (type: string) => {
            selectType.value = type;
        };
        return () => (
            <>
                <MianLayout v-model:selectedValue={selectedValue.value} v-model:changeSelectedValue={changeSelectedValue} v-model:tabs={tabs}>
                    {{
                        leftImg: () => <img src={menuImg} />,
                        title: () => "山竹记账",
                        main: () => (
                            <div class={S.staticsBosy}>
                                <div class={S.typeSelect}>
                                    <label>类型</label>
                                    <section>
                                        <p onClick={() => changeType("支出")} class={selectType.value === "支出" ? S.selectP : ""}>
                                            支出
                                        </p>
                                        <p onClick={() => changeType("收入")} class={selectType.value === "收入" ? S.selectP : ""}>
                                            收入
                                        </p>
                                    </section>
                                </div>

                                <LineChart v-model:value={selectType.value} v-model:dateType={selectedValue.value} />
                                <PieChart v-model:value={selectType.value} v-model:dateType={selectedValue.value} />
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
