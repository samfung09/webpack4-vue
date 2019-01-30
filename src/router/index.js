import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home';
import Login from '../components/Login';
// 安装路由
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ]
})