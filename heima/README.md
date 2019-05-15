#添加css样式出错的时候
{
  test: /\.css$/,
  include: [
    /src/,//表示在src目录下的css需要编译
    '/node_modules/bootstrap/'   //增加此项
  ],
  loader: 'style-loader!css-loader',
},在config，base添加

 {
        test: /\.css$/,
        include: [
          /src/,//表示在src目录下的css需要编译
          '/common/css/'   //增加此项
        ],
        loader: 'style-loader!css-loader',
      },
      
## 制作首页header组件
1.用的是mint-ui 中的Header组件
2.制作底部的Tabbar区域，用的是mui
  +css样式复制到文件中去
  +添加扩展字体 ttf 文件
  +添加购物车的class
  +注意：main.js里面添加mui的js文件是会报错的，直接在vue组件里面添加就可以
## 给下面四个按钮添加router
1.a标签换成router-link   href换成to，路径更换成指定的文件
2.写高亮显示
在router下面添加  linkActiveClass:'mui-active'
3.实现路由切换功能
  +创建4个对应的组件
### 改造路由链接 新闻资讯
1.绘制页面 使用mui中的 media-list
2.使用Vue-resource
3.渲染真实数据

## 实现新闻列表
1.列表改造为router-link，提供标识符号
2.创建组件页面
3.实现新闻的详情布局和数据渲染

##单独封装一个comment.vue子组件
1.创建子组件模板
2.在需要使用comment的页面中先手动导入commen组件
  +import...
3.在父组件中使用‘components’，属性注册为自己的组件
4.注册名称以标签形式，引用即可
##实现点击加载更多评论功能
1.绑定点击事件，在事件中去请求下一页数据
2.点击加载更多，让page++，重新调用
##评论组件有几个bug（暂未解决）

##改造图片分享按钮为路由的链接并显示页面

##绘制图片列表 组件页面结构美化样式
  1.顶部的滑动条
  2.制作底部的图片列表

##制作顶部滑动的坑
1.需要借助mui中的mui-master/examples/hello-mui/examples/tab-top-webview-m
2.需要把mui-fullscreen
3.滑动条无法正常触发滑动，检查官方文档，需要被初始化一下
需要导入mui.js
...
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
...

##直接引入js报错
mui.min.js?61f7:7 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
翻译：不能在严格模式函数或用于调用它们的参数对象上访问“caller”、“callee”和“arguments”属性

webpack打包启动了严格模式

  +推测mui.js用到了“caller”、“callee”和“arguments”属性，webpack打包好的bundle.js默认启动严格模式，所以冲突了
  +解决方法 1.把mui.js中的非严格模式的代码改掉，不现实
  +方法2.禁用webpack打包的时候禁用掉
    1.安装
      npm install babel-plugin-transform-remove-strict-mode -D
    2.修改 .babelrc 文件
    {
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-remove-strict-mode"]
}

+滑动的时候会报错，需要添加一下样式
* { touch-action: pan-y; }

###滑动之后点击下面的四个按钮有报错了
1.补东墙，西墙坏了
2.刚进入图片分享的时候，滑动条无法正常工作，分析如果要初始化，必须等到DOM元素加载完毕后才可以，所以我们把初始化代码搬到了mounted生命周期函数中
3.当滑动条调试可以后，tabbar无法正常工作，这是我们需要把每个tabbar中的样式'mui-tab-item'改一下类名，并把所有的样式拷贝过去

###制作图片列表区域
1.图片列表需要懒加载，可以使用Mint-Ui 提供的' Lazyload '
2.根据文档尝试使用
3.渲染图片

##实现图片列表的懒加载改造 和 样式美化

##点击图片跳转到图片详情
1.改造li成router-link的时候，需要使用tag标签属性渲染为哪种元素

##实现图片跳转的内容进行美化和改造

##实现图片详中的缩略图
1.vue-preview

###绘制商品基本结构化

###如何进行手机上面调试 开发 预览
1.手机和电脑连的是同一个wifi环境中，也就是说手机可以访问到电脑的IP
2.WIN+R，输入cmd回车，打开命令提示符，输入ipconfig，查看本地IPv4；我的电脑为（172.16.137.0）
3.找到项目中config文件夹，下面index.js文件打开
找到host: ‘localhost’, 改为上面本地IPv4地址；

###关于同一个样式宽度需要不同的值进行设置
1.web黑马10day 6章

###小球动画优化思路
1.不准确的元素是因为把小球固定的位置定死了，不同的分辨率导致结构也不一样
2.分析：先得到徽标的横纵坐标 ，再得到小球的横纵坐标，然后求 y的值求差，x的值求差，就是横纵坐标的位置
3.如何获取徽标小球的位置 domObject.getBoundingClientRect()


### VUEX
1.vuex是Vue配套的公共数据的管理工具，它可以实现数据共享
2.Vue是一个全局的共享数据，相当于一个存储仓库
3.Vue基本安装
  +npm install vuex --save
  +import Vuex from 'vuex'   Vue.use(Vuex)
  +var store = new Vuex.Store()
  +store//挂载store状态管理
### Vuex的具体做法