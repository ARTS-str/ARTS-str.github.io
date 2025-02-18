var htmlString = [];
var sliderArray = [];


function loadDoc() { 
    fetch('./filetype.json')
    .then((response) => response.json())
    .then((filetype) => 
        {
                for (let i = 0; i < filetype.length; i++) {

                    sliderArray.push(`<a href='#slide-${i}'></a>`);

                    switch (filetype.types.split(' ')[i]){
                        case "png": 
                            htmlString.push(`<img id='slide-${i}' src='${i+1}.png'/>`);
                            break;

                        case "mp4":
                            htmlString.push(`<div class='element'> <video id='slide-${i}' loop muted autoplay src='${i+1}.mp4' webkit-playsinline playsinline draggable="false"> </video> 
                            <img src="../../rsc/MUTED.png" class="sound-button"/> </div>`);
                            break;
    
                        case "jpg": //CAMBIAR A JPG
                            htmlString.push(`<img id='slide-${i}' src='${i+1}.jpg'/>`);
                            break;
                            
                            default:
                                console.log("default");
                            break;
                    }
                    
                }

                if (filetype.length > 1) {
                    document.getElementById('media').innerHTML += `<section class='container'><div class='slider-wrapper'> <div class='slider'> ${htmlString.join(" ")} </div> <div class='slider-nav'> ${sliderArray.join(" ")} </div> </div> </section> <p id='box'>empty</p>`
                } else if (filetype.length <= 1){
                    document.getElementById('media').innerHTML += `<section class='container'>${htmlString.join(" ")} </section> <p id='box'>empty</p>`
                }
                
                callText();
                
                videoFunctionality()
        }
    );
}


function videoFunctionality() {
    console.log('videoOn')
    
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
    
      const video = element.firstElementChild;
      const muteButton = element.lastElementChild;
      const videoCheck = video.tagName;
      console.log(videoCheck);
      if (videoCheck === 'VIDEO') {
        
        var muteState = false;
        const muteCheck = () =>{
          if (video.muted === false) {
            muteButton.src = '../../rsc/UNMUTED.png';
        } else if(video.muted === true){
            muteButton.src = '../../rsc/MUTED.png'
        }
        }
        muteCheck();
    
        muteButton.addEventListener('click',function () {
          if (video.muted === true) {
              muteButton.src = '../../rsc/UNMUTED.png';
              video.muted = false;
              muteState = false;
          } else if(video.muted === false){
              muteButton.src = '../../rsc/MUTED.png'
              video.muted = true;
              muteState = true;
          }
        });
    
    
        video.addEventListener("click", function () {
          if (video.paused === true) {
            video.play()
          } else {
            video.pause()
          }

          
        })
      }
    
    })
    
}

function callText() {

    $.get("text.txt",function(text){
        document.getElementById('box').innerHTML= text;
    });
    $.get("title.txt",function(title){
        document.getElementById('titulo').innerHTML= title;
    });
}

