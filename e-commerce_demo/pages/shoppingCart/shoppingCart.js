// pages/shoppingCart/shoppingCart.js
import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sumPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['shopList'],
      actions: ['getShopList']
    })
  },
  refresh: function (event) {
    // console.log('父组件收到子组件的事件:', event.detail.message);
    var shopList = this.getShopList()
    var sum = 0
    for (var i=0;i<shopList.length;i++) {
      if(shopList[i].checked==true){
        sum += parseInt(shopList[i].price*shopList[i].shopQuantity)
      }
    }
    this.setData({
      sumPrice:sum
    })

    //  = this.getShopList
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
    // console.log(this.getShopList())
    // this.setData({
    //   shopListCopy:this.getShopList()
    // })
    this.refresh()
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