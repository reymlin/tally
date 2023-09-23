import { defineComponent, ref, watch } from "vue";
import S from "./list.module.scss";
import { getBillData } from "../testData.js";
import Icon2 from "@/assets/imgs/icon2.png";
export const List = defineComponent({
    props: {
        selectedValue: {
            type: String,
            default: "",
            required: false
        }
    },
    setup(props, context) {
        // 收入
        const inCome = ref<number>(0);
        // 支出
        const expend = ref<number>(0);
        // 净收入
        const netIncome = ref<number>(0);
        // 支出列表
        const expendList = ref<any[]>([]);

        // 根据tab切换数据
        const changeData = async (value: string) => {
            const { data } = await getBillData(value);
            const { income: _incomeValue, expend: _expendValue, netIncome: _netIncomValue, expendList: _expendList } = data || {};
            inCome.value = _incomeValue || 0;
            expend.value = _expendValue || 0;
            netIncome.value = _netIncomValue || 0;
            expendList.value = _expendList || [];
        };

        watch(
            () => props.selectedValue,
            (newVal) => {
                changeData(newVal);
            },
            {
                immediate: true
            }
        );
        return () => (
            <>
                <div class={S.billBoard}>
                    <p>
                        <span style={{ color: "#d26062" }}> 收入</span>
                        <span style={{ color: "#d26062" }}>{inCome.value}</span>
                    </p>
                    <p>
                        <span style={{ color: "#437c5a" }}> 支出</span>
                        <span style={{ color: "#437c5a" }}>{expend.value}</span>
                    </p>
                    <p>
                        <span style={{ color: "#dddee2" }}> 净收入</span>
                        <span style={{ color: "#dddee2" }}>{netIncome.value}</span>
                    </p>
                </div>
                <section class={S.list}>
                    {expendList.value.map((item) => {
                        return (
                            <section class={S.itemLi}>
                                <div>
                                    <p>
                                        <img src={Icon2} alt="" />
                                    </p>
                                    <p>
                                        <span>{item.name}</span>
                                        <span>{item.time}</span>
                                    </p>
                                </div>
                                <p class={S.money}>
                                    <span>￥{item.value}</span>
                                </p>
                            </section>
                        );
                    })}
                </section>
            </>
        );
    }
});
