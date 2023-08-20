import { defineComponent, ref, watchEffect } from "vue";
import S from "./numKeyboard.module.scss";
import rili from "@/assets/createImgs/rili.png";
import dayjs from "dayjs";

export const NumKeyboard = defineComponent({
    setup(props, context: any) {
        const inputClick = (value: number | string) => {
            inputValue.value += value;
        };

        const buttons = [
            {
                label: "1",
                value: "1",
                onclick: () => inputClick(1)
            },
            {
                label: "2",
                value: "2",
                onclick: () => inputClick(2)
            },
            {
                label: "3",
                value: "3",
                onclick: () => inputClick(3)
            },
            {
                label: "4",
                value: "4",
                onclick: () => inputClick(4)
            },
            {
                label: "5",
                value: "5",
                onclick: () => inputClick(5)
            },
            {
                label: "6",
                value: "6",
                onclick: () => inputClick(6)
            },
            {
                label: "7",
                value: "7",
                onclick: () => inputClick(7)
            },
            {
                label: "8",
                value: "8",
                onclick: () => inputClick(8)
            },
            {
                label: "9",
                value: "9",
                onclick: () => inputClick(9)
            }
        ];

        const inputValue = ref("");

        const curDay = dayjs().format("YYYY-MM-DD");

        const onClear = () => {
            inputValue.value = "";
        };

        const onSubmit = () => {
            onClear();
        };

        // 格式化用户输入的值
        const formatInputValue = () => {
            if (inputValue.value === ".") {
                inputValue.value = "";
            }
            // 判断是否出现多个小数点，如果出现，则替换为空字符
            let strs = inputValue.value.split(".");
            if (strs.length > 2) {
                inputValue.value = strs[0] + "." + strs[1];
            }
            // 判断是否出现多个0，如果出现，则替换为一个0
            if (inputValue.value.length > 1 && inputValue.value[0] === "0" && inputValue.value[1] !== ".") {
                inputValue.value = inputValue.value[0];
            }
        };

        watchEffect(() => {
            formatInputValue();
        });

        return () => (
            <div class={S.numKeyboard}>
                <div class={S.BoardTop}>
                    <section>
                        <img src={rili} alt="" />
                        <span class={S.curday}>{curDay}</span>
                    </section>
                    <section>
                        <input type="text" v-model={inputValue.value} disabled />
                    </section>
                </div>
                <div class={S.digitWrapper}>
                    <div class={S.numberBox}>
                        {buttons.map((item) => {
                            return <button onClick={item.onclick}>{item.label}</button>;
                        })}
                        <div class={S.digitFooter}>
                            <button onClick={() => inputClick(0)}>0</button>
                            <button onClick={() => inputClick(".")}>.</button>
                        </div>
                    </div>
                    <div class={S.rightBox}>
                        <button onClick={onClear}>清空</button>
                        <button onClick={onSubmit}>提交</button>
                    </div>
                </div>
            </div>
        );
    }
});
