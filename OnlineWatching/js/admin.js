// 入口函数
$(function () {
    loadMovies();
});


function loadMovies() {

    let url = MOVIE.SEARCH;
    let param = {
        searchword: ' '
    };

    my_ajax(url, param, (e) => {
        if (e.code === 200) {
            toastr.success('查询成功');

            renderMovies(e.data);
        } else {
            toastr.error(e.message);
        }
    });

}


function renderMovies(list) {
    console.log(list);

    let html = '';
    let foramt = `
    <tr>
        <td>
            <label>
                <input type="checkbox" />
            </label>
            {0}
        </td>
        <td id="id">{1}</td>
        <td id="name" title="{2}">{2}</td>
        <td id="type">{3}</td>
        <td id="language">{4}</td>
        <td id="time">{5}</td>
        <td>OK</td>
        <td class="options">
            <span tno="0" class="delete">删除</span>
        </td>
    </tr>
    `;
    $.each(list, (index, item) => {
        // console.log(item);
        let s = foramt;
        html += s.format(index + 1,
            item['movieid'],
            item['moviename'],
            item['type'],
            item['language'],
            item['time']);
    });

    $('#tbody').html(html);
}