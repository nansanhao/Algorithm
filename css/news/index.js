let app = new Vue({
    el: '#app',
    data: {
        type: '游戏',
        limit: 10,
        offset: 0,
        total: 100,
        detailVisible: false,
        types: [
            { name: '财经', type: 'Finance' },
            { name: '彩票', type: 'Lottery' },
            { name: '房产', type: 'Property' },
            { name: '股票', type: 'Shares' },
            { name: '家居', type: 'Furnishing' },
            { name: '教育', type: 'Education' },
            { name: '科技', type: 'Technology' },
            { name: '社会', type: 'Sociology' },
            { name: '时尚', type: 'Fashion' },
            { name: '时政', type: 'Affairs' },
            { name: '体育', type: 'Sports' },
            { name: '星座', type: 'Constellation' },
            { name: '游戏', type: 'Game' },
            { name: '娱乐', type: 'Entertainment' }
        ],
        reports: [
            {
                id: 1,
                type: "Finance",
                title: "这是一条新闻",
                content: "-新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容"
            },
            {
                id: 1,
                type: "Finance",
                title: "这是一条新闻",
                content: "新闻内容"
            },
            {
                id: 1,
                type: "Finance",
                title: "这是一条新闻",
                content: "新闻内容"
            },
            {
                id: 1,
                type: "Finance",
                title: "这是一条新闻",
                content: "新闻内容"
            },
        ]
    },
    computed: {
        currentPage: function () {
            return parseInt(1 + (this.offset) / this.limit);
        }
    },
    methods: {
        getReports: function () {
            // axios.get('/album', {
            //     params: {
            //         a_id: id
            //     }
            // })
            //     .then(function (response) {
            //         let data = response.data;
            //         that.album = formatAlbum(data);
            //         console.log("获取专辑成功");
            //     })
            //     .catch(function (error) {
            //         console.log("获取专辑失败");
            //     });
        },
        getReportDetail: function () {

        },
        handleTypeChange: function (e) {
            let type = this.types[e.index].name;
            this.type = type;
            this.offset = 0;
            // this.init({ type, offset: 0, limit: this.limit });
        },
        handlePageChange: function (current) {
            console.log(current)
            // this.init({
            //     type: this.type,
            //     offset: current * this.limit - 1,
            //     limit: this.limit
            // });
        },
        init: function (params) {
            let that = this;
            axios.get(`/news`, {
                params
            })
                .then(function (res) {
                    let { type, limit, offset, total, data } = res.data;
                    console.log(res.data);
                    that.reports = data;
                    that.total = total;
                })
                .catch(function (error) {
                    console.log("获取新闻失败");
                });
        }
    },
    created: function () {
        this.init({
            type: this.type,
            offset: this.offset,
            limit: this.limit
        });
    }
});