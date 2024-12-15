var htmlString = [];
var sliderArray = [];


function loadDoc() {

    $.get("filetype.txt",function(filetype){
        switch (filetype.split(" ")[0]) {
            case "mp4":
                document.getElementById('media').innerHTML += "<video id='video' oncanplay=handleVideoInteraction('video') webkit-playsinline playsinline loop muted autoplay src='media.mp4'> </video> <p id='box'>empty</p>";
                callText();
            break;

        
            case "png": //CAMBIAR A JPG
                document.getElementById('media').innerHTML += "<img src='media.png'> <p id='box'>empty</p>";
                callText();
            break;
            
            case "jpg": //CAMBIAR A JPG
                document.getElementById('media').innerHTML += "<img src='media.jpg'> <p id='box'>empty</p>";
                callText();
            break;

            case "carrousel":
                detectNumberOfMediaFiles();
                callText();
            default:
            break;
        }
    });
}

function detectNumberOfMediaFiles() {
    $.get('filetype.txt', function (string) {
        var count = (string) => string.trim().split(/\s+/).length;
        if (count(string) > 0) {
            for (let index = 1; index < (count(string)); index++) {

                sliderArray.push(`<a href='#slide-${index}'></a>`);

                    switch (string.split(" ")[index]) {
                        case "mp4":
                            htmlString.push(`<video id='slide-${index}' loop muted autoplay src='${index}.mp4' webkit-playsinline playsinline oncanplay=handleVideoInteraction('slide-${index}')> </video>`);
                            console.log(index + "mp4");
                        break;
                
                        case "png": //CAMBIAR A JPG
                            htmlString.push(`<img id='slide-${index}' src='${index}.png'/>`);
                            console.log(index + "png");
                        break;

                        case "jpg": //CAMBIAR A JPG
                            htmlString.push(`<img id='slide-${index}' src='${index}.jpg'/>`);
                            console.log(index + "jpg");
                        break;
                        default:
                            console.log("default");
                        break;
                }
                
            }
        }
    
    document.getElementById('media').innerHTML += `<section class='container'><div class='slider-wrapper'> <div class='slider'> ${htmlString.join(" ")} </div> <div class='slider-nav'> ${sliderArray.join(" ")} </div> </div> </section> <p id='box'>empty</p>`
    });
    
}

function callText() {

    $.get("text.txt",function(text){
        document.getElementById('box').innerHTML= text;
    });
    $.get("title.txt",function(title){
        document.getElementById('titulo').innerHTML= title;
    });
}

function handleVideoInteraction(id) {

    var item = document.getElementById(id);

    item.addEventListener('click', function (){
        if (item.muted == true){
            item.muted = false;
          }else if(item.muted == false){
            item.muted = true;
          }
    });
    return item;
}