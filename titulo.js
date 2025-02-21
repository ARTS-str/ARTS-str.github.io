var text = document.getElementById('font');
var tituloVariable = document.getElementById('titulo-variable');
var state = true;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function variarPeso() {
    let x = getRndInteger(100, 200);
    let y = getRndInteger(100, 500);
    text.style.fontVariationSettings = `'wght' ${y}, 'wdth' ${x} `;
}

variarTitulo();
function variarTitulo(){
  let i = 0;
    
    setInterval(() => {
      switch (i) {
        case 0:
          tituloVariable.innerHTML ="</br>ARTS.";
        break;
        case 1:
          tituloVariable.innerHTML ="</br>DISEÑO.";
        break;
        case 2:
          tituloVariable.innerHTML ="</br>ANIMACIÓN.";
        break;
        case 3:
          tituloVariable.innerHTML ="</br>WEBDEV.";
        break;
        case 4:
          tituloVariable.innerHTML ="</br>IDENTIDAD.";
          i = -1;
        break;
        default:
          break;
      }
      i++;
    }, 1200);

  setInterval(() => {
    variarPeso()
  }, 130);
}




function checkForMobile(){
    if (innerWidth <= 768) {
      return true;
    } else {
      return false;
    }
}