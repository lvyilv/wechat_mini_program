// components/test2/test2.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },
    options: {
        pureDataPattern: /^_/
    },

    /**
     * 组件的初始数据
     */
    data: {
        _rgb: {
            r: 0,
            g: 0,
            b: 0
        },
        fullColor: "0,0,0"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changRGB(e) {
            var rgb = e.target.dataset.rgb
            switch (rgb) {
                case 'R':
                    this.setData({
                        '_rgb.r': this.data._rgb.r >= 255 ? 255 : this.data._rgb.r + 5
                    })
                    break;
                case 'G':
                    this.setData({
                        '_rgb.g': this.data._rgb.g >= 255 ? 255 : this.data._rgb.g + 5
                    })
                    break;
                case 'B':
                    this.setData({
                        '_rgb.b': this.data._rgb.b >= 255 ? 255 : this.data._rgb.b + 5
                    })
                    break;
                default:
                    break;
            }
        },
        _randomColor(){
            this.setData({
                _rgb:{
                    r:Math.floor(Math.random()*256),
                    g:Math.floor(Math.random()*256),
                    b:Math.floor(Math.random()*256),
                }
            })
        }
    },
    observers: {
        '_rgb.**': function (obj) {
            console.log(1)
            this.setData({
                fullColor: `${obj.r},${obj.g},${obj.b}`
            })
        }
    },
    lifetimes: {
        created() {
            console.log("created")
        },
        attached() {
            console.log("attached")
        }
    },
    pageLifetimes: {
        show() {
            // console.log('show')
            this._randomColor()
        },
        hide() {
            console.log('show')
        },
        resize() {
            console.log('resize')
        }
    }
})