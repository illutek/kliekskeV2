/**
 * Created by Stefan on 7/03/2018.
 */
(function ($) {
    $(document).ready(function () {

        $('.management__bcg').on('click', function(e) {
            if (e.target !== this)
                return;

            window.location.hash = 'contact';
        });

    });
})(jQuery);