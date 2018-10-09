var app = getApp()
Page({


  data: {
    valcodeurl: '',
    username: '',
    password: '',
    valcode: '',
    errlog: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.get_valcode()
    this.setData({
      username: app.globalData.USERNAME,
      password: app.globalData.PASSWORD,
      errlog: app.globalData.ERRLOG
    })
  },

  get_valcode: function () {
    wx.showLoading({
      title: '获取验证码中',
    })
    var that = this
    wx.request({
      url: app.globalData.URL,
      data: { 'type': "get_valcode", 'openid': app.globalData.OPENID },
      method: 'get',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data.cookie)
        app.globalData.COOKIE = res.data.cookie.JSESSIONID
        that.setData({
          valcodeurl: 'https://lzu.abaoli.cn/img/valcode/' + app.globalData.OPENID + '.jpg'
        })
        wx.hideLoading()
      }
    })

  },
  
  login: function () {
    wx.showLoading({
      title: '登录中',
    })
    var that = this
    wx.request({
      url: app.globalData.URL,
      data: {
        'type': "login", 'cookie': app.globalData.COOKIE, 'username': this.data.username,
        'password': this.data.password, 'valcode': this.data.valcode
      },
      method: 'get',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        if (res.data.stat == 'success') {
          app.globalData.COOKIE = res.data.cookie.JSESSIONID
          wx.showToast({
            title: '登录成功',
            duration: 3000
          })
        that.get_announcement()
          app.globalData.LOGINSTAT = 'True'
          app.globalData.USERNAME=that.data.username
          app.globalData.PASSWORD=that.data.password
          wx.setStorageSync('password', app.globalData.PASSWORD)
          wx.setStorageSync('username', app.globalData.USERNAME)
          app.globalData.NAME=res.data.deatil.name
          app.globalData.CARD= res.data.deatil.cardid
          app.globalData.SEX= res.data.deatil.sex
          app.globalData.GRADE= res.data.deatil.gradeid
          app.globalData.MAJOR= res.data.deatil.majorid
          app.globalData.CLASS= res.data.deatil.classid

          console.log(app.globalData.CLASS)
          // wx.redirectTo({
          //   url: '/pages/class/class'
          // })
          that.get_timetable()

          wx.navigateBack({
          delta:'1' 
          })

          
        } else if (res.data.stat == 'fail') {
          app.globalData.ERRLOG = res.data.log
          that.change_valcode()

        } else {
          app.globalData.ERRLOG = '登录失败，未知错误'
          that.change_valcode()

        }


      }
    })

  },
  back: function () {
    app.globalData.ERRLOG=''
    //退回首页
    wx.navigateBack({
      delta: -1
    })
  },

  userinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  passinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  codeinput: function (e) {
    this.setData({
      valcode: e.detail.value
    })
  },

  change_valcode: function () {
    app.globalData.USERNAME = this.data.username
    app.globalData.PASSWORD = this.data.password
    wx.redirectTo({
      url: '/pages/idtf/idtf'
    })
  },

  get_announcement :function() {
    wx.request({
      url: app.globalData.URL,
      data: { 'type': "get_announcement", 'cookie':app.globalData.COOKIE  },
      method: 'get',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        app.globalData.ANNOUNCEMENT=res.data
        console.log(app.globalData.ANNOUNCEMENT)
      }
    })
  },

  //获取课程表
  get_timetable: function () {
    wx.showLoading({
      title: '获取课表中',
    })
    var that = this
    wx.request({
      url: app.globalData.URL,
      data: { 'type': "get_timetable", 'cookie': app.globalData.COOKIE },
      method: 'get',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        app.globalData.TIMELIST = res.data.timeList
        console.log('success???',res.data.timeList)

        wx.setStorageSync('test', app.globalData.TIMELIST)
        wx.hideLoading()
      }
    })

  },
})