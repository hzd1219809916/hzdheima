<template>
  <div class="number">
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min.js'
export default {
  name: "",
  data() {
    return {};
  },
  mounted(){
    mui(".mui-numbox").numbox()
  },
  methods:{
    countChanged(){
      //每当文本框的数据改变的时候，立即把最新的数据通过调用发送
      // console.log(this.$refs.numbox.value);
      this.$emit("getcount",parseInt(this.$refs.numbox.value));
    }
  }
};
</script>
<style lang='css' scoped>
</style>