import Index from "../pages/user/Index.vue";
import TeamPage from "../pages/team/TeamPage.vue";
import UserPage from "../pages/user/UserUpdatePage.vue"
import SearchPage from "../pages/user/SearchPage.vue";
import UserEditPage from "../pages/user/UserEditPage.vue"
import SearchResultPage from "../pages/user/SearchResultPage.vue"
import UserLoginPage from "../pages/user/UserLoginPage.vue"
import UserRegisterPage from "../pages/user/UserRegisterPage.vue"
import TeamCreatePage from "../pages/team/TeamCreatePage.vue";
import TeamUpdatePage from "../pages/team/TeamUpdatePage.vue";
import UserAllInfoPage from "../pages/user/UserAllInfoPage.vue";
import UserDetailPage from "../pages/user/UserDetailPage.vue";
import TeamMyJoinPage from "../pages/team/TeamMyJoinPage.vue";
import TeamMyCreatePage from "../pages/team/TeamMyCreatePage.vue";
const routes = [
    { path: '/', component: Index, title: "可能想认识"},
    { path: '/team', component: TeamPage, title: "队伍列表"},
    { path: '/user/all', component: UserAllInfoPage, title: "个人中心"},
    { path: '/user', component: UserPage, title: "我的信息"},
    { path: '/search', component: SearchPage},
    { path: '/user/edit', component: UserEditPage,title: "编辑信息"},
    { path: '/user/list', component: SearchResultPage},
    { path: '/user/login', component: UserLoginPage},
    { path: '/user/register', component: UserRegisterPage},
    { path: '/team/create', component: TeamCreatePage },
    { path: '/team/update', component: TeamUpdatePage },
    { path: '/team/detail', component: UserDetailPage },
    { path: '/team/user/create', component: TeamUpdatePage },
    { path: '/user/team/join', component: TeamMyJoinPage },
    { path: '/user/team/create', component: TeamMyCreatePage }
]

export default routes;