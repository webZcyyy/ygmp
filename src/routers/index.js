import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import Vuex from 'vuex'

import HomeComponet from '../components/homeComponent/homeComponent.vue'
import pageNotFoundComponent from '../components/pageNotFoundComponent/pageNotFoundComponent.vue'
// import rem from '../getRem/getRem'
Vue.use(Vuex);
Vue.use(Mint);
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/',
            name:'home',
            component: HomeComponet
        },
        {
            path:'*',
            name:'pageNotFound',
            component: pageNotFoundComponent
        }
    ]
})

export default router;