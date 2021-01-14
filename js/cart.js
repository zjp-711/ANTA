$(function() {

    const nickname = getCookie('nickname')
    console.log(nickname)
        // if (!nickname) return window.location.href = '../pages/login.html'

    const cart = JSON.parse(window.localStorage.getItem('cart')) || []
    console.log(cart.length)
    if (!cart.length) {
        $('.on').addClass('hide')
        $('.off').removeClass('hide')
        return
    }

    $('.off').addClass('hide')
    $('.on').removeClass('hide')

    bindHtml()

    function bindHtml() {
        const selectAll = cart.every(item => item.is_select == '1')
        let total = 0
        let totalMoney = 0

        cart.forEach(item => {
            if (item.is_select == '1') {
                total += item.cart_number - 0
                totalMoney += item.cart_number * item.goods_price
            }
        })
        let aitm = `我的购物车<p>共${ total }件</p>`
        $('.header-p').html(aitm)
        let str = `
      <div class="panel panel-info">
        <div class="panel-heading">
        <span class="all-checked">全选:</span>
        <input type="checkbox" ${ selectAll ? 'checked' : '' }>
        </div>
        <div class="panel-body">
          <ul class="goodsList">
    `

        cart.forEach(item => {
            str += `
        <li>
          <div class="select">
            <input data-id="${ item.goods_id }" type="checkbox" ${ item.is_select === '0' ? '' : 'checked' }>
          </div>
          <div class="goodsImg">
            <img src="${ item.goods_small_logo }" alt="">
          </div>
          <div class="goodsDesc">
            <p>${ item.goods_name }</p>
            <i>数量</i>
            <button class="subNum" data-id="${ item.goods_id }">-</button>
            <input type="text" value="${ item.cart_number }">
            <button class="addNum" data-id="${ item.goods_id }">+</button>
          </div>
          <div class="price">
          </div>
          <div class="count">
          </div>
          <div class="operate">
          <span class="text-danger">￥${ item.goods_price }</span>
            <button class="btn  del" data-id="${ item.goods_id }">删除</button>
          </div>
        </li>
      `
        })

        str += `
          </ul>
          
    `
        $('.on').html(str)
        let fol = `
        <div class="panel-heading">
        <input type="checkbox" ${ selectAll ? 'checked' : '' }>
        <span class="all-checked">全选:</span>
        </div>
        <p class="col-sm-4 buyMoney">
            总价: <span class="text-danger total">${ totalMoney.toFixed(2) }</span> 元
        </p>
        <p class="col-sm-4 operate">
            <button class="btn btn-success" ${ totalMoney===0 ? 'disabled' : '' }>立即付款</button>
        </p>


        `
        $('.foot-top').html(fol)
    }

    $('.on').on('click', '.select > input', function() {
        const type = this.checked
        const id = $(this).data('id')

        const info = cart.filter(item => item.goods_id == id)[0]
        info.is_select = type ? '1' : '0'
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })

    $('.on').on('click', '.all-checked + input', function() {

        const type = this.checked
        cart.map(item => item.is_select = type)
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
        if (!type) {
            cart.map(item => item.is_select = '0')
        }
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })

    $('.on').on('click', '.btn-danger', function() {
        cart.splice(0, cart.length)
        $('.on').removeClass('hide')
        window.location.reload()
        bindHtml()
        window.localStorage.setItem('cart', JSON.stringify(cart))
    })


    $('.on').on('click', '.btn-primary', function() {

        window.location.href = '../list.html'

    })

    $('.on').on('click', '.addNum', function() {
        const id = $(this).data('id')
        const info = cart.filter(item => item.goods_id == id)[0]
        info.cart_number = info.cart_number - 0 + 1
        bindHtml()

        window.localStorage.setItem('cart', JSON.stringify(cart))
    })

    $('.on').on('click', '.subNum', function() {
        const id = $(this).data('id')

        const info = cart.filter(item => item.goods_id == id)[0]

        if (info.cart_number === 1) return

        info.cart_number = info.cart_number - 0 - 1

        bindHtml()

        window.localStorage.setItem('cart', JSON.stringify(cart))

    })

    $('.on').on('click', '.del', function() {
        const id = $(this).data('id')
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].goods_id == id) {
                cart.splice(i, 1)
                break
            }
        }
        bindHtml()

        window.localStorage.setItem('cart', JSON.stringify(cart))

        if (!cart.length) return window.location.reload()
    })
})
