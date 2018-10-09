// pages/info/info.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card:'',
    name:'',
    sex:'',
    grade:'',
    major:'',
    Class:'',
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
  this.setData({
    card:app.globalData.CARD,
    name: app.globalData.NAME,
    sex: app.globalData.SEX,
    grade: app.globalData.GRADE,
    major: app.globalData.MAJOR,
    Class: app.globalData.CLASS,
  })
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
  
  }
})