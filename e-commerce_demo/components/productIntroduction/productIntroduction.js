// components/productsIntroduction/productIntroduction.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
      shopInfo:JSON
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

    },
    show(){
      console.log(this.properties.shopInfo)
    }
})