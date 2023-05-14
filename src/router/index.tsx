import { createRouter, createWebHashHistory } from "vue-router";

import { Login } from "../views/login/index";
import { Page404 } from "../views/page-404/index";
import { WelcomIndex } from "../views/welcom/index";
import { Welcom1 } from "../views/welcom/welcom1";
import { Welcom2 } from "../views/welcom/welcom2";
import { Welcom3 } from "../views/welcom/welcom3";
import { Welcom4 } from "../views/welcom/welcom4";
import { Start } from "../views/start/index";
import { Note } from "../views/note/index";
const Routes = [
    { path: "/login", component: Login },
    { path: "/404", component: Page404 },
    {
        path: "",
        redirect: "/welcom"
    },
    {
        path: "/welcom",
        component: WelcomIndex,
        children: [
            { path: "", redirect: "/welcom/1" },
            {
                path: "1",
                name: "/welcom1",
                component: Welcom1
            },
            {
                path: "2",
                name: "/welcom2",
                component: Welcom2
            },
            {
                path: "3",
                name: "/welcom3",
                component: Welcom3
            },
            {
                path: "4",
                name: "/welcom4",
                component: Welcom4
            }
        ]
    },
    {
        path: "/start",
        component: Start
    },
    {
        path: "/note",
        component: Note
    }
];

export const Router = createRouter({
    history: createWebHashHistory(),
    routes: Routes
});
