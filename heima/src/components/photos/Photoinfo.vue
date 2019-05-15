<template>
  <div class="photoinfo">
    <h3>标题是的撒多撒大萨达十大</h3>
    <p class="subtitle">
      <span>发表时间：{{ date|datefmt }}</span>
      <span>点击0次</span>
    </p>

    <!-- 缩略图 -->
    <div class="thumbnail">
      
    </div>
    <div class="content">
      在大自然的装饰点缀之下，这自然美景的颜值是非常高的，看美景的人都是会陶醉的，但是比起美丽的景色，有时候那看美景的美人是更美的！
      <br>珠缨旋转星宿摇，花蔓抖擞龙蛇动。
      <br>一枝红艳露凝香，云雨巫山枉断肠。
    </div>

    <!-- 评论子组件 -->
    <cmt-box/>
  </div>
</template>

<script>
//导入评论子组件
import comment from "../subcomponents/comment";
//导入主要数据样式
// import index from '../../public/index.js'

export default {
  name: "",
  data() {
    return {
      date: new Date(),
      list: [
        {
          img: require("../../assets/images/1.jpg"),
          w: 600,
          h: 400
        },
        {
          img: require("../../assets/images/2.jpg"),
          w: 600,
          h: 400
        },
        {
          img: require("../../assets/images/3.jpg"),
          w: 600,
          h: 400
        },
        {
          img: require("../../assets/images/4.jpg"),
          w: 600,
          h: 400
        },
        {
          img: require("../../assets/images/5.jpg"),
          w: 600,
          h: 400
        },
        {
          img: require("../../assets/images/6.jpg"),
          w: 600,
          h: 400
        }
      ]
    };
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style lang='css' scoped>
.photoinfo {
  padding: 3px;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
.photoinfo h3 {
  font-size: 16px;
  color: #26a2ff;
  text-align: center;
  line-height: 50px;
}
.subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.content {
  font-size: 13px;
}
.thumbnail{
  border: 1px solid #000;
  box-shadow: 0 0  8px #999;
}
</style>