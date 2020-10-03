// 入口函数
$(function () {

    // 获取关键词
    let id = location.search.split("=")[1];
    console.log(id);

    getUrl(id);


    // 搜索
    // let url = 'https://www.nxflv.com/?url=https://douban.donghongzuida.com/20200731/6515_1f4ce9c2/index.m3u8';
    // playVideo(url);
});


// 根据id请求链接并播放
function getUrl(id) {
    let url = LINK.SEARCH;
    let param = {
        movieid: id
    };

    my_ajax(url, param, (e) => {
        if (e.code === 200) {
            console.log(e);
            toastr.success(e.message);

            let u = M3U8_API + e.data[0]['link'];
            console.log(u);

            playVideo(u);

        } else {
            toastr.error(e.message);
        }
    });
}


/**
 * 加载播放影片
 * @param {*} url 全url
 */
function playVideo(url) {
    console.log('播放 ' + url);
    let html = '<embed type="" src="{0}">'.format(url);
    $('.play-div').html(html);
}