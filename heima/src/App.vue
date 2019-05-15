<template>
  <div class="app">
    <!-- 	头部 -->
    <div class="top">
      <mt-header fixed title="黑马程序员Vue项目">
        <span slot="left" @click="goBack" v-show="flag">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>

    <!-- 中间内容 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-hzd" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-hzd" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-hzd" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badgehzd">12</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-hzd" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script src="mui/js/mui.min.js"></script>
<script>

export default {
   data() {
    return {
      flag : true
    };
  },
  methods: {
    goBack() {
      //点击后退
      this.$router.go(-1);
    }
  },
  created(){
    this.flag = this.$route.path === '/home' ? false : true
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style lang="css">
@import url("./mui/css/mui.min.css");
@import url("./mui/css/icons-extra.css");
* {
  margin: 0;
  padding: 0;
}
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 50px;
}

/* 改样式，解决tabbar切换不了的问题 */
.mui-bar-tab .mui-tab-item-hzd {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-hzd .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-hzd .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.top {
  padding-top: 40px;
}
</style>
