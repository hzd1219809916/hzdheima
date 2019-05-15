<template>
  <div class="shoppingcontainer">
    <!-- 上面 -->
    <div class="mui-card" v-for="item in phone" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="cen" >
            <mt-switch ></mt-switch>
            <img :src="item.img" alt>
            <div class="info">
              <h5>{{ item.name }}</h5>
              <span>{{item.money}}</span>
              <div class="mui-numbox">
                <!-- "-"按钮，点击可减小当前数值 -->
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" >3
                <!-- "+"按钮，点击可增大当前数值 -->
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
              </div>
              <a href="#">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 中间 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="fl">
            <p>总计多少钱</p>
            <p>已勾选商品 <span>12</span> 件，总价 <span>￥19999</span></p>
          </div>
          <div cfllass="fr">
            <mt-button  type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 下面 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>

<script>
import nvmber from "../subcomponents/goossinif_number";
export default {
  data() {
    return {
      value3: true,
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
  },
  components: {
    nvmber
  }
};
</script>
<style lang='css' scoped>
.shoppingcontainer {
  background-color: rgba(128, 124, 124, 0.048);
  overflow: hidden;
}

img {
  float: left;
  width: 80px;
  height: 60px;
  padding: 0 5px;
}
h5 {
  font-size: 13px;
  color: #000;
}
.cen {
  display: flex;
  align-items: center;
}
.mui-numbox {
  width: 115px;
  height: 30px;
}
.info{
  font-size: 12px;
}
.mui-card-content-inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fl span{
  color: red
}
</style>