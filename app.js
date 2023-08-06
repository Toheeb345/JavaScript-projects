const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.dropdown');

ham.addEventListener('click', () => {
    nav.classList.toggle('active')
    if(nav.classList.contains('active')){
        ham.src = './images/icon-close.svg'
        document.body.style.overflow = "hidden"
        document.querySelector('.dax').style.filter = "blur(3px)"
    } else {
        ham.src = './images/icon-hamburger.svg'
        document.body.style.overflow = "scroll"
        document.querySelector('.dax').style.filter = "blur(0px)"
    }
    
    
})