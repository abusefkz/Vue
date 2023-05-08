import { createApp } from "vue";
import App from "@/App.vue"
import router from "./Routerr";
import "@/assets/bootstrap.min.css"
import "@/assets/style.css"
import navbarTag from "@/navbar-leftBar/navbarTag"
import sideBarTag from "@/navbar-leftBar/sidebarTag"
import store from "./store";

const app = createApp(App);
app.component('navbarTag', navbarTag)
app.component('sideBarTag', sideBarTag)
app.use(router)
app.use(store)
app.mount('#app')