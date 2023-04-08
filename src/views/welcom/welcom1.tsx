import { defineComponent } from "vue";
import { MiddleContent } from "./components/middle-content";
import piggy from "@/assets/welcom-icons/piggy.svg";
export const Welcom1 = defineComponent({
    setup() {
        const param = {
            from: null,
            path: "/welcom/2",
            title1: "会挣钱",
            title2: "还会省钱",
            img: piggy
        };
        return () => (
            <div>
                <MiddleContent v-model:value={param}></MiddleContent>
            </div>
        );
    }
});
