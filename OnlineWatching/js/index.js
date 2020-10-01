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



// 入口函数
$(function () {
    loadRecommends();

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