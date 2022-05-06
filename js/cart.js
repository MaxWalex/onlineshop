let cart;

let totalOfCount = document.querySelectorAll('.cartIcon_count')

window.addEventListener('DOMContentLoaded', () => {
    let countProductsInCart = JSON.parse(localStorage.getItem('cart'))
    // count of numer products
    totalOfCount[0].innerHTML = countProductsInCart.length;
    totalOfCount[1].innerHTML = countProductsInCart.length;

})

document.querySelector('main').addEventListener('click', e => {
    e.preventDefault()
    let elTarget = e.target

    if (elTarget.classList.contains('addToCart')) {

        let product = elTarget.parentElement

        let createProductLocalStorage = {
            name: product.querySelector('.pro_name').innerText,
            price: product.querySelector('.pro_price').innerText,
            imageLink: product.querySelector('img').src,
            id: product.id,
            count: 1
        }

        saveToLocalStorage(createProductLocalStorage)
    }
})

// Local Storage

function checkLocalStorage() {

    if (localStorage.getItem('cart') === null) {
        cart = []
    } else {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

function saveToLocalStorage(objProduct) {

    checkLocalStorage()


    cart.push(objProduct)
    localStorage.setItem('cart', JSON.stringify(cart))

    let countProductsInCart = JSON.parse(localStorage.getItem('cart'))

    // count of numer products
    totalOfCount[0].innerHTML = countProductsInCart.length;
    totalOfCount[1].innerHTML = countProductsInCart.length;
}

// Local Storage END

let cartWrapper

const conclusionProdusts = () => {
    let products = JSON.parse(localStorage.getItem('cart'))

    let createProduct

    products.forEach(item => {
        createProduct = `
        <tr id="${item.id}">
            <td style="text-align: center;"><a href="#"><i class="fa-solid fa-circle-xmark"></i></a></td>
            <td><img src="${item.imageLink}" alt=""></td>
            <td class="itemName">${item.name}</td>
            <td><select>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="S">S</option>
                    <option value="L">L</option>
                </select></td>
            <td class="itemPrice">${item.price}</td>
            <td class="itemCount"><input type="number" min="1" value="${item.count}"></td>
            <td class="itemSubTotal">${!item.summ ? item.price : item.summ}</td>
        </tr>
        `;

        cartWrapper.insertAdjacentHTML('beforeend', createProduct)
    });
} 

if (document.querySelector('.cart tbody')) {
    cartWrapper = document.querySelector('.cart tbody')
    conclusionProdusts()
}

const productsOfCart = document.querySelectorAll('.cart tbody tr')

productsOfCart.forEach(item => {
    let price = item.querySelector('.itemPrice'),
        count = item.querySelector('.itemCount input'),
        subTotal = item.querySelector('.itemSubTotal')
    
    count.addEventListener('change', (event) => {

        let pr = Number(price.innerText.slice(1))
        let sum = Number(event.target.value)
        
        subTotal.innerText = `$${pr * sum}`

        checkLocalStorage()
        cart.forEach(el => {
            if (item.id === el.id) {
                el.count = Number(count.value)
                el.summ = subTotal.innerText
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
    })  
})


// localStorage.clear()