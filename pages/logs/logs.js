// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  gotoBack () {
    wx.navigateBack()
  },

  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
