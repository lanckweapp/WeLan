// pages/grade/grade.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028','2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    yearIndex:0,
    term:['春季','秋季','寒假','暑假'],
    termIndex:0,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.LOGINSTAT == 'False') {
      wx.redirectTo({
        url: '/pages/idtf/idtf'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  back: function () {
    //退回首页
    wx.navigateBack({
      delta: -1
    })
  },
  bindPickerChange1: function (e) {
    console.log('选择学年为', e.detail.value)
    this.setData({
      yearIndex: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('选择学期为', e.detail.value)
    this.setData({
      termIndex: e.detail.value
    })
  },

  switchChange: function (e) {
    console.log('未通过课程',e.detail.value)
  },

get_personalgrade:function(){
  app.globalData.gradeyear=this.data.year[this.data.yearIndex]
    app.globalData.gradeterm=this.data.term[this.data.termIndex]
wx.showLoading({
  title: '查询成绩中',
})
  wx.request({
    url: app.globalData.URL,
    data: {
      'type': "get_personalgrade", 'cookie': app.globalData.COOKIE, 'year': this.data.year[this.data.yearIndex], 'term': parseInt(this.data.termIndex) +1
    },
    method: 'get',
    header: { 'content-type': 'application/json' },
    success: function (res) {
      app.globalData.gradelist = res.data.gradelist
      app.globalData.gradestat=res.data.stat
      console.log(app.globalData.gradelist)
      console.log(app.globalData.gradestat)
      wx.hideLoading()
      wx.redirectTo({
        url: '/pages/grade/gradetable/gradetable'
      })
    }
  })
  
}

})