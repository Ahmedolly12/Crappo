
    // let hamburger = document.querySelector('.hamburger-icon')
    // let mobileMenu = document.querySelector('.mobile-menu') 
    
    // hamburger.addEventListener ('click', () => {
    //     mobileMenu.classList.toggle('mobile-menu')
    //     hamburger.classList.toggle('open').style.width = "100%";
    // }) 
    let menuBtn= document.getElementById('menu-btn')
    let sideNav= document.getElementById('sidenav')
    let menu= document.getElementById('menu')

    menuBtn.onclick= function (){
        if(sideNav.style.right == '-250px'){
             sideNav.style.right= '0';
                menu.src= "images/closeicon.png"
        } else{
              sideNav.style.right = '-250px';
               menu.src= "images/menu.png"
        }
    }