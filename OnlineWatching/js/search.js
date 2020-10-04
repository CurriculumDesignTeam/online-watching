// 院线热映列表
const mov_1 = [
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    },
    {
        name: '急先锋',
        imgcover: '../imgs/350.jpg',
        url: 'https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8'
    }
];


// 入口函数
$(function () {
    // 获取关键词
    let keyword = location.search.split("=")[1];
    // 搜索
    search(keyword);

});


// 搜索
function search(keyword) {
    // 解析关键词
    keyword = decodeURIComponent(keyword);
    console.log('搜索:' + keyword);

    let url = MOVIE.SEARCH;
    let param = {
        searchword: keyword
    };

    // 请求
    my_ajax(url, param, (e) => {
        console.log(e);
        if (e.code === 200) {
            toastr.success(e.message);
            console.log(e.data);
            renderVideoList('movies', e.data);
        }
        else {
            // toastr.error(e.message);
            toastr.info('查询结果为空');
        }

    });
}

