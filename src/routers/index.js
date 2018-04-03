import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import Vuex from 'vuex'

import HomeComponet from '../components/homeComponent/homeComponent.vue'
import pageNotFoundComponent from '../components/pageNotFoundComponent/pageNotFoundComponent.vue'
// import rem from '../getRem/getRem'
import GoodsComponent from '../components/goods/goodsComponent.vue'
import ShowComponent from '../components/show/showComponent.vue'
import PerSonComponent from '../components/person/personComponent.vue'
import GdsTranslateComponent from '../components/goodsTranslate/gdsTransComponent.vue'


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
            path: '/goods',
            name: 'goods',
            component: GoodsComponent
        },
        {
            path: '/show',
            name: 'show',
            component: ShowComponent
        },
        {
            path: '/person',
            name: 'person',
            component: PerSonComponent
        },
        {
            path: '/gdstran',
            name:'gdstranslate',
            component: GdsTranslateComponent
        },
        {
            path:'*',
            name:'pageNotFound',
            component: pageNotFoundComponent
        }
    ]
})

export default router;