import { defineComponent, ref } from "vue";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import menuImg from "@/assets/imgs/menu.png";
import { useRouter } from "vue-router";
import { TagList } from "@/components/tagList/tagList";
import { NumKeyboard } from "@/components/numKeyboard/numKeyboard";
import S from "./createNote.module.scss";

import lvxing from "@/assets/createImgs/lvxing.png";
import dache from "@/assets/createImgs/dache.png";
import canyin from "@/assets/createImgs/canyin.png";
import yule from "@/assets/createImgs/yule.png";
import fushi from "@/assets/createImgs/fushi.png";
import yiliaofuwu from "@/assets/createImgs/yiliaofuwu.png";
import zufang from "@/assets/createImgs/zufang.png";
import xuexi from "@/assets/createImgs/xuexi.png";
import qitadingdan from "@/assets/createImgs/qitadingdan.png";
import gongjiao from "@/assets/createImgs/gongjiao.png";
import ditie from "@/assets/createImgs/ditie.png";
import gongzi from "@/assets/createImgs/gongzi.png";
import jianzhi from "@/assets/createImgs/part-time-job.png";
import lijin from "@/assets/createImgs/lijin.png";
import qitashouru from "@/assets/createImgs/qitashouru.png";
import licai from "@/assets/createImgs/licai.png";

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
            { label: "飞机", value: "0", img: lvxing },
            { label: "打车", value: "1", img: dache },
            { label: "公交", value: "10", img: gongjiao },
            { label: "地铁", value: "12", img: ditie },
            { label: "餐饮", value: "2", img: canyin },
            { label: "娱乐", value: "4", img: yule },
            { label: "服饰", value: "5", img: fushi },
            { label: "医疗", value: "6", img: yiliaofuwu },
            { label: "住房", value: "7", img: zufang },
            { label: "学习", value: "8", img: xuexi },
            { label: "其他", value: "9", img: qitadingdan }
        ];

        // 收入列表
        const incomeList = [
            { label: "工资", value: "1", img: gongzi },
            { label: "兼职", value: "2", img: jianzhi },
            { label: "理财", value: "3", img: licai },
            { label: "礼金", value: "4", img: lijin },
            { label: "其他", value: "5", img: qitashouru }
        ];

        const changeSelectedValue = (value: string) => {
            selectedValue.value = value;
        };
        return () => (
            <>
                <MianLayout v-model:selectedValue={selectedValue.value} v-model:changeSelectedValue={changeSelectedValue} v-model:tabs={tabs}>
                    {{
                        leftImg: () => <img src={menuImg} />,
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
