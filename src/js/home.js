/**
 * Created by zhenguang.zhu on 14-2-28.
 */
(function () {
    $('#datepicker').datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        autoclose: true
    });

    $('button#login_button').unbind('click').click(function(e) {
        $('div#login-modal').modal();
    });
})();