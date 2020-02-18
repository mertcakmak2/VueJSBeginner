import Vue from 'vue';
import Router from 'vue-router';
import Dersler from './components/Dersler'
import Hocalar from './components/Hocalar'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:Dersler,
            name:'dersler'
        },
        {
            path:'/hocalar/:isim',
            component:Hocalar,
            name:'hocalar'
        }
    ]
})