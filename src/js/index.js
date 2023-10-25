var elementoDuvida = document.querySelectorAll('.duvida')

elementoDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})


function clickMenu() {
    if(nav.style.display == 'block'){
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
}