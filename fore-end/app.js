//app.js
App({
  globalData: {
    //用来标识用户是否登录
    LOGINSTAT:'False',
    //所有接口的请求地址
    URL: 'https://lzu.abaoli.cn/wepr/ldjw',
    // URL: 'http://lzu.yijiajiao.top:8080/ldjw',
      //微信用户的唯一标识
    OPENID: '',
    //证明登录状态的凭证
    COOKIE: '',
    //教学通知
    ANNOUNCEMENT:[],
    //校园卡号
    USERNAME: '',
    //密码
    PASSWORD: '',
    //登录失败时用来显示错误信息
    ERRLOG: '',
    CARD:'暂无',
    NAME:'暂无',
    SEX:'暂无',
    GRADE:'暂无',
    MAJOR:'暂无',
    CLASS:'暂无',
    gradelist:[],
    gradeterm:'',
    gradeyear:'',
    gradestat:'',
    freelist:[],
    campname:'',
    buildname:'',
    week:'',
    weekday:'',
    //默认周数
    defaultValue: [],
    TIMELIST:[],
  },

  onLaunch: function () {
    this.calTime()
    //将课程表数据写入缓存
    this.globalData.TIMELIST = wx.getStorageSync('test')
    console.log(this.globalData.TIMELIST)
    this.globalData.USERNAME = wx.getStorageSync('username')
    this.globalData.PASSWORD = wx.getStorageSync('password')
    //获取用户的openid并写入缓存，以备下次直接读取
    var value = wx.getStorageSync('openid')
    if (value) { this.globalData.OPENID = value }
    else {
      wx.showLoading({ title: '获取数据中', })
      var that = this
      wx.login({
        success: function (res) {
          var code = res.code
          wx.request({
            url: that.globalData.URL,
            data: { 'type': "get_openid", 'code': code },
            method: 'get',
            header: { 'content-type': 'application/json' },
            success: function (res) {
              wx.setStorageSync('openid', res.data.openid)
              that.globalData.OPENID = res.data.openid
              wx.hideLoading()
            }
          })
        }
      })
    }


  },
  /**计算当前是第几周 */
  calTime: function () {
    var d1 = new Date()
    var d2 = new Date()
    var d3 = d1 - d2.setFullYear(2018, 8, 2)
    var s1 = Math.ceil(d3 / (24 * 60 * 60 * 1000))
    var s2 = Math.ceil(s1 / 7)
    console.log('开学第', s1, '天')
    this.globalData.defaultValue = s2
    console.log('当前周数为', this.globalData.defaultValue)
  },

})


// "tabBar":{
//   "list":[
//     {
//       "text":"首页",
//       "pagePath":"pages/home/home",
//       "iconPath":"images/icons/home.png",
//       "selectedIconPath":"images/icons/homeselected3.png"
//     },
//     {
//       "text": "个人信息",
//       "pagePath": "pages/info/info",
//       "iconPath": "images/icons/info.png",
//       "selectedIconPath":"images/icons/selected3.png"
//     }
//   ],
//   "color":"",
//   "selectedColor":"",
//   "backgroundColor":"#fff",
//   "borderStyle":"white"
// }