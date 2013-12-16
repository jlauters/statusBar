/* Simple Global Status Bar
 * For displaying success / error
 * messages to users */

(function($) {

    statusBar = function(msg, isError) {
        full_msg = "";
        isError = isError || false;

        if(!isError) {
            full_msg = '<div class="success-msg"><i class="fa fa-icon-ok-sign"></i> ' + msg + '</div>';
        } else {
            full_msg = '<div class="error-msg"><i class="fa fa-icon-remove-sign"></i> ERROR: ' + msg + '</div>';
        }

        $('#status-bar').html(full_msg);
        $('#status-bar').fadeIn();

        setTimeout(function() {
            $('#status-bar').fadeOut();
        }, 8000);

    }

})(jQuery);
