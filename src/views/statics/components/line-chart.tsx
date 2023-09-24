import S from "./line.module.scss";
import { defineComponent, ref, onMounted } from "vue";
import * as echarts from "echarts";
export const LineChart = defineComponent({
    setup(props, context) {
        const option = {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },

            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 30
            },

            yAxis: {
                type: "value"
            },

            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: "line"
                }
            ]
        };

        // 初始化echarts
        const initChart = () => {
            const myChart = echarts.init(document.getElementById("lineChar"));
            myChart.setOption(option);
        };

        onMounted(() => {
            initChart();
        });

        return () => (
            <>
                <div id="lineChar" class={S.charts}></div>
            </>
        );
    }
});
