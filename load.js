

const body = document.getElementById('body');
var porcentajeCompletado;
const total = 100;
const maximoTotal = 100;
function loadProgress() {
  const bar = document.getElementById('degreeProgressBar');

  porcentajeCompletado = maximoTotal/(total/100);
  bar.style.width = 100 + '%';
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

  }, 10); 
  

}