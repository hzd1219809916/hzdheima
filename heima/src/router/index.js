import Vue from 'vue'
import Router from 'vue-router'
//导入Tabbar的路由

import homeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopContainer from '../components/tabbar/ShopContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import Newsinfo from '../components/news/Newsinfo.vue'
import photolist from '../components/photos/PhotoList.vue'
import photoinfo from '../components/photos/Photoinfo.vue'
import Goodsshopping from '../components/goods/Goodsshop.vue'
import Goodsinfo from '../components/goods/goodsinfo.vue'
import goodsdesc from '../components/goods/goodsdesc.vue'
import goodscomment from '../components/goods/goodscomment.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: "/home", component: homeContainer
    },
    {
      path: '/home', component: homeContainer
    },
    {
      path: '/member', component: MemberContainer
    },
    {
      path: '/search', component: SearchContainer
    },
    {
      path: '/shopcar', component: ShopContainer
    },
    {
      path: '/home/newslist', component: NewsList
    },
    {
      path: '/home/newinfo/', component: Newsinfo
    },
    {
      path: '/home/photolist', component: photolist
    },
    {
      path: '/home/photoinfo/', component: photoinfo
    },
    {
      path: '/home/goods/', component: Goodsshopping
    },
    {
      path: '/home/goodsinfo/:id', component: Goodsinfo
    },
    {
      path:'/home/goodsdesc',
      component:goodsdesc,
      name:'goodsdesc'
    },
    {
      path:'/home/goodscomment',
      component:goodscomment,
      name:'goodscomment'
    }
  ],
  linkActiveClass: 'mui-active',
})
