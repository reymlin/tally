import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import returnImg from "@/assets/imgs/return.png";
import { useRouter } from "vue-router";
export const CreateNote = defineComponent({
    setup(props, context) {
        const router = useRouter();

        const tabs = [{ name: "支出" }, { name: "收入" }];

        const selectedValue = ref("支出");

        const onBack = () => {
            router.push("/start");
        };

        const changeSelectedValue = (value: string) => {
            selectedValue.value = value;
        };
        return () => (
            <>
                <MianLayout v-model:selectedValue={selectedValue.value} v-model:changeSelectedValue={changeSelectedValue} v-model:tabs={tabs}>
                    {{
                        leftImg: () => <img src={returnImg} onClick={onBack} />,
                        title: () => "记一笔",
                        main: () => (selectedValue.value === "支出" ? <div>支出</div> : <div>收入</div>)
                    }}
                </MianLayout>
            </>
        );
    }
});
