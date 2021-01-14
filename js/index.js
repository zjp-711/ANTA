//下拉列表 移入移出事件


$('.navul > ul > li').mouseover(function() {
    $('.tow-boxl').css('display', 'none').eq($(this).index()).css('display', 'flex').parent().css('display', 'flex')
})

$('.navul > ul > li').mouseout(function() {
    $('.tow-box').css('display', 'none')
})
$('.tow-boxl').mouseover(function() {
    $(this).css('display', 'flex').parent().css('display', 'flex')
})
$('.tow-boxl').mouseout(function() {
    $('.tow-box').css('display', 'none')
})

//四个明星  移入事件
$('.hoverup-box > ul > li> a').hover(function() {

    $(this).children().eq(1).finish().animate({ 'opacity': '0.4' }).next().finish().animate({ 'margin-top': '-60px', 'opacity': '1' }, 1000)
}, function() {
    $(this).children().eq(1).stop().animate({ 'opacity': '0' }).next().stop().animate({ 'margin-top': '0px', 'opacity': '0' }, 500)
})

//7个热销产品进度条
let index1 = 0
$('.swiper-wrapper').attr('index1', index1)
$('.swiper-button-prev').click(function() {

    index1 = $('.swiper-wrapper').attr('index1')
    console.log(index1)
    index1++
    if (index1 >= 3) {
        index1 = 3
        $('.swiper-wrapper').animate({ 'left': (index1 * -328.5 + 80) })
        $('.progress-bar').css({ 'width': (index1 + 1) * 25 + '%' })
    } else {
        $('.swiper-wrapper').animate({ 'left': (index1 * -328.5) })
        $('.progress-bar').css({ 'width': (index1 + 1) * 25 + '%' })
    }
    $('.swiper-wrapper').attr('index1', index1)
})
$('.swiper-button-next').click(function() {

    index1 = $('.swiper-wrapper').attr('index1')
    console.log(index1)
    if (index1 <= 0) {
        index1 = 0
    } else {
        index1--
    }
    $('.swiper-wrapper').animate({ 'left': (index1 * -328.5) })
    $('.swiper-wrapper').attr('index1', index1)
    $('.progress-bar').css({ 'width': (index1 + 1) * 25 + '%' })
})


$('.main-ww').hover(function() {
    $('.main-ft > img').css('display', 'flex').next().css('display', 'flex')
}, function() {
    $('.main-ft > img').css('display', 'none').next().css('display', 'none')
})

