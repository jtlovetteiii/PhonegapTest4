angular.module('hello4').factory('Info', ['$q', function ($q) {
    function init() {
        toastr.options = {
//            "closeButton": false,
//            "debug": false,
            "positionClass": "toast-bottom-right",
//            "onclick": null,
//            "showDuration": "300",
//            "hideDuration": "1000",
//            "timeOut": "5000",
//            "extendedTimeOut": "1000",
//            "showEasing": "swing",
//            "hideEasing": "linear",
//            "showMethod": "fadeIn",
//            "hideMethod": "fadeOut"
        }
    };

    function info(title, message) {
        init();
        toastr.info(message, title);
    };

    function success(title, message) {
        init();
        toastr.success(message, title);
    };

    function warning(title, message) {
        init();
        toastr.warning(message, title);
    };

    function error(title, message) {
        init();
        toastr.error(message, title);
    };
	
    return {
        info: info,
        success: success,
        warning: warning,
        error: error
    };
} ]);