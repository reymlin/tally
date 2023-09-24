import S from "./line.module.scss";
import { defineComponent, ref, onMounted, watch, nextTick } from "vue";
import * as echarts from "echarts";
import { getData } from "./testData";
export const LineChart = defineComponent({
    props: {
        value: {
            type: String,
            default: ""
        },
        dateType: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        const xData = ref([]);
        const yData = ref([]);
        const option = ref({});
        const getOption = () => {
            option.value = {
                xAxis: {
                    type: "category",
                    data: xData.value
                },
                grid: {
                    top: 10,
                    left: 30,
                    right: 0,
                    bottom: 30
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: yData.value,
                        type: "line"
                    }
                ]
            };
        };

        watch(
            () => [props.value, props.dateType],
            (newVal) => {
                nextTick(() => {
                    getChartData();
                });
            },
            {
                immediate: true
            }
        );

        // 获取数据
        const getChartData = async () => {
            let type = "";
            if (props.dateType === "本月") {
                type = "curMonth";
            } else if (props.dateType === "上月") {
                type = "lastMonth";
            } else if (props.dateType === "今年") {
                type = "curYear";
            }

            const { income, expend } = await getData();

            if (props.value === "支出") {
                xData.value = expend[type].labels || [];
                yData.value = expend[type].values || [];
            } else if (props.value === "收入") {
                xData.value = income[type].labels || [];
                yData.value = income[type].values || [];
            }
            getOption();
            initChart();
        };

        // 初始化echarts
        const initChart = () => {
            const myChart = echarts.init(document.getElementById("lineChar"));
            myChart.setOption(option.value);
        };

        onMounted(() => {});

        return () => (
            <>
                <div id="lineChar" class={S.charts}></div>
            </>
        );
    }
});
