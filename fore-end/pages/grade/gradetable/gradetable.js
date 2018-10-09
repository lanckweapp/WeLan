// pages/grade/gradetable/gradetable.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  gradelist:[],
  year:'',
  term:'',
  name:'',
  stat:'',
  statusArr: [false],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    "gradelist":app.globalData.gradelist,
    name:app.globalData.NAME,
    year: app.globalData.gradeyear,
    term: app.globalData.gradeterm,
    stat: app.globalData.gradestat
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
  
  },

  backTo: function () {
    wx.redirectTo({
      url: '/pages/grade/grade',
    })
  },

  bindViewTap: function (e) {
    var that = this;
    var idx = e.target.dataset.index;

    var updateStatusArr = that.data.statusArr.slice(0);

    updateStatusArr[idx] = !that.data.statusArr[idx];

    that.setData({
      'statusArr': updateStatusArr,
    });
  }

})