// components/test5/test5.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

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
        countAdd(){
            this.setData({
                count:this.data.count+1
            })
            //触发父组件传过来的自定义事件，进行传参
            this.triggerEvent('sync',{value:this.data.count})

        }
    }
})