function setCookie(key, value, expires) {
    if (!expires) return document.cookie = key + '=' + value

    const time = new Date()
    time.setTime(time.getTime() - 1000 * 60 * 60 * 8 + 1000 * expires)
    document.cookie = `${key}=${value};expires=` + time
}

function getCookie(key) {
    const obj = {}

    const tmp = document.cookie.split('; ')
    tmp.forEach(item => {
        const t = item.split('=')
        obj[t[0]] = t[1]
    })

    return key ? obj[key] : obj
}

const nickname = getCookie('nickname')
if (nickname) {
    $('.header-top').children().eq(0).html('你好!' + nickname)
}



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



