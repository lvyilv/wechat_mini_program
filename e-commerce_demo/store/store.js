import {
  action,
  observable,
  autorun
} from 'mobx-miniprogram'

export const store = observable({
  shopList: [        {
    id:1,
    shopName:"吹风机",
    introduce:"美的吹风机家用负离子护发大风力速干电吹风宿舍用学生大功率风筒 1件装",
    shopImage:"/images/NineSquareGrid/1.webp",
    price:"159",
    shopQuantity:1,
    checked:true
  }
  ],
  getShopList() {
    return this.shopList
  },
  updateShopList: action(function (shopInfo) {
    var flag = true
    console.log(this.shopList)

    for (var i = 0; i <= this.shopList.length; i++) {
      try {
        if (this.shopList[i].id == shopInfo.id) {
          this.shopList[i] = shopInfo
          flag = false
        }
      } catch (error) {
        null
      }
    }
    if (flag == true) {
      // var a = this.shopList
      // a.unshift(shopInfo)
      this.shopList.unshift(shopInfo)
      flag = false
    }
    console.log("store中的值为：")
    console.log(this.shopList)
  })
})
