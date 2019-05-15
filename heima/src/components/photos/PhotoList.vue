<template>
  <div class="photolist">
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <ul class="photo">
      <!-- <img v-lazy="'../../assets/images/1.jpg'"> -->
      <li>
        <router-link to="/home/photoinfo/">
          <img src="../../assets/images/1.jpg" alt>
        <div class="info">
          <div class="info-title">现代名宿 温馨的外表 美丽的装修 是适合情侣居住</div>
          <div class="info-body">周末出去斯柯达坚实的会计师绝对是开了房贷款 刷卡机大开杀戒都快拉数据库拉</div>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import mui from "../../mui/js/mui.min.js";

export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    //当组件中的Dom结构被渲染好并放在页面中去，会执行这个钩子函数
    // 如果要操作元素最好在这个里面
    mui("#sliderSegmentedControl").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang='css' spoced>
.mint-header {
  z-index: 99;
}
* {
  touch-action: pan-y;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img {
  width: 100%;
  vertical-align: middle;
}
.photo ul {
  background-color: #ccc;
}
.photo li {
  background-color: #fff;
  padding: 5px;
  box-shadow: 0 0 10px #999;
  position: relative;
}
.info {
  background-color: #000;
  color: #fff;
  text-align: left;
  position: absolute;
  bottom: 5px;
  opacity: 0.4;
  margin-right: 5px;
}
.info .info-title {
  font-size: 14px;
}
.info .info-body {
  font-size: 12px;
}

</style>