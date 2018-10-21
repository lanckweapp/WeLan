// pages/timetable/timetable.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#FFA07A", "#32CD32", "#7FC8EB", "#F18585", "#7ec9c9", "#FAA785", "#DDA0DD", "#FFD700","#6495ED"],

    timeList:[],
    nowList:[],
    aList:[],
    month:'',
    modalHidden: true,
    name:null,
    classroom:null,
    teacher: null,
    whichDay: null,
    classBegin: null,
    duration: null,

    week: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    weekArray: [
      { id: 0, name: '1' },
      { id: 1, name: '2' },
      { id: 2, name: '3' },
      { id: 3, name: '4' },
      { id: 4, name: '5' },
      { id: 5, name: '6' },
      { id: 6, name: '7' },
      { id: 7, name: '8' },
      { id: 8, name: '9' },
      { id: 9, name: '10' },
      { id: 10, name: '11' },
      { id: 11, name: '12' },
      { id: 12, name: '13' },
      { id: 13, name: '14' },
      { id: 14, name: '15' },
      { id: 15, name: '16' },
      { id: 16, name: '17' },
      { id: 17, name: '18' }

    ],
    index: 0,

  },

  showCard: function (e) {
    console.log(e.currentTarget.dataset)
      var that = this
      that.setData({
        modalHidden:false,
        name: e.currentTarget.dataset.name,
        classroom: e.currentTarget.dataset.classroom,
        teacher: e.currentTarget.dataset.teacher,
        whichDay: e.currentTarget.dataset.whichday,
        classBegin: e.currentTarget.dataset.classbegin,
        duration: e.currentTarget.dataset.duration,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*if (app.globalData.LOGINSTAT == 'False') {
      wx.redirectTo({
        url: '/pages/idtf/idtf'
      })
    } else { this.get_timetable()}*/
    this.getmonth()
    this.setData({
      'index': app.globalData.defaultValue - 1
    })
    this.data.timeList = app.globalData.TIMELIST
    console.log(this.data.timeList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getlist()
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

  //获取现在的月份
  getmonth:function () {
    var myDate = new Date()
    var date = myDate.getMonth()
    this.setData({
      'month':date + 1
    })
  },

  bindPickerChange: function (e) {
    console.log('选择周数为第', Number(e.detail.value) + 1, '周')
    this.setData({
      index: e.detail.value
    })
    this.getlist()
    
  },

  /**通过周数筛选本周课程*/
  getlist: function () {
    this.data.nowList = this.data.timeList.slice(0)
    for (var i = this.data.nowList.length - 1; i >= 0; i--) {
      if (this.data.nowList[i].weekList.indexOf(Number(this.data.index) + 1) == -1) {
        this.data.nowList.splice(i, 1, )
      }

      this.setData({
        'aList': this.data.nowList
      })
    }
    console.log(this.data.aList)
  },

  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },

})