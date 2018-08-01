/**!
 Agence'O Scripts
 Divers scripts

 @contributors: Guillaume Bouillon (Agence'O)
 @date-created: 2016-06-13
 @last-update: 2016-07-05
 */

;(function ($) {

    // Modules functions
    $.fn.firstWord = function (numWords) {
        var node = this.contents().filter(function () {
                return this.nodeType == 3
            }).first(),
            text = node.text(),
            first = text.split(" ", numWords).join(" ");

        if (!node.length)
            return;

        node[0].nodeValue = text.slice(first.length);
        node.before('<span class="first-word">' + first + '</span>');
    };

    // delete class cxp-swiper for mobile device

    $('.cxp-swiper').removeClass('cxp-swiper');

    // add data attr to easiest blocks' control
    $.each($('#zone1 .block'), function (index, item) {
        $(item).attr('data-zone1', index);
    });

    $.each($('#zone2 .block'), function (index, item) {
        $(item).attr('data-zone2', index);
    });

    // move block
    $('.front #zone2 .block[data-zone2="1"]').prependTo('#zone2');
    $('.front .site-banner .page-header').next().prependTo('.block[data-zone2="1"]');

    // init sliders mobile homepage
    $('.la-slider .slider-content').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2500

    });

    $('.la-swiper .slider-content').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1,
        //focusOnSelect: true,
        swipeToSlide: true
    });

    $('.custom-goals .grid-la-list').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1,
        //focusOnSelect: true
    });

    /**
     * Newsletter Popin
     */
    var $newsletterForm = $('.newsletter-form');
    var $newsletterFormBtn = $('.sl-link-newsletter');
    if($newsletterForm.size() == 0) {
        $newsletterFormBtn.parent().hide();
    }
    var $nfCloseBtn = $('<div />').text('Close').addClass('btn-close').click(function (e) {
        e.preventDefault();
        $newsletterForm.hide().removeClass('is-open');
    });
    $newsletterForm.find('.nf-main-content').prepend($nfCloseBtn);
    $newsletterForm.click(function (e) {
        if ($(e.target).hasClass('is-open')) {
            $nfCloseBtn.click();
        }
    });
    $newsletterFormBtn.click(function (e) {
        e.preventDefault();
        $newsletterForm.show().addClass('is-open');
        $newsletterForm.find('.nf-form-input input').focus();
    });

})(jQuery);
