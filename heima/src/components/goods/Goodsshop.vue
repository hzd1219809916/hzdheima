<template>
  <div class="goodsshopping">
    <router-link
      tag="div"
      class="good-list"
      :to="'/home/goodsinfo/' + item.id"
      v-for="(item,index) in phone"
      :key="index"
    >
      <div class="good-item">
        <div class="good-img">
          <img :src="item.img" alt>
        </div>
        <div class="good-info">{{item.name }}</div>
      </div>
      <div class="good-txt">
        <div class="good-money">
          <span>{{ item.money }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <del>{{ item.cost }}</del>
          </span>
        </div>
        <div class="good-words">
          <span>热卖中</span>
          <span>剩{{ item.brleft }}</span>
        </div>
      </div>
    </router-link>
    <mt-button type="danger" size="large">加载更多</mt-button>

    <!--
      1.在网页中，有两种方式进行跳转
      方式一：使用a标签形式
      方式二：使用window.location.href 的形式进行跳转，叫做编程式导航    
    -->
    <!-- 
    <div class="good-list" v-for="item in phone" :key="item.id" @click="goDetail(item.id)">
      <div class="good-item">
        <div class="good-img">
          <img :src="item.img" alt>
        </div>
        <div class="good-info">{{item.name }}</div>
      </div>
      <div class="good-txt">
        <div class="good-money">
          <span>{{ item.money }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <del>{{ item.cost }}</del>
          </span>
        </div>
        <div class="good-words">
          <span>热卖中</span>
          <span>剩{{ item.brleft }}</span>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>-->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      phone: [
        {
          img: require("../../assets/images/1.jpg"),
          name: "华为（HUAWEIMate20） 128G全网通",
          money: "￥3989",
          cost: "4099",
          brleft: "55",
          id: 1
        },
        {
          img: require("../../assets/images/2.jpg"),
          name: "小米9 新品三摄 6GB+128GB 全网通",
          money: "￥2999",
          cost: "3199",
          brleft: "999+",
          id: 2
        },
        {
          img: require("../../assets/images/3.jpg"),
          name: "OPPO Reno 全面拍照手机 8GB+256GB 全网通",
          money: "￥3599",
          cost: "￥3899",
          brleft: "999+",
          id: 3
        },
        {
          img: require("../../assets/images/4.jpg"),
          name: "三星 Galaxy S10 6GB+128GB 3D超声波指纹",
          money: "￥6999",
          cost: "￥7199",
          brleft: "999+",
          id: 4
        },
        {
          img: require("../../assets/images/5.jpg"),
          name: "一加手机6T 8GB+128GB 全面双摄游戏性价手机",
          money: "￥3169",
          cost: "￥3299",
          brleft: "555+",
          id: 5
        },
        {
          img: require("../../assets/images/6.jpg"),
          name: "魅族 Note8 全屏手机 4GB+8GB 全网通4G手机",
          money: "￥899",
          cost: "￥999",
          brleft: "999+",
          id: 6
        },
        {
          img: require("../../assets/images/7.jpg"),
          name: "诺基亚 NOKIA X6 6GB+64GB电信手机",
          money: "￥2999",
          cost: "3199",
          brleft: "999+",
          id: 7
        },
        {
          img: require("../../assets/images/8.jpg"),
          name: "小米9 新品三摄 6GB+128GB 全网通",
          money: "￥2999",
          cost: "3199",
          brleft: "999+",
          id: 8
        },
        {
          img: require("../../assets/images/9.jpg"),
          name: "OPPO Reno 全面拍照手机 8GB+256GB 全网通",
          money: "￥3599",
          cost: "￥3899",
          brleft: "999+",
          id: 9
        },
        {
          img: require("../../assets/images/10.jpg"),
          name: "三星 Galaxy S10128GB 3D超声波指纹",
          money: "￥6999",
          cost: "￥7199",
          brleft: "999+",
          id: 10
        },
        {
          img: require("../../assets/images/11.jpg"),
          name: "一加手机6T 8GB+128GB 全面双摄游戏性价手机",
          money: "￥3169",
          cost: "￥3299",
          brleft: "555+",
          id: 11
        },
        {
          img: require("../../assets/images/12.jpg"),
          name:
            "魅族 Note8 全屏手机 4GB+8GB 全网通4G手机萨达萨达所大所大所大所大所大多",
          money: "￥899",
          cost: "￥999",
          brleft: "999+",
          id: 12
        },
        {
          img: require("../../assets/images/1.jpg"),
          name: "诺基亚 NOKIA X6 6GB+64GB电信手机",
          money: "￥2999",
          cost: "3199",
          brleft: "999+",
          id: 13
        }
      ]
    };
  }
  // methods: {
  //   goDetail(id) {
  //     //使用js代码进行跳转

  //     //注意：区分this.$route 和 this.$router
  //     //其中 this.$route是参数对象，是所有路由的参数
  //     //其中 this.$router 事宜路由导航对象 实现路由的前进路由

  //     console.log(this);
  //     // 1.最简单的
  //     // this.$router.push("/home/goodsinfo/ " + id);
  //     //2.传递对象
  //     this.$router.push({ path: "/home/goodsinfo" + id })

  //     // 3.命名的路由
  //     // this.$router.push({ name: "goodsinfo", params: { id }})
  //     // this.$router.push({ name: "goodinfo", params: { id } });
  //   }
  // }
};
</script>
<style lang='css' scoped>
.goodsshopping {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 6px;
  justify-content: space-between;
}
.good-list {
  box-shadow: 0 0 6px #999;
  width: 49%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  /* c3布局 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 242px;
}
/* good-item */
.good-item {
  background-color: #fff;
}
.good-img {
  margin-bottom: 5px;
}
.good-img img {
  width: 100%;
  vertical-align: middle;
}
.good-info {
  font-size: 15px;
  color: #000;
  padding: 2px;
}
/* good-txt */
.good-txt {
  background-color: #ccc;
  opacity: 0.8;
  color: #666;
  padding: 15px 10px;
}
.good-money {
  margin-bottom: 10px;
}
.good-money span:nth-child(1) {
  color: red;
}
.good-money span:nth-child(2) {
  font-size: 14px;
}
.good-words {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
</style>