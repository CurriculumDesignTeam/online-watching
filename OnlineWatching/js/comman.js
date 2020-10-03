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

        console.log(url);

        window.location.href = url;

        return false;
    });

}