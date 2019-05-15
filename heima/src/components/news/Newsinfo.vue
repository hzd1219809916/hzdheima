<template>
  <div class="newsinfo">
   <h3 class="title">杨幂和刘恺威的离婚事件，之后的财产分割情况</h3>
   <p>
     <span>发表时间：{{ date|datefmt }}</span>
     <span>点击次数：0次</span>
   </p>
   <hr>
   <!-- 内容区域 -->
   <div class="content">
     大萨达那棵树的那是看技能大健康是你的骄傲开始你的卡少女的骄傲时可能大家看大家可是你登记卡上你的卡少女的看到
   </div>

   <h3 class="title">杨幂和刘恺威的离婚事件，之后的财产分割情况</h3>
   <p>
     <span>发表时间：{{ date|datefmt }}</span>
     <span>点击次数：0次</span>
   </p>
   <hr>
   <!-- 内容区域 -->
   <div class="content">
     大萨达那棵树的那是看技能大健康是你的骄傲开始你的卡少女的骄傲时可能大家看大家可是你登记卡上你的卡少女的看到
   </div>

   <!-- 评论子组件 -->
   <comment-box></comment-box>
  </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment'
  export default {
    name:'',
    data () {
      return {
        date:new Date()
      }
    },
    components:{//用来注册子组件的节点
      'comment-box':comment
    }
  }
</script>
<style lang='css' scoped>
.newsinfo{
  padding: 0 4px;
}
.title{
  font-size: 16px;
  text-align: center;
  margin: 15px 0px;
  color:red
}
p{
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.content{
  padding: 0 4px;
  font-size: 14px;
  color: #666;
}
</style>