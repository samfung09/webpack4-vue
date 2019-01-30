import Vue from 'vue';
import router from './router';
import App from './App';

new Vue({
    el: '#app',
    router,
    // render(createElement){
    //     return createElement(App)
    // }
    components: {
        App
    },
    template: '<App/>'
})