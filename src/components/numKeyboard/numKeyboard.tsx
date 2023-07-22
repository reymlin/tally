import { defineComponent } from "vue";
import S from "./numKeyboard.module.scss";

export const NumKeyboard = defineComponent({
    setup(props, context: any) {
        const buttons = [
            {
                label: "1",
                value: "1",
                onclick: () => {
                    console.log(1);
                }
            },
            {
                label: "2",
                value: "2",
                onclick: () => {
                    console.log(2);
                }
            },
            {
                label: "3",
                value: "3",
                onclick: () => {
                    console.log(3);
                }
            },
            {
                label: "4",
                value: "4",
                onclick: () => {
                    console.log(4);
                }
            },
            {
                label: "5",
                value: "5",
                onclick: () => {
                    console.log(5);
                }
            },
            {
                label: "6",
                value: "6",
                onclick: () => {
                    console.log(6);
                }
            },
            {
                label: "7",
                value: "7",
                onclick: () => {
                    console.log(7);
                }
            },
            {
                label: "8",
                value: "8",
                onclick: () => {
                    console.log(8);
                }
            },
            {
                label: "9",
                value: "9",
                onclick: () => {
                    console.log(9);
                }
            }
        ];
        return () => (
            <div class={S.numKeyboard}>
                <div class={S.BoardTop}>
                    <section>
                        <span>2023-07-22</span>
                        <input type="text" />
                    </section>
                    <section>
                        <span>123456789</span>
                    </section>
                </div>
                <div class={S.digitWrapper}>
                    <div class={S.numberBox}>
                        {buttons.map((item) => {
                            return <button onClick={item.onclick}>{item.label}</button>;
                        })}
                        <div class={S.digitFooter}>
                            <button>0</button>
                            <button>.</button>
                        </div>
                    </div>
                    <div class={S.rightBox}>
                        <button>清空</button>
                        <button>提交</button>
                    </div>
                </div>
            </div>
        );
    }
});
