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


 $(function() {

     $('#login').validate({
         rules: {
             username: {
                 required: true,
                 minlength: 5,
                 maxlength: 10
             },
             password: {
                 required: true,
                 minlength: 6,
                 maxlength: 12
             }
         },
         messages: {
             username: {
                 required: '请填写用户名信息',
                 minlength: '最少 5 个字符',
                 maxlength: '最多 10 个字符'
             }
         },
         submitHandler(form) {
             const info = $(form).serialize()
             $.post('../server/login.php', info, null, 'json').then(res => {
                 if (res.code === 0) {
                     $('.login_error').removeClass('login-error')
                 } else if (res.code === 1) {
                     setCookie('nickname', res.nickname)
                     window.location.href = '../pages/index.html'
                 }
             })
         }
     })

 })

 