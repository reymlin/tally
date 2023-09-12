import { defineComponent, ref } from "vue";
import S from "./list.module.scss";
export const List = defineComponent({
    setup() {
        const tabs = ref<any[]>([
            { name: "收入", value: 10000, color: "#d2636b" },
            { name: "支出", value: 5056, color: "#45835c" },
            { name: "净收入", value: 4944, color: "" }
        ]);
        return () => (
            <>
                <div class={S.billBoard}>
                    {tabs.value.map((item) => {
                        return (
                            <p>
                                <span style={{ color: item.color }}>{item.name}</span>
                                <span style={{ color: item.color }}>{item.value}</span>
                            </p>
                        );
                    })}
                </div>
            </>
        );
    }
});
