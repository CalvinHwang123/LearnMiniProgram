// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'Xianlu Tech',
    skills: [
      { id: 1, name: 'Java' },
      { id: 3, name: 'Python' },
      { id: 5, name: 'JavaScript' },
    ],
    counter: 0
  },

  counterIncr() {
    // 错误做法：界面不会更新
    // this.data.counter++
    // console.log('counter now: ', this.data.counter)

    // 正确做法
    this.setData({
      counter: this.data.counter + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this)
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