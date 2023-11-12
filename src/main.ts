import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import {Button, NavBar, NoticeBar, Icon, Tabbar, TabbarItem, showToast, Col, Row} from "vant";
import routes from "./config/route.ts";
import "vant/lib/index.css"
import { Empty } from 'vant';
import { Form, Field, CellGroup } from 'vant';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(NavBar)
app.use(Button)
app.use(NoticeBar)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
app.use(showToast)
app.use(Col)
app.use(Row)
app.use(router)
app.use(Empty)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')
