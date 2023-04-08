import { defineComponent } from "vue";
import { MiddleContent } from "./components/middle-content";
import cloud from "@/assets/welcom-icons/cloud.svg";
export const Welcom4 = defineComponent({
    setup() {
        const param = {
            from: "/welcom/3",
            path: "/start",
            title1: "云备份",
            title2: "再也不怕数据丢失",
            img: cloud
        };
        return () => (
            <div>
                <MiddleContent v-model:value={param}></MiddleContent>
            </div>
        );
    }
});
