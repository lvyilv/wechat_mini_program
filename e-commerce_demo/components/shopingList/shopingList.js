// components/shopList/shopingList.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    shopList:JSON
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toShopPage(e){
      const shopId = e.target.dataset.shopid
      wx.navigateTo({
        url: `/pages/nineGrid/shopPage/shopPage?shopId=${shopId}`,
      })
    }
  }
})