var text = document.getElementById('font');
var tituloVariable = document.getElementById('titulo-variable');


function variar(e) {
    let x = e.clientX;
    let y = e.clientY;
    text.style.fontVariationSettings = `'wght' ${y}, 'wdth' ${x/4} `;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

variarTitulo();
function variarTitulo(){
  let i = 0;
  setInterval(() => {
    switch (i) {
      case 0:
        tituloVariable.innerHTML ="ARTS.";
      break;
      case 1:
        tituloVariable.innerHTML ="DISEÑO.";
      break;
      case 2:
        tituloVariable.innerHTML ="ANIMACIÓN.";
      break;
      case 3:
        tituloVariable.innerHTML ="WEBDEV.";
      break;
      case 4:
        tituloVariable.innerHTML ="IDENTIDAD.";
        i = -1;
      break;
      default:
        break;
    }
    i++;
  }, 1200);
  setInterval(() => {
    let x = getRndInteger(100, 200);
    let y = getRndInteger(100, 500);
    text.style.fontVariationSettings = `'wght' ${y}, 'wdth' ${x} `;
  }, 130);
}

var porcentajeCompletado;
const creditosTotales = 363;
const creditos = 268;
function degreeProgress() {
  const bar = document.getElementById('degreeProgressBar');

  porcentajeCompletado = creditos/(creditosTotales/100);
  bar.style.width = porcentajeCompletado + '%';
  countUpPercentaje();
}

var index = 0;
function countUpPercentaje() {
  const percentage = document.getElementById('percentage');
  setTimeout(() => {
    percentage.innerHTML = index + '%';
    index++
    if (index <= porcentajeCompletado.toFixed()){
      countUpPercentaje();
    }
  }, 1); 
  
}

function scrollPortfolio() {
  scroll(0, 600);
}


function videoFunctionality() {
  
const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  
  video.addEventListener("click", function () {
    if (this.muted == true){
      this.muted = false;
    }else if(this.muted == false){
      this.muted = true;
    }
  })
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
  })
}) 

}


const bloqueDeTextoCollection = document.querySelectorAll('.bloque-texto');
const imageCollection = document.querySelectorAll('.image');
var wHeight = window.innerHeight;

window.addEventListener('resize', ()=>{
  wHeight = window.innerHeight;
})

window.addEventListener('scroll', () => {
  imageCollection.forEach(element => {
    var elementPosition = element.getBoundingClientRect().y;
    if (elementPosition < wHeight && element.style.opacity !== 1) {
      element.style.opacity = '1';
    }else if (elementPosition > wHeight && element.style.opacity !==0){
      element.style.opacity = '0';
    }
  });
  bloqueDeTextoCollection.forEach(element => {
    var elementPosition = element.getBoundingClientRect().y;
    if (elementPosition < wHeight && element.style.opacity !== 1) {
      element.style.opacity = '1';
    }else if (elementPosition > wHeight && element.style.opacity !==0){
      element.style.opacity = '0';
    }
  });
});

function readScrollPercent() {
  var scrollAmount = window.scrollY;
  var maxScroll = scrollAmount - wHeight;
  return wHeight;
}