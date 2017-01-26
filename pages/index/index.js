//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  searchFlowerInfo: function(e) {
    console.log("search button" + e)
    wx.navigateTo({
      url: '../display/display',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {

  }
})
