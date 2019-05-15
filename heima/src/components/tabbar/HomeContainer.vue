<template>
  <div class="home">
    <!-- 轮播图 -->
    <muiui></muiui>
    <!-- 中间图片 -->
    <ul>
      <li>
        <div class="cen">
          <router-link to="/home/newslist">
            <img src="../../assets/images/5.jpg" alt>
          </router-link>
          <p style="color:black;">新闻资讯</p>
        </div>
      </li>
      <li>
        <div class="cen">
          <router-link to="/home/photolist">
            <img src="../../assets/images/6.jpg" alt>
          </router-link>
          <p style="color:black;">图片分享</p>
        </div>
      </li>
      <li>
        <div class="cen">
          <router-link to="/home/goods/">
            <img src="../../assets/images/7.jpg" alt>
          </router-link>
          <p style="color:black;">商品列表</p>
        </div>
      </li>
      <li>
        <div class="cen">
          <img src="../../assets/images/8.jpg" alt>
          <p style="color:black;">新闻资讯</p>
        </div>
      </li>
      <li>
        <div class="cen">
          <img src="../../assets/images/9.jpg" alt>
          <p style="color:black;">新闻资讯</p>
        </div>
      </li>
      <li>
        <div class="cen">
          <img src="../../assets/images/10.jpg" alt>
          <p style="color:black;">新闻资讯</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import muiui from "../subcomponents/mui-ui";
export default {
  data() {
    return {
      
    };
  },
  components: {
    muiui
  }
};
</script>
<style lang='css' scoped>
img {
  width: 100%;
  height: 150px;
}
ul {
  list-style-type: none;
  font-size: 16px;
  color: purple;
}
li {
  float: left;
  width: 33.3%;
  height: 100px;
  text-align: center;
}
.cen {
  width: 80%;
  margin: 10px auto;
}
.cen img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
ul li .ceb p {
  width: 100%;
  height: 70px;
  font-size: 16px;
}
</style>