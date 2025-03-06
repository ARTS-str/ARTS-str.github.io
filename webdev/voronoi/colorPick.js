
let collorPalette = [document.getElementById('pickedColor0').value, document.getElementById('pickedColor1').value, document.getElementById('pickedColor2').value, document.getElementById('pickedColor3').value, document.getElementById('pickedColor4').value, document.getElementById('pickedColor5').value];


let show; 
let backgroundOpacity;
let lineWidth;
let eventInterval;

function paramSetup() {
    setTimeout(() => {
        
        updatePalette();
        updateGravity();
        updateShowAtractor();
        updateBackgroundOpacity();
        updateLineWidth();
        updateDeltaTime();
    }, 1);
}

function updatePalette() {
    collorPalette = [document.getElementById('pickedColor0').value, document.getElementById('pickedColor1').value, document.getElementById('pickedColor2').value, document.getElementById('pickedColor3').value, document.getElementById('pickedColor4').value, document.getElementById('pickedColor5').value];
    let cIndex = 0; 
    n1.forEach(e => {
        if (cIndex > 5) {
            cIndex = 0;
        }
        e.color = collorPalette[cIndex];
        cIndex++
    });
}

function updateGravity() {
    gravity = (document.getElementById('isGravity').checked === true) ? [0, 1] : [0, 0];
    n1.forEach(e => {
        e.gravity = (document.getElementById('isGravity').checked === true) ? [0, 1] : [0, 0] ;
    });
}


function updateShowAtractor() {
    show = (document.getElementById('showAttractor').checked === true) ? true : false ;
}

let container = document.getElementById('controlContainer');
let openButton = document.getElementById('openControlsButton');
function closeControls() {
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.display = 'none';
    }, 200);
    openButton.style.display = 'inline';
    openButton.style.opacity = '0.7';
}

function openControls() {
    container.style.display = 'flex';
    container.style.opacity = '0.9';
    openButton.style.opacity = '0';
    setTimeout(() => {
        openButton.style.display = 'none';
    }, 200);
    
}


function updateBackgroundOpacity() {
    backgroundOpacity = ((Math.log((document.getElementById('backgroundOpacityInput').value)) * -1)) / 2;
    if (document.getElementById('backgroundOpacityInput').value <= 0.01) {
        backgroundOpacity = 255;
    }
}

function updateLineWidth() {
    lineWidth = document.getElementById('lineWidthInput').value;
    n0.forEach(e => {
        e.width = lineWidth;
    });
    
}


function updateDeltaTime() {
    eventInterval = document.getElementById('deltaTimeInput').value;
}


