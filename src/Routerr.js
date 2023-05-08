import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/homeTag"
import Login from "@/login-register/loginTag"
import Register from "@/login-register/registerTag"
import Sepetim from "@/components/sepeteEkle"
import viewTag from "@/viewsPage/viewTag"
import store from "./store";

const routes = [
    {
        name: "homePage",
        path: '/',
        component: Home 
    },
    {
        name: "loginPage",
        path: '/login',
        component: Login 
    },
    {
        name: "registerPage",
        path: '/register',
        component: Register 
    },
    {
        name: "sepetPage",
        path: "/sepetim",
        component: Sepetim
    },
    {
        name: 'viewPage',
        path: '/view/:userId',
        component: viewTag
    }
   
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})
router.beforeEach((to,from,next) => {
    console.log("to =>", to),
    console.log("from =>", from)
    const _isAuthenticated = store.getters._isAuthenticated
    console.log(_isAuthenticated)
    const _homePage = (['homePage'])
    const _loginPage = (['loginPage'])
    const _registerPage = (['registerPage'])

    if(_loginPage.indexOf(to.name) > -1){
        if(_isAuthenticated) next(false)
    }
    if(_registerPage.indexOf(to.name) > -1){
        if(_isAuthenticated) next(false)
    }

    if(_homePage.indexOf(to.name) > -1){
        if(_isAuthenticated) next()
        else next({name: 'loginPage'})
    }else{
        next()
    }
})

export default router;