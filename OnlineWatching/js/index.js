const recommendList = [
    {
        no: 0,
        name: '猎龙队',
        imgurl: '',
        url: ''
    }, {
        no: 1,
        name: '地宫笔记之五百龙首',
        imgurl: '',
        url: ''
    }, {
        no: 2,
        name: '时间牢笼',
        imgurl: '',
        url: ''
    }, {
        no: 3,
        name: '燕赤霞之五尾天蝎',
        imgurl: '',
        url: ''
    }, {
        no: 4,
        name: '怪兽2',
        imgurl: '',
        url: ''
    }, {
        no: 5,
        name: '怪物先生',
        imgurl: '',
        url: ''
    }, {
        no: 6,
        name: '劫后重生之宝藏之谜',
        imgurl: '',
        url: ''
    }, {
        no: 7,
        name: '我的女友是机器人',
        imgurl: '',
        url: ''
    }, {
        no: 8,
        name: '荞麦疯长',
        imgurl: '',
        url: ''
    }
];

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
    loadRecommends();

    loadMov();
});


// 加载推荐影片
function loadRecommends() {
    console.log('加载推荐影片');
    let recommends = $('#recommends');
    let str = `
    <li id="recommend{0}"class="recommend-item">
        {1}
    </li>`;
    let html = '';
    $.each(recommendList, (index, item) => {
        let s = str;
        html += s.format(index, item['name']);
    });
    recommends.html(html);

    // 添加鼠标移入事件
    let recommend = $('.recommend-item');
    recommend.mouseenter((e) => {
        let id = e.target.id;
        console.log(id);
    });


}

// 加载首页影片
function loadMov() {

    // 院线热映
    let html = '';
    let itemHtml = `
    <a id="mov_1_{0}" class="movie-item" href="{1}" target="_blank">
        <img src="{2}" alt="" class="cover">
        <p class="name">{3}</p>
    </a>
    `;
    $.each(mov_1, (index, item) => {
        let s = itemHtml;
        html += s.format(index, M3U8_API + item['url'], item['imgcover'], item['name']);
    });
    $('#mov_1').html(html);

}