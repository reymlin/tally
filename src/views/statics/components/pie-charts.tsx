import S from "./line.module.scss";
import { defineComponent, ref, onMounted } from "vue";
import * as echarts from "echarts";
export const PieChart = defineComponent({
    setup(props, context) {
        const option = {
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
                    name: "Access From",
                    type: "pie",
                    radius: "90%",
                    data: [
                        { value: 1048, name: "Search Engine" },
                        { value: 735, name: "Direct" },
                        { value: 580, name: "Email" },
                        { value: 484, name: "Union Ads" },
                        { value: 300, name: "Video Ads" }
                    ],
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

        // 初始化echarts
        const initChart = () => {
            const myChart = echarts.init(document.getElementById("pieChar"));
            myChart.setOption(option);
        };

        onMounted(() => {
            initChart();
        });

        return () => (
            <>
                <div id="pieChar" class={S.pieCharts}></div>
            </>
        );
    }
});
