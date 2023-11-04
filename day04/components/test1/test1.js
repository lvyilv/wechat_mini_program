// components/test1/test1.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        //第一种方式
        // max:Number,
        max:{
            type:Number,
            value:10
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount(){
            if (this.data.count<this.properties.max) {
                this.setData({
                    count:this.data.count + 1
                })
                this.showCount()
            }
        },
        showCount(){
            wx.showToast({
              title: 'count是'+this.data.count,
              icon:'none'
            })
        }
    }
})