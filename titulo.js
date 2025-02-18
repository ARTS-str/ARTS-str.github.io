var text = document.getElementById('font');
var tituloVariable = document.getElementById('titulo-variable');
var state = true;

function variar(e) {
  
  if (checkForMobile() === false) {
    state = false;
      let x = e.clientX;
      let y = e.clientY;
      text.style.fontVariationSettings = `'wght' ${y}, 'wdth' ${x/10} `;
      setTimeout(() => {
        state = true;
      }, 1000);
  }
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




function checkForMobile(){
    if (innerWidth <= 768) {
      return true;
    } else {
      return false;
    }
  }