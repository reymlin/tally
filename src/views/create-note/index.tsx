import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import returnImg from "@/assets/imgs/return.png";
import { useRouter } from "vue-router";
import { TagList } from "@/components/tagList/tagList";
import { NumKeyboard } from "@/components/numKeyboard/numKeyboard";
import S from "./createNote.module.scss";
export const CreateNote = defineComponent({
    setup(props, context) {
        const router = useRouter();

        const tabs = [{ name: "支出" }, { name: "收入" }];

        const selectedValue = ref("支出");

        const onBack = () => {
            router.push("/start");
        };

        // 支出列表
        const expendList = [
            { label: "交通", value: "1" },
            { label: "餐饮", value: "2" },
            { label: "购物", value: "3" },
            { label: "娱乐", value: "4" },
            { label: "服饰", value: "5" },
            { label: "医疗", value: "6" },
            { label: "住房", value: "7" },
            { label: "学习", value: "8" },
            { label: "其他", value: "9" }
        ];

        // 收入列表
        const incomeList = [
            { label: "工资", value: "1" },
            { label: "兼职", value: "2" },
            { label: "理财", value: "3" },
            { label: "礼金", value: "4" },
            { label: "其他", value: "5" }
        ];

        const changeSelectedValue = (value: string) => {
            selectedValue.value = value;
        };
        return () => (
            <>
                <MianLayout v-model:selectedValue={selectedValue.value} v-model:changeSelectedValue={changeSelectedValue} v-model:tabs={tabs}>
                    {{
                        leftImg: () => <img src={returnImg} onClick={onBack} />,
                        title: () => "记一笔",
                        main: () => (
                            <div class={S.createNoteContent}>
                                <div class={S.tagsBox}>
                                    <TagList tagType={selectedValue.value} list={selectedValue.value === "支出" ? expendList : incomeList}></TagList>
                                </div>
                                <NumKeyboard></NumKeyboard>
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
