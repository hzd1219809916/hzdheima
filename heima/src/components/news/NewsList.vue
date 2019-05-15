<template>

  <div class="newlist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newinfo/'" v-for="(item,number) in listCen" :key="number">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
            {{ item.text }}
            <p class="mui-ellipsis">
              <span>
                发表时间：{{ date | datefmt }}
              </span>
              <span>点击{{ item.number }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

// import {Tost} from "mint-ui"
export default {
  name: "newlist",
  data() {
    return {
      date:new Date(),
      listCen:[
        {
          text:'今天四川又地震了',
          number:'1',
          img: require('../../assets/images/1.jpg')
        },
        {
          text:'对方是否第三方士大夫',
          number:'3',
          img: require('../../assets/images/2.jpg')
        },
        {
          text:'大的萨达是第三方大哥',
          number:'5',
          img: require('../../assets/images/3.jpg')
        },
        {
          text:'是大大撒大奥多所大',
          number:'7',
          img: require('../../assets/images/4.jpg')
        },
        {
          text:'对方是否第三方士大夫',
          number:'3',
          img: require('../../assets/images/5.jpg')
        },
        {
          text:'大的萨达是第三方大哥',
          number:'5',
          img: require('../../assets/images/6.jpg')
        },
        {
          text:'是大大撒大奥多所大',
          number:'7',
          img: require('../../assets/images/7.jpg')
        },{
          text:'今天四川又地震了',
          number:'1',
          img: require('../../assets/images/8.jpg')
        },
        {
          text:'今天四川又地震了',
          number:'1',
          img: require('../../assets/images/1.jpg')
        },
        {
          text:'对方是否第三方士大夫',
          number:'3',
          img: require('../../assets/images/2.jpg')
        },
        {
          text:'大的萨达是第三方大哥',
          number:'5',
          img: require('../../assets/images/3.jpg')
        },
        {
          text:'是大大撒大奥多所大',
          number:'7',
          img: require('../../assets/images/4.jpg')
        },
        {
          text:'对方是否第三方士大夫',
          number:'3',
          img: require('../../assets/images/5.jpg')
        },
        {
          text:'大的萨达是第三方大哥',
          number:'5',
          img: require('../../assets/images/6.jpg')
        },
        {
          text:'是大大撒大奥多所大',
          number:'7',
          img: require('../../assets/images/7.jpg')
        },{
          text:'今天四川又地震了',
          number:'1',
          img: require('../../assets/images/8.jpg')
        }
      ]
    };
  }
};
</script>
<style lang='css' scoped>
.mui-media-body {
  font-size: 15px;
}
.mui-ellipsis {
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>
