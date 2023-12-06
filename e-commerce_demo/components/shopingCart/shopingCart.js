// components/shopingCart/shopingCart.js
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'
Component({
  behaviors: [storeBindingsBehavior],

  storeBindings: {
    store,
    actions: {
      updateShopList: 'updateShopList',
      getShopList: 'getShopList'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // shopListC: JSON
  },

  /**
   * 组件的初始数据
   */
  data: {
    shopList:[],
    price: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeQuantity(e) {
      var id = JSON.parse(e.target.dataset.info).id
      var method = JSON.parse(e.target.dataset.info).info

      for (var i = 0; i < this.data.shopList.length; i++) {
        if (this.data.shopList[i].id == id) {
          let shopListC = this.data.shopList

          if (method=="+"){
            shopListC[i].shopQuantity = shopListC[i].shopQuantity+1

          }
          else if(shopListC[i].shopQuantity>1){
            shopListC[i].shopQuantity = shopListC[i].shopQuantity-1
          }
          this.setData({
            shopList:shopListC
          })
          this.updateShopList(this.data.shopList[i])
          this.setData({
            shopList:this.getShopList()
          })
        }
      }
      this.triggerEvent('myEvent', { message: 'Hello from child' });
    },
    show() {
      console.log(this.data.shopList)
    },
    onchange(e) {
      var id = e.target.dataset.id
      for (var i = 0; i < this.data.shopList.length; i++) {
        if (this.data.shopList[i].id == id) {
          let shopListC = this.data.shopList
          shopListC[i].checked = !shopListC[i].checked
          this.setData({
            shopList:shopListC
          })
          this.updateShopList(this.data.shopList[i])
          this.setData({
            shopList:this.getShopList()
          })
        }
      }
      this.triggerEvent('myEvent', { message: 'Hello from child' });
    },

  },
  pageLifetimes:{
    show(){
      this.setData({
        shopList:this.getShopList()
      })
    }
  }

})