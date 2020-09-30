const recommendList = [
    {
        name: '猎龙队',
        imgurl: '',
        url: ''
    }, {
        name: '地宫笔记之五百龙首',
        imgurl: '',
        url: ''
    }, {
        name: '时间牢笼',
        imgurl: '',
        url: ''
    }, {
        name: '燕赤霞之五尾天蝎',
        imgurl: '',
        url: ''
    }, {
        name: '怪兽2',
        imgurl: '',
        url: ''
    }, {
        name: '怪物先生',
        imgurl: '',
        url: ''
    }, {
        name: '劫后重生之宝藏之谜',
        imgurl: '',
        url: ''
    }, {
        name: '我的女友是机器人',
        imgurl: '',
        url: ''
    }, {
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
    <li>
        <p>{0}</p>
    </li>`;
    let html = '';
    $.each(recommendList, (index, item) => {
        let s = str;
        html += s.format(item['name']);
    });
    recommends.html(html);
}