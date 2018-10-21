// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        grids:[
          {
            text:'教室查询',
            route:'/pages/class/date/date',
            image:'/images/icons/class.png',
            icon:'home'
          },
          {
            text:'成绩查询',
            route:'/pages/grade/grade',
            image:'/images/icons/grade.png',
            icon:'copy'
          },{
            text:'课表查询',
            route:'/pages/timetable/timetable',
            image:'/images/icons/timetable.png',
            icon:'calendar'
          },
          {
            text: '个人信息',
            route: '/pages/info/info',
            image: '/images/icons/info.png',
            icon: 'my'
          }
          // , {
          //   text: '校园卡',
          //   route: '',
          //   image: '',
          //   icon: 'news'
          // }
<<<<<<< HEAD
          , {
            text: '联系我们',
            route: '/pages/contact/contact',
            image: '',
            icon: 'service'
          }
=======
          //, {
            //text: '联系我们',
            //route: '',
            //image: '',
            //icon: 'service'
          //}
>>>>>>> f1aa74a969063ebf2ae3281d11b5c53931337732
          // , {
          //   text: '添加',
          //   route: '',
          //   image: '',
          //   icon: 'add'
          // }
        ],
        movies:[
          {
            id: 1,
            url:'http://news.lzu.edu.cn/FHup/images/201601/01-02_010151-1.jpg'
          },
          {
            id: 2,
            url:'http://news.lzu.edu.cn/FHup/images/201603/03-31_122643-9.JPG'
          },
          {
            id: 3,
            url:'http://www.lzu.edu.cn/files/banner/content/xiaofeng.jpg'
          },
          {
            id: 4,
            url:'http://news.lzu.edu.cn/FHup/images/201604/04-20_160958-9.jpg'
          }
        ]
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          //   wx.redirectTo({
          //   url: '/pages/grade/gradetable/gradetable'
          // })
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
  test:function()
  {
    wx.request({
    url: "https://lzu.abaoli.cn/wepr/service",
      data: { "ToUserName": '', 'FromUserName': 'o9yUc5GJO861gznIWzWokX9rrJG8', "CreateTime": 1482048670, "MsgType": "text", "Content": "this is a test", "MsgId": 1234567890123456},
    method: 'post',
      header: {
        'content-type': 'application/xml' // 默认值
      }
  
  })
  }
})
