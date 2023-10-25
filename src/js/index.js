var elementoDuvida = document.querySelectorAll('.duvida')

elementoDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})


function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./src/assets/menu_white_24dp.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./src/assets/close_white_24dp.svg"
    }
}