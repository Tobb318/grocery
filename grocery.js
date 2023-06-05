let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginNow.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    menuBtn.classList.remove('active');
    searchForm.classList.remove('active');
    loginNow.classList.remove('active');
}


let loginNow = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginNow.classList.toggle('active');
    menuBtn.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    
}

let menuBtn = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    menuBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginNow.classList.remove('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginNow.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay: 10500,
        disableOnInteraction: false,
    },
    centeredSlides: false,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
    },
  });

   var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    
    centeredSlides: false,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
       
      },
      "@0.75": {
        slidesPerView: 2,
       
      },
      "@1.00": {
        slidesPerView: 3,
       
      },
      "@1.50": {
        slidesPerView: 4,
      },
     
    },
  });