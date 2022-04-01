const bar = document.querySelector('#bar'),
    nav = document.querySelector('#navbar'),
    close = document.querySelector('#close')

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