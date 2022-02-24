/*======= MENU DE CLICK SCRIPT ===========================================*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*======= AO CLICAR EM UM ICONE DO MENU, O MENU ESCONDE====================*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/*======= mudar o header da página quando der scroll====================== */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

/*======= CAKES CAROUSEL AOTOMATIC ===========================================*/
$(function(){

  $('#cake img:eq(0)').addClass("ativo").show();
  setInterval(slide,6000);
  
  function slide(){
  
      //Se a proxima imagem existir
      if($('.ativo').next().length){
  
          //Esconde a 1ª img, remove a classe ativo, mostra a proxima img e adiciona a classe ativo nela
          $('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
  
      }else{ //Se for a ultima img do carrosel
  
          //Dá fadeOut na img, remove a classe ativo
          $('.ativo').fadeOut().removeClass("ativo");
          //Mostra a 1ª img do carrosel
          $('#cake img:eq(0)').fadeIn().addClass("ativo");
  
      }
  
  } })

/*======= SCROLL REVEAL: MOSTRAR QUANDO DER SCROLL===========================================*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*======= BOTÃO DE VOLTAR PARA O TOPO ====================================================*/
 /* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*===== Menu ativo conforme a seção visível na página =====================================*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  backToTop()
  activateMenuAtCurrentSection()
})

/*======= Bloqueio do botão direito do mause ====================================================*/
document.addEventListener('contextmenu', event => event.preventDefault());



