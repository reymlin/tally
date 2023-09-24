import S from "./line.module.scss";
import { defineComponent, ref, onMounted, watch, nextTick } from "vue";
import * as echarts from "echarts";
import { getData } from "./testData";
export const PieChart = defineComponent({
    props: {
        dateType: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        const chartData = ref([]);
        const option = ref({});
        const getOption = () => {
            option.value = {
                title: {
                    text: "",
                    subtext: "",
                    left: "center"
                },
                tooltip: {
                    trigger: "item"
                },
                grid: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                legend: {
                    show: false
                },
                series: [
                    {
                        name: "",
                        type: "pie",
                        radius: "90%",
                        data: chartData.value,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            };
        };

        // 初始化echarts
        const initChart = () => {
            const myChart = echarts.init(document.getElementById("pieChar"));
            myChart.setOption(option.value);
        };

        // 获取数据
        const getChartData = async () => {
            const { curPieData, lastPieData, curYearData } = await getData();
            if (props.dateType === "本月") {
                chartData.value = curPieData;
            } else if (props.dateType === "上月") {
                chartData.value = lastPieData;
            } else if (props.dateType === "今年") {
                chartData.value = curYearData;
            }

            getOption();
            initChart();
        };

        watch(
            () => props.dateType,
            (newVal) => {
                nextTick(() => {
                    getChartData();
                });
            },
            {
                immediate: true
            }
        );

        return () => (
            <>
                <div id="pieChar" class={S.pieCharts}></div>
            </>
        );
    }
});
