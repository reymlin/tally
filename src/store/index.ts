import { defineStore } from "pinia";

export const MainStore = defineStore("main", {
    state: () => {
        return {
            testInof: "Pinia可以正常使用"
        };
    },
    getters: {},
    actions: {}
});
