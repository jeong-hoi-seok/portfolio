$(document).ready(function(){
    navClick();
    conimg();
    clickImage();
});
$(window).scroll(function(){
    scroll();
})
function scroll() {
    var pager = $("nav ul li");
    var cont = $("#wrap>*");
    var bar = $("nav span");
    var sct = $(window).scrollTop();
    var tex = $('.textani');
    var texX = $('.textaniX')

    cont.each(function () {
        var tg = $(this);
        var i = tg.index();
        var t = i * 30
        if (tg.offset().top <= sct) {
            pager.removeClass("on");
            pager.eq(i).addClass("on");
            bar.css({
                'transform': 'translateY('+ t +'px)'
            })
        };
    });
    tex.each(function(){
        var tg = $(this);
        if(tg.offset().top - 754 <= sct){
            tg.addClass("paraFadeIn")
        }
    })
    // Y animation
    texX.each(function(){
        var tg = $(this);
        if(tg.offset().top - 754 <= sct){
            tg.addClass("paraFadeInX")
        }
    })
    // X animation
}
function navClick() {
    var pager = $("nav ul li")
    var cont = $("#wrap>*")
    pager.click(function(){
        var act = $(this).index()
        var top = $("html , body").scrollTop();
        var ttg = cont.eq(act).offset().top;
        if(top == 0) {top=$("body").scrollTop()}
        $("html , body").stop().animate({scrollTop:ttg },400);
    })
}
function conimg(){
    var img = $('.btn-img img')
    var btnact = $('#t-c-style-guide > div div:first-of-type ul li')
    // console.log(btnact)
    $('#btn-desk').click(function(){
        btnact.removeClass()
        img.removeClass()
        $(this).addClass('btn-active')
        img.eq(0).addClass('visible')
    })
    $('#btn-tab').click(function(){
        btnact.removeClass()
        img.removeClass()
        $(this).addClass('btn-active')
        img.eq(1).addClass('visible')
    })
    $('#btn-mob').click(function(){
        btnact.removeClass()
        img.removeClass()
        $(this).addClass('btn-active')
        img.eq(2).addClass('visible')
    })
}
function clickImage(){
    $(".img-con").click(function(){
       var tg = $(this)
        tg.siblings('.popup').find('.imgshow').fadeIn()
        $('.otherDesign-overlay').show()
    })
    $(".otherDesign-overlay").click(function(){
        $('.imgshow').fadeOut()
        $(this).hide()
    })
    $('.imgshow').click(function(){
        if($(this).is(':visible') == true){
            $('.imgshow').fadeOut()
            $(".otherDesign-overlay").hide()
        }
    })
}
