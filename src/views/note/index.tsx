import { defineComponent, ref } from "vue";
// import S from "./start.module.scss";
import returnImg from "@/assets/imgs/return.png";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import { Tabs } from "@/components/tabs/tabs";
export const Note = defineComponent({
    setup() {
        const tabs: Array<any> = [
            { name: "支出", type: "pay" },
            { name: "收入", type: "income" }
        ];
        const selected = ref("");

        return () => (
            <>
                <MianLayout>
                    {{
                        icon: () => <img src={returnImg} />,
                        title: () => "记一笔",
                        main: () => (
                            <div>
                                <Tabs tabs={tabs} selectedValue={selected.value} selectedItemTab={(name: string) => (selected.value = name)}></Tabs>
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
