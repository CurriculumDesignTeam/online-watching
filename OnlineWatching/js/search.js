
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
        console.log(e);
        toastr.success(e.message);
    });

    
}


