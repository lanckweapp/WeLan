var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {aid:'1',buildingid:'717',
  buildingids:[
    [{ 'id': '717', 'name': 'B区教学楼' }, { 'id': '1349', 'name': 'GLP实验楼' }, { 'id': '1346', 'name': '（医学）核学楼' }, { 'id': '1347', 'name': '（医学）学生1号公寓' }, { 'id': '1348', 'name': '（医学）学生4号公寓机房' }, { 'id': '70', 'name': '公卫实验楼' }, { 'id': '24', 'name': '基础实验楼' }, { 'id': '1350', 'name': '精诚楼' }, { 'id': '1351', 'name': '口腔医学实验中心' }, { 'id': '921', 'name': '兰大二院教学楼' }, { 'id': '1352', 'name': '兰州市CDC' }, { 'id': '105', 'name': '临床实验楼' }, { 'id': '2123', 'name': '明道楼' }, { 'id': '1353', 'name': '南校区' }, { 'id': '1143', 'name': '勤博楼' }, { 'id': '941', 'name': '通信网络中心' }, { 'id': '2204', 'name': '新竹苑' }, { 'id': '2', 'name': '杏林楼' }, { 'id': '78', 'name': '药学实验楼' }],

    [{ 'id': '1354', 'name': '（榆中）核学院38号楼' }, { 'id': '2613', 'name': '（榆中）南区多功能环境风洞实验室' }, { 'id': '1355', 'name': '（榆中）室外-校园内' }, { 'id': '1356', 'name': '（榆中）室外-校园外' }, { 'id': '1357', 'name': '（榆中）西区草科院实验楼' }, { 'id': '1358', 'name': '（榆中）西区草科院试验站' }, { 'id': '1359', 'name': '（榆中）西区观测场' }, { 'id': '1360', 'name': '（榆中）西区教学楼' }, { 'id': '1361', 'name': '（榆中）西区人体解剖实验室' }, { 'id': '1362', 'name': '（榆中）小礼堂' }, { 'id': '2424', 'name': '办公楼' }, { 'id': '1363', 'name': '高远楼' }, { 'id': '2224', 'name': '工程实验中心' }, { 'id': '1364', 'name': '贺兰堂' }, { 'id': '2165', 'name': '宏远楼' }, { 'id': '2066', 'name': '昆仑堂' }, { 'id': '119', 'name': '气象楼' }, { 'id': '332', 'name': '实践' }, { 'id': '133', 'name': '实验楼' }, { 'id': '207', 'name': '天山堂' }, { 'id': '1144', 'name': '闻韶楼' }, { 'id': '334', 'name': '西区教学楼' }, { 'id': '121', 'name': '新闻楼' }, { 'id': '366', 'name': '艺术楼' }, { 'id': '2071', 'name': '榆中23号学生公寓' }, { 'id': '2404', 'name': '榆中网 络中心' }, { 'id': '326', 'name': '运动场' }],

    [ { 'id': '646', 'name': '本部运动场' }, { 'id': '559', 'name': '草科楼' }, { 'id': '1341', 'name': '第一化学楼' }, { 'id': '1342', 'name': '飞云楼' }, { 'id': '1343', 'name': '格致楼' }, { 'id': '1081', 'name': '观云楼' }, { 'id': '394', 'name': '衡山堂' }, { 'id': '423', 'name': '化学楼1号' }, { 'id': '557', 'name': '化学楼2号' }, { 'id': '426', 'name': '旧文科楼' }, { 'id': '1344', 'name': '齐云楼' }, { 'id': '2492', 'name': '生物2号楼' }, { 'id': '549', 'name': '生物楼' }, { 'id': '1345', 'name': '天演楼' }, { 'id': '471', 'name': '物理楼' }, { 'id': '476', 'name': '新文科楼' }, { 'id': '2672', 'name': '新闻学院实验楼' }, { 'id': '552', 'name': '信息楼' }, { 'id': '2470', 'name': '逸夫生物楼' }, { 'id': '981', 'name': '专家楼' }, { 'id': '555', 'name': '综合楼' }],

    [ { 'id': '2343', 'name': '护理学院教学实验楼' }, { 'id': '2389', 'name': '护理学院篮球场' }]
  ],


  
    placeArray: [['医学校区', '榆中校区', '盘旋路校区', '护理学院'], ['B区教学楼', 'GLP实验楼', '（医学）核学楼', '（医学）学生1号公寓', '（医学）学生4号公寓机房', '公卫实验楼', '基础实验楼', '精诚楼', '口腔医学实验中心', '兰大二院教学楼', '兰州市CDC', '临床实验楼', '明道楼', '南校区', '勤博楼', '通信网络中心', '新竹苑', '杏林楼', '药学实验楼']],
    
    subplaceArray: [
      [ 'B区教学楼', 'GLP实验楼', '（医学）核学楼', '（医学）学生1号公寓', '（医学）学生4号公寓机房', '公卫实验楼', '基础实验楼', '精诚楼', '口腔医学实验中心', '兰大二院教学楼', '兰州市CDC', '临床实验楼', '明道楼', '南校区', '勤博楼', '通信网络中心', '新竹苑', '杏林楼', '药学实验楼'],
      [ '（榆中）核学院38号楼', '（榆中）南区多功能环境风洞实验室', '（榆中）室外-校园内', '（榆中）室外-校园外', '（榆中）西区草科院实验楼', '（榆中）西区草科院试验站', '（榆中）西区观测场', '（榆中）西区教学楼', '（榆中）西区人体解剖实验室', '（榆中）小礼堂', '办公楼', '高远楼', '工程实验中心', '贺兰堂', '宏远楼', '昆仑堂', '气象楼', '实践', '实验楼', '天山堂', '闻韶楼', '西区教学楼', '新闻楼', '艺术楼', '榆中23号学生公寓', '榆中网络中心', '运动场'],
      [ '本部运动场', '草科楼', '第一化学楼', '飞云楼', '格致楼', '观云楼', '衡山堂', '化学楼1号', '化学楼2号', '旧文科楼', '齐云楼', '生物2号楼', '生物楼', '天演楼', '物理楼', '新文科楼', '新闻学院实验楼', '信息楼', '逸夫生物楼', '专家楼', '综合楼'],
      [ '护理学院教学实验楼', '护理学院篮球场']
    ],
   
    placeIndex: [0, 0],

    week: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    weekIndex: 0,
    day: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    dayIndex: 0,
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
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      placeIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column==0){
        this.setData({
          "placeArray[1]": this.data.subplaceArray[e.detail.value],
        })
    }
  },



  bindPickerChange1: function (e) {
    console.log('选择周数为', e.detail.value)
    this.setData({
      weekIndex: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('选择日期为', e.detail.value)
    this.setData({
      dayIndex: e.detail.value
    })
  },
  transcode:function(){
    var code_aid;
    var code_buildingid;
    switch (this.data.placeIndex[0]){
      case 0:
       code_aid='1';
       break;
       case 1:
       code_aid='118';
       break;
      case 2:
        code_aid = '393';
        break;
      case 3:
        code_aid = '14960';
        break;

    }
    this.setData({
      aid:code_aid,
      buildingid: this.data.buildingids[this.data.placeIndex[0]][this.data.placeIndex[1]].id
      })
      console.log(this.data.buildingids[this.data.placeIndex[0]][this.data.placeIndex[1]].id)
      console.log(this.data.buildingids[this.data.placeIndex[0]][this.data.placeIndex[1]].name)
      },

  get_freeclassroom: function () {
    this.transcode()
    var that = this
    wx.showLoading({
      title: '查询空教室中',
    })
    app.globalData.campname = this.data.placeArray[0][this.data.placeIndex[0]]
    app.globalData.buildname = this.data.buildingids[this.data.placeIndex[0]][this.data.placeIndex[1]].name
    app.globalData.week = this.data.week[this.data.weekIndex]
    app.globalData.weekday=this.data.day[this.data.dayIndex]
      
    wx.request({
      url: app.globalData.URL,
      data: {
        'type': "get_freeclassroom", 'cookie': app.globalData.COOKIE, 'whichweek': parseInt(this.data.weekIndex) + 1, 'week': parseInt(this.data.dayIndex) + 1,'aid':this.data.aid,'buildingid':this.data.buildingid
      },
      method: 'get',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          'classlist': res.data.classlist,
          'freelist': res.data.freelist
        })
        app.globalData.freelist = res.data.freelist
        wx.hideLoading()
        wx.redirectTo({
          url: '/pages/class/detail/detail'
        })

      }
    })

  },
})


