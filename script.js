let menu = window.document.querySelector(".fa-bars");
let navbar = window.document.querySelector(".navbar");
let header = window.document.querySelector(".header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 200){
        window.document.querySelector(".header").classList.add("css");
    }else{
        window.document.querySelector(".header").classList.remove("css");
    }
};

$(document).ready(function(){
  
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  });