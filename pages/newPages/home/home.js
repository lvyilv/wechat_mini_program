// pages/newPages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[],
        gridList:[],
        count:0
    },
    getSwiperList(){
        wx.request({
          url: 'https://applet-base-api-t.itheima.net/slides',
          method:"GET",
          success:(res) => {
              this.setData({
                  swiperList: res.data
              })
            //   console.log(this.data.swpierList)
          }
        })
    },
    getGridList(){
        wx.request({
          url: 'https://applet-base-api-t.itheima.net/categories',
          method:"GET",
          success:(res) =>{
             this.setData({
                 gridList: res.data
             })
          }
        })
    },
    countAdd(){
        this.setData({
            count: this.data.count + 1
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList();
        this.getGridList();
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
        console.log("触发了下拉刷新");
        this.setData({
            count:0
        })
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log("触发了上拉触底事件");
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})