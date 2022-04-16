
    window.addEventListener('DOMContentLoaded', checkLocalStorage)
    // checkLocalStorage()
    
    let totalOfCount = document.querySelectorAll('.cartIcon_count')
    
    document.querySelector('main').addEventListener('click', e => {
        e.preventDefault()
        let elTarget = e.target
    
        if (elTarget.classList.contains('addToCart')) {
    
            let product = elTarget.parentElement
    
            let createProductLocalStorage = {
                name: product.querySelector('.pro_name').innerText,
                price: product.querySelector('.pro_price').innerText,
                imageLink: product.querySelector('img').src,
                id: product.id
            }
    
            saveToLocalStorage(createProductLocalStorage)         
        }
    })
        
    let cart;
    
    function checkLocalStorage() {    
        
        if (localStorage.getItem('cart') === null) {
            cart = []
        } else {
            cart = JSON.parse(localStorage.getItem('cart'))
    
            let countProductsInCart = JSON.parse(localStorage.getItem('cart'))

            // count of numer products
            totalOfCount[0].innerHTML = countProductsInCart.length;
            totalOfCount[1].innerHTML = countProductsInCart.length;
        }
    }
    
    function saveToLocalStorage(objProduct) {
        
        checkLocalStorage()
    
        cart.push(objProduct)
        localStorage.setItem('cart', JSON.stringify(cart))
    }    
