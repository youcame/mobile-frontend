import Index from "../pages/Index.vue";
import TeamPage from "../pages/team/TeamPage.vue";
import UserPage from "../pages/UserPage.vue"
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue"
import SearchResultPage from "../pages/SearchResultPage.vue"
import UserLoginPage from "../pages/UserLoginPage.vue"
import TeamCreatePage from "../pages/team/TeamCreatePage.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage},
    { path: '/user/edit', component: UserEditPage},
    { path: '/user/list', component: SearchResultPage},
    { path: '/user/login', component: UserLoginPage},
    { path: '/team/create', component: TeamCreatePage }
]

export default routes;