const recommendList = [
    {
        no: 0,
        name: '猎龙队',
        imgurl: '../imgs/banner/猎龙队.jpg',
        url: ''
    }, {
        no: 1,
        name: '地宫笔记之五百龙首',
        imgurl: '../imgs/banner/地宫笔记之五百龙首.jpg',
        url: ''
    }, {
        no: 2,
        name: '时间牢笼',
        imgurl: '../imgs/banner/时间牢笼.jpg',
        url: ''
    }, {
        no: 3,
        name: '燕赤霞之五尾天蝎',
        imgurl: '../imgs/banner/燕赤霞之五尾天蝎.jpg',
        url: ''
    }, {
        no: 4,
        name: '怪兽2',
        imgurl: '../imgs/banner/怪兽2.jpg',
        url: ''
    }, {
        no: 5,
        name: '怪物先生',
        imgurl: '../imgs/banner/怪物先生.jpg',
        url: ''
    }, {
        no: 6,
        name: '劫后重生之宝藏之谜',
        imgurl: '../imgs/banner/劫后重生之宝藏之谜.jpg',
        url: ''
    }, {
        no: 7,
        name: '我的女友是机器人',
        imgurl: '../imgs/banner/我的女友是机器人.jpg',
        url: ''
    }, {
        no: 8,
        name: '荞麦疯长',
        imgurl: '../imgs/banner/荞麦疯长.jpg',
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

// 当前正在播放的轮播图
let curr_slider_index = 0;
// 轮播图总数
let slider_num = recommendList.length;

// 入口函数
$(function () {
    loadRecommends();

    loadMov();

    loadOther();
});


// 添加事件
function loadOther() {
    console.log('添加事件');

    let searchBtn = $('#searchBtn');

    searchBtn.click(() => {
        // console.log('sss');
        // 获取输入
        let text = $('#searchInput').val().trim();

        // 跳转到搜索页面
        let url = 'search.html' + '?keyword=' + text;

        console.log(url);

        window.location.href = url;

    });

}


// 加载推荐影片
function loadRecommends() {
    console.log('加载推荐影片');
    let recommends = $('#recommends');
    let str = `
    <li id="recItem{0}" recno="{0}" class="recommend-item">
        {1}
    </li>`;
    let html = '';
    $.each(recommendList, (index, item) => {
        let s = str;
        html += s.format(index, item['name']);
    });
    recommends.html(html);

    // 轮播图滚动
    setInterval(() => {
        // 设置封面
        {
            // console.log(curr_slider_index);
            let curr = $('#recommendImg');
            curr.attr('src', recommendList[curr_slider_index].imgurl);
        }
        // 样式
        {
            let all = $('.recommend-item');
            let item = $('#recItem' + curr_slider_index);
            all.css({
                "color": "#c1bdbd"
            });
            item.css({
                "color": "#ff5c38"
            });
        }
        // 编号自增
        if (curr_slider_index < slider_num - 1) {
            curr_slider_index++;
        }
        else {
            curr_slider_index = 0;
        }
    }, 2000);

    // 添加鼠标移入事件
    let recommend = $('.recommend-item');
    recommend.mouseenter((e) => {
        let no = e.target.attributes.recno.value - 0;
        curr_slider_index = no;
        let curr = $('#recommendImg');
        curr.attr('src', recommendList[no].imgurl);
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