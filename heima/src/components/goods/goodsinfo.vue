<template>
  <div class="goodsinfo">
    <!-- 轮播图区域 -->

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mui_ui></mui_ui>
        </div>
      </div>
    </div>

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">华为（HUAWEIMate20） 128G全网通</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <span>
            市场价：
            <del>￥2699</del>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>销售价：￥2199</span>
          <br>
          <br>
          <p>
            购买数量：
            <number @getcount="getSelectedCount"></number>
          </p>
          <el-button type="primary">立即购买</el-button>
          <el-button type="danger" @click="addToShopping">加入购物车</el-button>
        </div>
      </div>
    </div>

    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
      </div>
      <div class="mui-card-footer">
        <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import mui_ui from "../subcomponents/mui-ui";
import number from "../subcomponents/goossinif_number";

export default {
  name: "",
  data() {
    return {
      phone: [
        {
          img: require("../../assets/images/1.jpg"),
          id: 1
        },
        {
          img: require("../../assets/images/2.jpg"),
          id: 2
        },
        {
          img: require("../../assets/images/3.jpg"),
          id: 3
        },
        {
          img: require("../../assets/images/4.jpg"),
          id: 4
        }
      ],
      num1: 1,
      ballFlag: false, //控制小球隐藏和显示的
      selectedCount: 1 //默认为1
    };
  },
  components: {
    mui_ui,
    number
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    goDesc() {
      this.$router.push({ name: "goodsdesc" });
    },
    goComment() {
      this.$router.push({ name: "goodscomment" });
    },
    addToShopping() {
      //添加到购物车
      this.ballFlag = !this.ballFlag;
      // {
      //   id:1,
      //   count: this.selectedCount,
      //   price: '￥3199',
      //   selected: true
      // }
      
    },
    beforeEnter(el) {
      // 设置动画开始之前的初始位置
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      //获取小球中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //获取徽标的位置
      const badgePosition = document
        .getElementById("badgehzd")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      // 刷新动画效果
      el.offsetWidth;
      // 动画完成后的样式
      el.style.transform = "translate(160px, 366px)";
      // 动画的持续时间
      el.style.transition = "all 1s ease";
      // done 其实是 afterEnter() 的引用
      done();
    },
    afterEnter(el) {
      // 动画完成之后调用
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      //当子组件把选中的数量传递给父组件的时候，把选中的值保存到 data 上
      this.selectedCount = count;
    }
  }
};
</script>
<style lang='css' scoped>
.goodsinfo {
  background-color: #eee;
  position: relative;
}
.mui-card-header {
}
.mui-card-content-inner {
}
.mui-card-content-inner span:nth-child(1) {
}
.mui-card-content-inner span:nth-child(2) {
}
.mui-card-content-inner p {
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 349px;
  left: 78px;
  z-index: 99;
}
</style>