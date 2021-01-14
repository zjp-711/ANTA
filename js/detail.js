$(function() {

    let info = null

    const id = getCookie('goods_id')

    getGoodsInfo()

    async function getGoodsInfo() {
        const goodsInfo = await $.get('../server/getGoodsInfo.php', { goods_id: id }, null, 'json')

        bindHtml(goodsInfo.info)

        info = goodsInfo.info
    }

    function bindHtml(info) {
        $('.goodsDetail').html(`  <img src="${ info.goods_big_logo }" alt="" class="bigImg">`)
        $('.enlargeBox').html(`
        <div class="list">
          <p class="active">
            <img src="${ info.goods_small_logo }" alt="">
          </p>
        </div>
        <div class="show">
        <img src="${ info.goods_big_logo }" alt="" chass="imgBox">
        <div class="upBox"></div>
        </div>
      `)

        // 2. 商品详细信息渲染
        $('.goodsInfo').html(`
        <p class="desc">${ info.cat_two_id }</p>
        <h3>${info.goods_name}</h3>
        <h3>￥${info.goods_price}</h3>
        <i>立减5元满199减10满259减20满359减30<br>
        官方商城全场包邮</i><br>
        <div class="btn-group size">
          <button type="button" class="btn btn-default">S</button>
          <button type="button" class="btn btn-default">M</button>
          <button type="button" class="btn btn-default">L</button>
          <button type="button" class="btn btn-default">XL</button>
        </div>
        <p class="price">
         
        </p>
        <div class="num">
          <button class="subNum">-</button>
          <input type="text" value="1" class="cartNum">
          <button class="addNum">+</button>
        </div>
        <div>
          <button class="btn btn-success addCart">加入购物车</button>
          <button class="btn btn-warning continue"><a href="./list.html">继续去购物</a></button>
        </div>
      `)

        $('.goodsDesc').html(info.goods_introduce)
        move()
    }

    $('goodsInfo').on('click', '.addCart', function() {

        const cart = JSON.parse(window.localStorage.getItem('cart')) || []

        const flag = cart.some(item => item.goods_id === id)

        if (flag) {
            const cart_goods = cart.filter(item => item.goods_id === id)[0]
            cart_goods.cart_number = cart_goods.cart_number - 0 + ($('.cartNum').val() - 0)
        } else {
            info.cart_number = 1
            cart.push(info)
        }
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })

    $('goodsInfo').on('click', '.subNum', function() {
        let num = $('.cartNum').val() - 0
        if (num === 1) return

        $('.cartNum').val(num - 1)
    }).on('click', '.addNum', function() {
        let num = $('.cartNum').val() - 0
        $('.cartNum').val(num + 1)
    })

})

function move() {
    console.log($('.imgBox'))

    $('.show').on('mouseover', function() {
        $('.upBox').css('display', 'flex')
        $('.goodsDetail').css('display', 'flex')
    })
    $('.show').on('mouseout', function() {
        $('.upBox').css('display', 'none')
        $('.goodsDetail').css('display', 'none')
    })


    const show = document.querySelector('.show > img')
    const upBox = document.querySelector('.upBox')
    const bigImg = document.querySelector('.bigImg')
    console.log(bigImg)
    console.log(upBox)
    show.addEventListener('mousemove', e => {
        e = e || window.event

        let x = e.offsetX - 50
        let y = e.offsetY - 50


        if (x <= 0) x = 0
        if (y <= 0) y = 0

        if (x >= 400) x = 350
        if (y >= 400) y = 350
        upBox.style.left = x + 'px'
        upBox.style.top = y + 'px'

        const bgx = x * 1.77777778
        const bgy = y * 1.77777778
        bigImg.style.right = bgx + 'px'
        bigImg.style.bottom = bgy + 'px'
        console.log(bgx, bgy)
    })
}

