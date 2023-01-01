import {createRouter,createWebHashHistory} from 'vue-router';

import {Login} from '../views/login/index'; 
import {Page404} from '../views/page-404/index';

const Routes = [
    { path: '/login', component: Login },
    { path: '/404', component: Page404 },
]

export const Router = createRouter({
    history:createWebHashHistory(),
    routes:Routes
})