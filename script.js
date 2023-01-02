const owlCarousel = $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
});
owlCarousel.trigger("refresh.owl.carousel");

owlCarousel.on('translate.owl.carousel', function (e) {
    $('.owl-item .item video').each(function () {
        $(this).get(0).pause();
    });
});

owlCarousel.on('translated.owl.carousel', function (e) {
    if ($('.owl-item.active').find('video').length !== 0) {
        // alert($('.owl-item.active').find('video').length);
        $('.owl-item.active .item video').get(0).play();
    }
});

$('#navbarNav').on('hide.bs.collapse', function () {
    $('.menu-toggle').toggleClass('py-1');
    $('.show-menu').toggleClass('d-none');
    $('.hide-menu').toggleClass('d-none');
})

$('#navbarNav').on('show.bs.collapse', function () {
    $('.menu-toggle').toggleClass('py-1');
    $('.show-menu').toggleClass('d-none');
    $('.hide-menu').toggleClass('d-none');
})



// search field
$('.btn-search a').click(function () {
    const searchField = $('.search-field');
    if (!searchField.hasClass('show')) {
        searchField.addClass('show');
        searchField.removeClass('hide');
    } else {
        searchField.addClass('hide');
        searchField.removeClass('show');
    }

    if (searchField.hasClass('show')) {
        searchField.css('display', 'flex')
        window.setTimeout(function () {
            searchField.css('opacity', 1);
            searchField.css('transform', 'scale(1)');
        }, 0);
    }

    if (searchField.hasClass('hide')) {
        searchField.css('opacity', 0);
        searchField.css('transform', 'scale(0)');
        window.setTimeout(function () {
            searchField.css('display', 'none');
        }, 700);
    }
})

$('.navbar-toggler').addClass('d-none');
$('.btn-search').addClass('d-none');
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $('nav').addClass("navbar navbar-expand-lg bg-warning p-0 fixed-top");
        $('nav').removeClass('fixed');
        $('.menu-toggle').hide();
        $('.navbar-brand img').css({
            'width': '50px',
            'height': '50px'
        })
        $('.navbar-nav li:nth-last-child(1)').hide()
        $('.navbar-nav li:nth-last-child(2)').hide()
        $('.navbar-nav li:nth-last-child(3)').hide()
        $('.navbar-toggler').addClass('d-lg-none');
        $('.navbar-toggler').removeClass('d-none');
        $('.btn-search').addClass('d-lg-inline');
        $('header .content').addClass('animate');
    } else {
        $('nav').removeClass("navbar navbar-expand-lg bg-warning p-0 fixed-top");
        $('nav').addClass('fixed');
        $('.menu-toggle').show();
        $('.navbar-brand img').css({
            'width': '201px',
            'height': '165px'
        })
        $('.navbar-nav li:nth-last-child(1)').show()
        $('.navbar-nav li:nth-last-child(2)').show()
        $('.navbar-nav li:nth-last-child(3)').show()
        $('.navbar-toggler').addClass('d-none');
        $('.navbar-toggler').removeClass('d-lg-none');
        $('.btn-search').addClass('d-none');
        $('.btn-search').removeClass('d-lg-inline');
        $('header .content').removeClass('animate');
    }
})

$('#btn-readmore').click(function () {
    $('#news-items').append(`<div class="col-12 col-md-6 mt-3">
    <div class="news-item">
        <p class="text-muted mb-2">21 September 2015</p>
        <h2>LOREM IPSUM DOLOR SIT AMET</h2>
        <p>Lorem Ipsum
            <strong>8.00am to 10.45am</strong>. Members are to observe the dress code required
            at
            the Palms.</p>
        <p>Dress Code at The Palms</p>
        <p>Soiled or wet clothing and swimwear are not allowed</p>
    </div>
</div>
<div class="col-12 col-md-6 mt-3">
    <div class="news-item">
        <p class="text-muted mb-2">31 September 2015</p>
        <h2>LOREM IPSUM</h2>
        <p>Lorem Ipsum</p>
        <p>Monday - Wednesday & Friday : 3pm - 8pm</p>
        <p>Saturday & Sunday : 12pm - 8pm</p>
        <p>Thursday : CLOSED</p>
    </div>
</div>`);
})