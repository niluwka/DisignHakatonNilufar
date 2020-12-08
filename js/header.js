(() => {
    const header = document.querySelector('.header__nav')
    const headerContent = document.querySelector('.header__content')
    if (header && headerContent) {
        checkScrolled()
        window.addEventListener('scroll', () =>  checkScrolled())
    }
    const menu = document.querySelector('.menu__list')
    const menuBtn = document.querySelector('.btn-burger')
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            menu.classList.toggle('open')
            menuBtn.classList.toggle('open')
        })
    }
    function  checkScrolled() {
        if(scrollY >header.clientHeight){
            header.classList.add('scrolled')
        }else if(scrollY < header.clientHeight){
            header.classList.remove('scrolled')
        }
    }
})()