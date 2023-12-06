// components/productsIntroduction/productIntroduction.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Component({
  behaviors:[storeBindingsBehavior],

  storeBindings:{
    store,
    fields:{
      shopList:'shopList'
    },
    actions:{
      updateShopList:'updateShopList'
    }
  },
  options: {
    // addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    shopInfo: JSON
  },

  /**
   * 组件的初始数据
   */
  data: {
    popupDisplay:'display: none;',
    shopQuantity:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopup(){
      this.setData({
        popupDisplay:'display:block'
      })

    },
    saveQuantity(){
      this.setData({
        popupDisplay:'display:none'
      })
      this.properties.shopInfo.shopQuantity = this.data.shopQuantity
      this.properties.shopInfo.checked = false
      console.log(this.properties.shopInfo)
      this.updateShopList(this.properties.shopInfo)
    },
    unshowPopup(){
      this.setData({
        popupDisplay:'display:none'
      })
    },
    add(){
      this.setData({
        shopQuantity:this.data.shopQuantity+1
      })
    },
    reduce(){
      if(this.data.shopQuantity>1){
        this.setData({
          shopQuantity:this.data.shopQuantity-1
        })
      }
    }
  },
  show() {z
    console.log(this.properties.shopInfo)
  }
})