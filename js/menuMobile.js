//FUNÇÃO QUE EXIBE O MENU NO CELULAR
const btnHamb = document.getElementById('menu-hamb')
const menuMobile = document.getElementById('links-mobile')

function mostrarMenuMobile() {
    menuMobile.style.display = menuMobile.style.display === 'block' ? 'none' : 'block';

    if (menuMobile.style.display == 'block') {
        btnHamb.innerHTML = '<i class="fa-solid fa-close" style="color: var(--blackcolor); scale: 2;"></i>'
    }
    else {
        btnHamb.innerHTML = '<i class="fa-solid fa-bars" style="scale: 2; color: var(--blackcolor);"></i>'
    }
}

btnHamb.addEventListener('click', mostrarMenuMobile)
