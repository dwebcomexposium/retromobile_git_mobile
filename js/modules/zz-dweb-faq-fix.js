;
(function($) {

$('.js-sna-item-link').off('click.sna').on('click.sna', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        if ($('.icon-plus', this).length > 0) {
            $('.icon-plus', this).addClass('icon-minus').removeClass('icon-plus');
            $(this).closest('.js-sna-item').children('.js-sna-item-content').addClass('is-open');
        } else if ($('.icon-minus', this).length > 0) {
            $('.icon-minus', this).removeClass('icon-minus').addClass('icon-plus');
            $(this).closest('.js-sna-item').children('.js-sna-item-content').removeClass('is-open');
        }
 });
    
  })(jQuery);
