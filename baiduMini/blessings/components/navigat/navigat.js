Component({
    properties: {
        curName: {
            type: String, 
            value: 'mine'
        },
        propName: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 'val', // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {
        barlist: [
            {
                id: 1,
                title: '红包祝福',
                name: 'packetBless',
                path: '/pages/packetBless/packetBless'
            },
            {
                id: 2,
                title: '卡片祝福',
                name: 'cardBless',
                path: '/pages/cardBless/cardBless'
            },
            {
                id: 3,
                title: '我的',
                name: 'mine',
                path: '/pages/mine/mine'
            }
        ]
    }, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
        console.log(this.data.barlist)
    },

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});