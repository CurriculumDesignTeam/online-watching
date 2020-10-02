/**
 * 字符串格式化辅助
 */
String.prototype.format = function (args) {
    let result = this;
    if (arguments.length > 0) {
        if (arguments.length === 1 && typeof (args) == "object") {
            for (let key in args) {
                if (args.key !== undefined) {
                    let reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args.key);
                }
            }
        } else {
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    let reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};


/**
 * 根据jquery的ajax封装常用的ajax
 * @param url url
 * @param param 参数
 * @param success 成功回调
 * @param error 失败
 */
function my_ajax(url, param, success, error) {
    // 判断是否传入success
    if (!success) {
        success = (e) => {
            toastr.success(e.message);
        };
    }
    // 判断是否传入error
    if (!error) {
        error = () => {
            toastr.error('服务器异常');
        }
    }
    // noinspection JSUnresolvedVariable
    jQuery.ajax({
        type: "POST",
        url: url,
        data: param,
        traditional: true,
        timeout: 5000,
        success: success,
        error: error
    });

}