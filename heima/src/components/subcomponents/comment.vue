<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea name id cols="20" rows="5" maxlength="120" placeholder="请输入要BB的内容（最多20个字）"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-tit">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{date | datefmt }}</div>
        <div class="cmt-body">多幸运在这没分幸运，云见你不就是大手大脚阿克苏大家啊可视对讲阿克苏的撒打算考几分</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-tit">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{date | datefmt }}</div>
        <div class="cmt-body">多幸运在这没分幸运，云见你不就是大手大脚阿克苏大家啊可视对讲阿克苏的撒打算考几分</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      date: new Date()
    };
  }
};
</script>
<style lang='css' scoped>
.comment h3 {
  font-size: 18px;
}
hr {
  margin-bottom: 2px;
}
textarea {
  margin: 0;
}
.cmt-list {
  margin: 10px 0;
}
.cmt-item {
  background-color: #ccc;
}
.cmt-tit {
  font-size: 13px;
  line-height: 30px;
}
.cmt-body {
  line-height: 30px;
  font-size: 13px;
  background-color: #fff;
  text-indent: 2em;
}
button {
  height: 40%;
}
</style>