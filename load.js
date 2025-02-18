const body = document.getElementById('body');
const videos = document.querySelectorAll('.image');

body.style.overflowY = 'hidden';
var loadPercent = 0;

videos.forEach(video => {

  if (video.tagName === 'VIDEO') {
    video.addEventListener('canplay' ,() =>{
      loadPercent += 100/videos.length;
      console.log(video, loadPercent);
    }, { once: true });
  }
  if (video.tagName === 'IMG') {
    video.addEventListener("load" ,() =>{
      loadPercent += 100/videos.length;
      console.log(video, loadPercent);
    }, { once: true });
  }
});


function loadProgress() {
  const bar = document.getElementById('degreeProgressBar');
  bar.style.width = Math.trunc(loadPercent) + '%';
  countUpPercentaje();
}

var index = 0;
function countUpPercentaje() {
  const percentage = document.getElementById('percentage');
  setTimeout(() => {
    percentage.innerHTML = index + '%';
    index++
    if (index <= Math.trunc(loadPercent)){
      countUpPercentaje();
    }else{
      
      body.style.overflowY = 'scroll';
      loadPageD(300)
    }

  }, 10); 
  

}





function loadPageD(ms) {
  const page = document.getElementById('loadPage');
  setTimeout(() => {
    page.style.opacity = '0';
  }, ms);
  setTimeout(() => {
    page.style.display = 'none';
  }, ms+300);
}