// pages/nineGrid/shopPage/shopPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      shopId:null,
      shopList:[
        {
          id:1,
          shopName:"吹风机",
          introduce:"美的吹风机家用负离子护发大风力速干电吹风宿舍用学生大功率风筒 1件装",
          shopImage:"/images/NineSquareGrid/1.webp",
          price:"159"
        },
        {
          id:2,
          introduce:"电吹风机家用大功率不伤发超静音负离子护发吹头发大风力冷热风筒",
          shopImage:"/images/NineSquareGrid/2.webp",
          price:"26.9"
        },
        {
          id:3,
          introduce:"美的电吹风机负离子家用大功率护发速干大风力宿舍学生吹风筒便携 1件装",
          shopImage:"/images/NineSquareGrid/3.webp",
          price:"89"
        }
      ],
      shopInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.setData({
        shopId:options.shopId
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
      this.data.shopId
      for (const shopIndex in this.data.shopList) {
        const shop = this.data.shopList[shopIndex]
        if(shop.id==this.data.shopId){
          this.setData({
            shopInfo:shop
          })
          console.log(this.data.shopInfo)
        }
      }
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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})