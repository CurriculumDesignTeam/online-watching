const recommendList = [
    {
        no: 0,
        name: '猎龙队',
        imgurl: '../imgs/banner/猎龙队.jpg',
        url: 'https://douban.donghongzuida.com/20200911/9334_2824bce7/index.m3u8'
    }, {
        no: 1,
        name: '地宫笔记之五百龙首',
        imgurl: '../imgs/banner/地宫笔记之五百龙首.jpg',
        url: 'https://douban.donghongzuida.com/20200915/9681_6cf2fbd3/index.m3u8'
    }, {
        no: 2,
        name: '时间牢笼',
        imgurl: '../imgs/banner/时间牢笼.jpg',
        url: 'https://yuledy.helanzuida.com/20200919/11222_05d38789/index.m3u8'
    }, {
        no: 3,
        name: '燕赤霞之五尾天蝎',
        imgurl: '../imgs/banner/燕赤霞之五尾天蝎.jpg',
        url: 'https://douban.donghongzuida.com/20200922/10079_e602b1dc/index.m3u8'
    }, {
        no: 4,
        name: '怪兽2',
        imgurl: '../imgs/banner/怪兽2.jpg',
        url: 'https://douban.donghongzuida.com/20200925/10148_d16c71cb/index.m3u8'
    }, {
        no: 5,
        name: '怪物先生',
        imgurl: '../imgs/banner/怪物先生.jpg',
        url: 'https://douban.donghongzuida.com/20200818/7672_35e409ad/index.m3u8'
    }, {
        no: 6,
        name: '劫后重生之宝藏之谜',
        imgurl: '../imgs/banner/劫后重生之宝藏之谜.jpg',
        url: 'https://xigua-cdn.haima-zuida.com/20200928/15017_ff0ef2db/index.m3u8'
    }, {
        no: 7,
        name: '我的女友是机器人',
        imgurl: '../imgs/banner/我的女友是机器人.jpg',
        url: 'https://douban.donghongzuida.com/20200919/9956_9c08c790/index.m3u8'
    }, {
        no: 8,
        name: '荞麦疯长',
        imgurl: '../imgs/banner/荞麦疯长.jpg',
        url: 'https://douban.donghongzuida.com/20200925/10155_bf78cc83/index.m3u8'
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
        name: '急先锋急先锋急先锋急先锋急先锋',
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
});

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

    // 点击海报事件
    $('#recommendImg').click(() => {
        let url = M3U8_API + recommendList[curr_slider_index]['url'];
        window.open(url);
    });

    // 右侧影片添加点击事件
    let recommend = $('.recommend-item');
    recommend.click((e) => {
        let no = e.target.attributes.recno.value - 0;
        let url = M3U8_API + recommendList[no]['url'];
        window.open(url);
    });

    // 添加鼠标移入事件
    recommend.mouseenter((e) => {
        let no = e.target.attributes.recno.value - 0;
        curr_slider_index = no;
        let curr = $('#recommendImg');
        curr.attr('src', recommendList[no].imgurl);
    });




}

// 加载首页影片
function loadMov() {

    let url = MOVIE.RANDOM;
    let param = {
        num: 16
    };

    let html = '';
    let itemHtml = `
    <a id="mov_1_{0}" class="movie-item" href="{1}" target="_blank">
        <img src="{2}" alt="" class="cover" title="{3}">
        <p class="name" title="{3}">{3}</p>
    </a>
    `;

    my_ajax(url, param, (e) => {
        console.log(e);
        // 成功
        if (e.code === 200) {
            let list = e.data;

            $.each(list, (index, item) => {
                let s = itemHtml;
                html += s.format(index, M3U8_API + item['url'], item['avatar'], item['moviename']);
            });
            $('#mov_1').html(html);

        } else {
            toastr.error(e.message);
        }
    });

    // 院线热映



}

