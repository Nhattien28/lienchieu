import ChangePassword from "@/components/account/ChangePassword.vue"
import PersonalInfo from "@/components/account/PersonalInfo.vue"
import Contact from "@/layouts/Contact.vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import Map from "@/layouts/Map.vue"
import Place from "@/layouts/Place.vue"
import Account from "@/pages/Account.vue"
import Home from "@/pages/Home.vue"
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
import Admin from "@/view/Admin.vue"
import Article from "@/view/Article.vue"

export const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/map", name: "map", component: Map },
      { path: "/place", name: "place", component: Place },
      { path: "/contact", name: "contact", component: Contact },
      { path: "/account", name: "account", component: Account },
      { path: "/account/info", name: "infoaccount", component: PersonalInfo },
      { path: "/account/changepassword", name: "changepassword", component: ChangePassword },
      { path: "/login", name: "login", component: Login },
      { path: "/register", name: "register", component: Register },
      {
        path: '/article/:article', // Đường dẫn với tham số dynamic
        name: 'Article',
        component: Article
      },


    ],
  },
  { path: "/admin", name: "admin", component: Admin },
  // { path: "/register", name: "register", component: Register },
]
