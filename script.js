const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-menu')


hamburger.addEventListener('click', mobilemenu)

function mobilemenu(){
    hamburger.classList.toggle('active')
    navbar.classList.toggle('active')
}

const navlink = document.querySelectorAll('.nav-link')

navlink.forEach(nav => n.addEventListener('click', closeMenu))

function closeMenu(){
    hamburger.classList.remove('active')
    navbar.classList.remove('active')
}