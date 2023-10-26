import Index from "../pages/user/Index.vue";
import TeamPage from "../pages/team/TeamPage.vue";
import UserPage from "../pages/user/UserPage.vue"
import SearchPage from "../pages/user/SearchPage.vue";
import UserEditPage from "../pages/user/UserEditPage.vue"
import SearchResultPage from "../pages/user/SearchResultPage.vue"
import UserLoginPage from "../pages/user/UserLoginPage.vue"
import TeamCreatePage from "../pages/team/TeamCreatePage.vue";
import TeamUpdatePage from "../pages/team/TeamUpdatePage.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage},
    { path: '/user/edit', component: UserEditPage},
    { path: '/user/list', component: SearchResultPage},
    { path: '/user/login', component: UserLoginPage},
    { path: '/team/create', component: TeamCreatePage },
    { path: '/team/update', component: TeamUpdatePage }
]

export default routes;