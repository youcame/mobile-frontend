import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import {Button, NavBar, NoticeBar, Icon, Tabbar, TabbarItem, Toast, showToast, Col, Row, emptyProps} from "vant";
import routes from "./config/route.ts";
import "vant/lib/index.css"
import { Empty } from 'vant';
import { Form, Field, CellGroup } from 'vant';

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
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
app.use(Toast)
app.use(showToast)
app.use(Col)
app.use(Row)
app.use(router)
app.use(Empty)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')
