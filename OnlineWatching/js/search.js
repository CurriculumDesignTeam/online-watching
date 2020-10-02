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

    let param = {
        searchword: keyword
    };

    // 请求
    my_ajax(MOVIE.SEARCH, param, (e) => {
        toastr.success(e.message);
        console.log(e.data);
        
        renderList(e.data);

    });
}


// 渲染查询结果
function renderList(movies) {
    console.log('渲染界面');
    // 院线热映
    let html = '';
    let itemHtml = `
    <a id="mov_1_{0}" class="movie-item" href="{1}" target="_blank">
        <img src="{2}" alt="" class="cover">
        <p class="name">{3}</p>
    </a>
    `;
    $.each(movies, (index, item) => {
        let s = itemHtml;
        html += s.format(index, M3U8_API + item['url'], item['avatar'], item['moviename']);
    });
    $('#mov_1').html(html);
}
