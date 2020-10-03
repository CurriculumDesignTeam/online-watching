// 入口函数
$(function () {

    loadEvents();

    switchTab();
});

// 切换用户和管理界面
function switchTab() {
    $('#userLogin').click(() => {
        $('#userLogin').attr('class', 'active');
        $('#adminLogin').attr('class', 'inactive');
        $('.user').show();
        $('.admin').hide();
    });


    $('#adminLogin').click(() => {
        $('#adminLogin').attr('class', 'active');
        $('#userLogin').attr('class', 'inactive');
        $('.admin').show();
        $('.user').hide();
    });
}

// 添加事件
function loadEvents() {

    // 用户登录
    $('#userForm').submit(() => {
        let username = $('#userUsername').val();
        let password = $('#userPassword').val();
        let url = ACCOUNT.LOGIN;
        let param = {
            account: username,
            pwd: password,
            type: 2
        };
        my_ajax(url, param, (e) => {
            if (e.code === 200) {
                window.location.href = 'index.html';
            }
            else {
                toastr.error(e.message);
            }
        });

        return false;
    });

    // 管理员登录
    $('#adminForm').submit(() => {
        let username = $('#adminUsername').val();
        let password = $('#adminPassword').val();
        let url = ACCOUNT.LOGIN;
        let param = {
            account: username,
            pwd: password,
            type: 1
        };
        my_ajax(url, param, (e) => {
            if (e.code === 200) {
                window.location.href = 'admin.html';
            }
            else {
                toastr.error(e.message);
            }
        });

        return false;
    });
}