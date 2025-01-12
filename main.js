var text = document.getElementById('font');
var tituloVariable = document.getElementById('titulo-variable');
var state = true;

function variar(e) {
  state = false;
    let x = e.clientX;
    let y = e.clientY;
    text.style.fontVariationSettings = `'wght' ${y}, 'wdth' ${x/10} `;
    setTimeout(() => {
      state = true;
    }, 1000);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function variarPeso(enabled) {
  if (enabled === true) {
    let x = getRndInteger(100, 200);
    let y = getRndInteger(100, 500);
    text.style.fontVariationSettings = `'wght' ${y}, 'wdth' ${x} `;
  }
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
    variarPeso(state)
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


function videoFunctionality() {

const elements = document.querySelectorAll('.element');


elements.forEach(element => {

  const video = element.firstElementChild;
  const muteButton = element.lastElementChild;

  var muteState = false;
  const muteCheck = () =>{
    if (video.muted === false) {
      muteButton.src = 'rsc/UNMUTED.png';
  } else if(video.muted === true){
      muteButton.src = 'rsc/MUTED.png'
  }
  }
  muteCheck();

  muteButton.addEventListener('click',function () {
    if (video.muted === true) {
        muteButton.src = 'rsc/UNMUTED.png';
        video.muted = false;
        muteState = false;
    } else if(video.muted === false){
        muteButton.src = 'rsc/MUTED.png'
        video.muted = true;
        muteState = true;
    }
  });

  
  video.addEventListener("mouseover", function () {
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
  })

})


}


//Agregar efecto de fade in tomando todos los elementos con la clase bloque-texto y element, aplicandole 
//la opacidad en base a si su posición en Y es mayor a la del punto inferior del viewport
const bloqueDeTextoCollection = document.querySelectorAll('.bloque-texto');
const imageCollection = document.querySelectorAll('.element');
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