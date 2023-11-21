// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      imageUrls:[
        "../../images/swiperImages/1.jpg",
        "../../images/swiperImages/OIP.jpg"
      ],
      nineSquareGridList:[
        {
          id:1,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav01.png",
          text:"美食"
        },
        {
          id:2,
          imgPath:"/images/NineSquareGrid/shoping.png",
          text:"购物"
        },
        {
          id:3,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav03.png",
          text:"结婚啦"
        },
        {
          id:4,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav04.png",
          text:"卡拉OK"
        },
        {
          id:5,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav05.png",
          text:"找工作"
        },
        {
          id:6,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav06.png",
          text:"辅导班"
        },
        {
          id:7,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav07.png",
          text:"汽车保养"
        },
        {
          id:8,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav08.png",
          text:"租房"
        },
        {
          id:9,
          imgPath:"https://applet-base-api-t.itheima.net/img/nav/nav09.png",
          text:"装修"
        }
    ]
    },
    toPage(e){
      let id = e.target.dataset.id
      if (id==1){
        // console
        wx.navigateTo({
          url: '/pages/nineGrid/delicacies/delicacies'
        })
      }
      if (id==2){
        // console
        wx.navigateTo({
          url: '/pages/nineGrid/shoping/shoping'
        })
      }
      
      // wx.navigateTo({
      //   url: page,
      // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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