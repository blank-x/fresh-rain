// pages/page2/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(query) {
        console.log(query)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log(3333)
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        }, 2000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('触底了')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})