
    let hamburger = document.querySelector('.hamburger-icon')
    let mobileMenu = document.querySelector('.mobile-menu') 
    
    hamburger.addEventListener ('click', () => {
        mobileMenu.classList.toggle('mobile-menu')
        hamburger.classList.toggle('open').style.width = "100%";
    }) 