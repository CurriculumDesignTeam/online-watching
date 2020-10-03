// 入口函数
$(function () {
    loadOther();

});


// 绑定顶部搜索事件
function loadOther() {
    let searchForm = $('#searchForm');

    searchForm.submit(() => {
        console.log('submit');

        // 获取输入
        let text = $('#searchInput').val().trim();

        // 跳转到搜索页面
        let url = 'search.html' + '?keyword=' + text;

        window.location.href = url;

        return false;
    });

}


// 根据视频列表渲染视频
function renderVideoList(divId, list) {
    let div = $('#' + divId);
    let html = '';
    let itemHtml = `
    <a id="mov_1_{0}" class="movie-item" href="{1}" target="_blank">
        <img src="{2}" alt="" class="cover" title="{3}">
        <p class="name" title="{3}">{3}</p>
    </a>
    `;

    $.each(list, (index, item) => {
        let s = itemHtml;
        let href = 'play.html?id=' + item['movieid'];
        html += s.format(index, href, item['avatar'], item['moviename']);
    });

    div.html(html);

}