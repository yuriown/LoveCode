let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

// Ajustando o swiper para a home-slider
var swiperHome = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  loop: true,
  // Certifique-se de que o contêiner do slider tenha largura correta no CSS
});

// Ajustando o swiper para a review-slider
var swiperReview = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5, // Menor espaçamento no celular
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 15, // Melhor espaçamento para telas maiores
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



function calcularTempo() {
  const dataConhecimento = new Date(2021, 7, 10, 0, 0, 0); // Mês é 7 porque é zero-indexado (0 = Janeiro)
  const agora = new Date();
  
  let anos = agora.getFullYear() - dataConhecimento.getFullYear();
  let meses = agora.getMonth() - dataConhecimento.getMonth();
  let dias = agora.getDate() - dataConhecimento.getDate();
  let horas = agora.getHours() - dataConhecimento.getHours();
  let minutos = agora.getMinutes() - dataConhecimento.getMinutes();
  let segundos = agora.getSeconds() - dataConhecimento.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const ultimoDiaMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaMes;
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById("contador").innerHTML = 
    `Anos: ${anos}, Meses: ${meses}, Dias: ${dias}, Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`;
}

setInterval(calcularTempo, 1000);