const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const fpsCounter = document.getElementById('fpsCounter');
const pointer = document.getElementById('pointerCircle');
canvas.width = innerWidth;
canvas.height = innerHeight;

const v = new Arrow(canvas.width/2, canvas.height/2, 180);

let n0 = [];
let n1 = [];
let magnitude = 10;
let gridSize = 10;
let onMobile = false;
let gravity = [0, 0];

setup();
function setup() {
    if (window.innerWidth < 768) {
        onMobile = true;
        magnitude = 5;
        gridSize = 5;
        ctx.lineWidth = 1;
    }
    createGrid();
}

function createGrid() {
    for (let x = 0; x < canvas.width; x+=gridSize) {
        for (let y = 0; y < canvas.height; y+=gridSize) {
            n0.push(new Arrow(x, y, n1, magnitude));
        }
    }
}

let lastTime = 0;
let eventUpdate = false;
let eventTimer = 0;
function animate(timeStamp) {

    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    render(deltaTime);

    requestAnimationFrame(animate);
}

let fpsIndex = 0;
function render(deltaTime) {
    
    if (eventUpdate) {
        
        fpsIndex++
        
        if (fpsIndex%6 === 0) {
            let currentFPS = Math.trunc(1000 / deltaTime);
            fpsCounter.innerHTML = "FPS: " + currentFPS;
            fpsIndex = 0;
        }

        ctx.lineWidth = lineWidth;    
        ctx.fillStyle = "rgba(255, 255, 255, " + backgroundOpacity + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        n0.forEach(e => {
            e.show();
            if (n1.length>0) {
                e.checkForAttractors();
            }
        });
    
        n1.forEach(e => {
            e.move();
            e.collideWalls();
            if (show === true) {
                e.show();
            }
            
        });
    
        for (let i = 0; i < n1.length; i++) {
            let particleA = n1[i]
            for (let j = i+1; j < n1.length; j++) {
                let particleB = n1[j];
                particleA.collide(particleB);
            }
            
        }
    }

    if (eventTimer < eventInterval) {
        eventTimer += deltaTime;
        eventUpdate = false;
    }else{
        eventTimer = 0;
        eventUpdate = true;
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//window.onmousemove = (a) => {
//    
//    n0.forEach(e => {
//        e.changeAngleOnMouse(a.pageX, a.pageY)
//    });
//}
let colorIndex = 0;
canvas.onclick = (a) => {
    if (colorIndex > 5) {
        colorIndex = 0;
    }

    if (onMobile === true && n1.length < 24) {
        n1.push(new Attractor(a.pageX, a.pageY, 15, colorIndex, gravity));
    } else if (onMobile === false && n1.length < 36) {  
        n1.push(new Attractor(a.pageX, a.pageY, 15, colorIndex, gravity));
    } else{
        alert('Demasiados puntos!');
    }
    colorIndex++;

    pointer.style.animation = 'bounce .2s ease-in-out'
    setTimeout(() => {
        
        pointer.style.animation = 'none'
    }, 200);

}



window.onmousemove = (e) => {
    if (eventUpdate) {
        pointer.style.left = e.clientX - pointer.getBoundingClientRect().width/2;
        pointer.style.top = e.clientY - pointer.getBoundingClientRect().height/2;
    }
}
window.onresize = (e) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    n0.splice(0, n0.length);
    createGrid();
}