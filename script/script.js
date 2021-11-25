$(function(){
    $('.bar_menu ul .depth01').click(function(){
        $('.header_in').css({'top':'0'});
    });

    $('.header_menu, .wrap').click(function(){
        $('.header_in').css({'top':'-355px'});
    });
    /* header 메뉴 업다운 */

    $('.main_visual').slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
    });/* main_visual 슬릭슬라이드 */

    $('.content02_list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });/* cont02 아이스크림 슬릭슬라이드 */



});/* jquery end */