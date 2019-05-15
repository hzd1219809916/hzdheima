<template>
  <div>
    <!-- 谁使用谁调用 -->
    <el-carousel :interval="2000" type="card" height="150px">
      <el-carousel-item v-for="item in lunbotu" :key="item.img">
        <img :src="item.img" alt>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      lunbotu: [
        {
          img: require("../../assets/images/1.jpg")
        },
        {
          img: require("../../assets/images/2.jpg")
        },
        {
          img: require("../../assets/images/3.jpg")
        },
        {
          img: require("../../assets/images/4.jpg")
        }
      ]
    };
  }
};
</script>
<style lang='css' scoped>
.el-carousel__item h3 {
  color: red;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: green;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 150px;
}
</style>