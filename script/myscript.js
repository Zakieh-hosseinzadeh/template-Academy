$(function () {
    $('#filter a').click(function () {
        let className = $(this).attr('class')
        $('a.active').removeClass('active');
        $(this).addClass('active');
        if (className === 'all')
            $('.course').fadeIn(500)
        else
            $('.course').hide().filter('.' + className).fadeIn(500)
        return false;
    });
    $('#teacher-box').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]


    });
    $('.acc-title').click(function () {
        $('i.fa-angle-up').removeClass('fa-angle-up')

        if ($(this).next().is(":visible")) {
            $(this).find('i').removeClass('fa-angle-up')
        } else {
            $(this).find('i').addClass('fa-angle-up')
        }

        $(this).next().slideToggle('fast').siblings('.acc-content').slideUp('fast')
    })
    AOS.init();
})