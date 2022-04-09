const bar = document.querySelector('#bar'),
    nav = document.querySelector('#navbar'),
    close = document.querySelector('#close')

const menuHeader = () => {
    if (bar) {
        bar.addEventListener('click', (e) => {
            e.preventDefault()
            nav.classList.add('active')
        })
    }
    
    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault()
            nav.classList.remove('active')
        })
    }
}

menuHeader()


window.addEventListener('DOMContentLoaded', () => {

    // fetch
    const request = async (url, method, headers, body) => {
        
        const res = await fetch(url, {
            method: method,
            headers: headers === ' ' ? undefined : headers,
            body: body
        })
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status} `)
        }
    
        return await res
    }
    
    
    request('../products.json', 'GET', {'Content-Type': 'application/json'})
        .then(response => response.json())
        .then(data => {
            createFeatureProduct(data) 
            createArivalProduct (data)
            showAllProducts(data)
        })
        .catch(err => console.log(err))

        // create card layout
    function bulidCardLayout(product) {
        let card
            
        return card = `
        <div class="pro">
            <a href="/sproduct.html"><img src="${product.photo}" alt=""></a>
            <div class="des">
                <span>${product.brand}</span>
                <a href="/sproduct.html"><h5>${product.name}</h5></a>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4>${product.price}</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
        `
    }

     // create product of feature
    function createFeatureProduct (data) {
        const fProducts = document.querySelector('.feature_products')

        if (fProducts){
            data.featureProducts.forEach(product => {
                fProducts.insertAdjacentHTML('beforeend', bulidCardLayout(product))
            });
        }
    }

    // create product of arival
    function createArivalProduct (data) {
        const arivalProducts = document.querySelector('.arivals_prodcuts')

        if (arivalProducts) {
            data.arivalProducts.forEach(product => {
                arivalProducts.insertAdjacentHTML('beforeend', bulidCardLayout(product))
            });
        }
    }

    // show all products on shop page
    function showAllProducts(data) {
        const shopProducts = document.querySelector('.shop_products')

        if (shopProducts) {
            console.log(data)
            data.featureProducts.forEach(product => {
                shopProducts.insertAdjacentHTML('beforeend', bulidCardLayout(product))
            });

            data.arivalProducts.forEach(product => {
                shopProducts.insertAdjacentHTML('beforeend', bulidCardLayout(product))
            });
        }
    }

    // subscribe to newsletter
    const newslettersForm = document.querySelector('#newsletters')

    const sendLetter = (e) => {
        
        e.preventDefault()

        let formData = new FormData(newslettersForm)

        
        request('../newsletter.php', 'POST', ' ', formData)
            .catch(err => console.log(err))
    }
    
    newslettersForm.addEventListener('submit', e => sendLetter(e))
})





