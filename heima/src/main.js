// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


// 导入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.options.root = 'http://v.juhe.cn/toutiao/index'

// 导入格式化时间的插件（npm cnpm i moment -S）
import moment from 'moment'
//定义去全局的过滤器
Vue.filter('datefmt', function (value, format) {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})

// 导入懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//安装图片预览效果
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//注册Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {// this.$state.***
    car: []//将购物车的数据用一个数组存储起来，在car数组中存储一些数组的对象，设计样子 { id:商品的id,count:购买数量,price:购买价钱,select:true,false }
  },
  mutations: {// this.$state.commit('方法的名称'，'按需传递唯一的参数')***
    addTocar() {
      //点击购物车商品信息保存到store中的car

    }
  },
  getters: {// this.$state.getters.***
    //相当于计算属性，相当于 filters
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    }
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store//挂载store状态管理
})
