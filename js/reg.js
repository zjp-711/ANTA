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

const inp = document.querySelector('.input-group')
const ul = document.querySelector('.input-ul')
inp.addEventListener('input', function() {
    const value = this.value.trim()
    if (!value) {
        ul.classList.remove('input-li')
        return
    }
    const script = document.createElement('script')
    const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,32857,33124,33061,32973,33099,33101,32962,22159&wd=${value}&req=2&csor=1&cb=bindHtml&_=1605768936993`
    script.src = url
    document.body.appendChild(script)
    script.remove()
})

function bindHtml(res) {
    if (!res.g) {
        ul.classList.remove('input-li')
        return
    }
    let str = ''
    str += `<li>${res.g[0].q}</li>`
    ul.innerHTML = str
    ul.classList.add('input-li')
}





$('.head-box > a').click(function() {
    $(this).attr('id', 'heada').siblings().removeAttr('id')
    $(this).next().attr('id', 'headspan')
    $('.wrap>p').removeAttr('class').eq($(this).index() / 2).attr('class', 'reg-one')
    $('.reg-1').removeAttr('id').eq($(this).index() / 2).attr('id', 'wrap-reg')
    $('form').removeAttr('id').eq($(this).index() / 2).attr('id', 'login')
})

$('.inputbg-a').click(function() {
    $('.layui-layer').css('display', 'block')
    $('.layui-layer-shade').css('display', 'block')
})

$('.layui-layer-btn > a').click(function() {
    $('.layui-layer').css('display', 'none')
    $('.layui-layer-shade').css('display', 'none')
    if ($(this).index() === 0) {
        $('.input').prop('checked', true)
        $('.login-btn').removeAttr('disabled')
    }
    console.log($('.login-btn'))

})


$(function() {
    $('#login').validate({

        submitHandler(form) {
            const info = $(form).serialize()
            $.post('../server/loginAdd.php', info, null, 'json').then(res => {
                console.log(res)
                if (res.code === 0) {
                    $('.login_error').removeClass('hide')
                } else if (res.code === 1) {

                    setCookie('nickname', res.nickname)

                    window.location.href = '../index.html'
                }
            })
        }
    })
})
