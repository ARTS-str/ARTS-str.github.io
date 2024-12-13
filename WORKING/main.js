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

function scrollPortfolio() {
  scroll(0, 600);
}

let state = false;
function expandContent(){
  if(state == false){
    document.getElementById('sobreMiButton').style.transform = 'rotate(180deg)';
    document.getElementById("container-principal").classList.remove("hidden");
    state = true;
  }else if(state == true){
    document.getElementById('sobreMiButton').style.transform = 'rotate(0deg)';
    document.getElementById("container-principal").classList.add("hidden");
    state = false;
  }
}

const videos = document.querySelectorAll("video")

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


function closeCurrent(param) {
  document.querySelector("body").style.overflow = 'scroll';
  switch (param) {
    case arts:
      var i = document.getElementById('arts-contain');
      i.style.opacity = 0;
      setTimeout(() => {
        i.style.display = 'none';
      }, 200);
      break;
    case mito:
      var i = document.getElementById('mito-contain')
      i.style.opacity = 0;
      setTimeout(() => {
        i.style.display = 'none';
      }, 200);
      break;
    case facultad:
      var i = document.getElementById('facu-contain')
      i.style.opacity = 0;
      setTimeout(() => {
        i.style.display = 'none';
      }, 200);
      break;
    default:
      break;
  }

}
function openCurrent(param) {
  
  document.querySelector("body").style.overflow = 'hidden';
  switch (param) {
    case arts:
      var i = document.getElementById('arts-contain');
      i.style.display = 'block';
      i.style.opacity = 1;
      break;
    case mito:
      var i = document.getElementById('mito-contain')
      i.style.display = 'block';
      i.style.opacity = 1;
      break;
      
    case facultad:
      var i = document.getElementById('facu-contain')
      i.style.display = 'block';
      i.style.opacity = 1;
      break;

    default:
      break;
  }

}