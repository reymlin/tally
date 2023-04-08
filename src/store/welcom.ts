import { defineStore } from "pinia";

export const WelcomStore = defineStore({
    id: "Welcom",

    state: () => {
        return {
            // 用户在欢迎页面滑动方向（向左/向右）
            slide_direc: ""
        };
    },

    actions: {}
});
