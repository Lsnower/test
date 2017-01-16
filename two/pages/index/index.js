//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    map:[
      {
        image:'/image/vr.png'
      },
      {
        image:'/image/bl.png'
      },
      {
        image:'/image/crab.png'
      },
    ],
    list:[
      {
        navimage:'/image/1.png',
        time:'Nov 25 2016',
        title:'发斯蒂芬斯蒂芬',
        mainimage:'/image/crab.png',
        maintext:'大大的无人区无若钢铁网任务二二恶烷若而我却二王企鹅无热污染大大的无人区无若钢铁网任务二 二恶烷若而我却二王企鹅无热污染大大的无人区无若钢铁网任务二 二恶烷若而我却二王企鹅无热污染'
      },
      {
        navimage:'/image/2.png',
        time:'Nov 25 2016',
        title:'大幅防守打法',
        mainimage:'/image/vr.png',
        maintext:'大大的无人区无若钢铁网任务二二恶烷若而我却二王企鹅无热污染大大的无人区无若钢铁网任务二 二恶烷若而我却二王企鹅无热污染大大的无人区无若钢铁网任务二 二恶烷若而我却二王企鹅无热污染'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
