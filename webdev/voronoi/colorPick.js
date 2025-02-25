
let collorPalette = [document.getElementById('pickedColor0').value, document.getElementById('pickedColor1').value, document.getElementById('pickedColor2').value, document.getElementById('pickedColor3').value, document.getElementById('pickedColor4').value, document.getElementById('pickedColor5').value];

function updatePalette() {
    collorPalette = [document.getElementById('pickedColor0').value, document.getElementById('pickedColor1').value, document.getElementById('pickedColor2').value, document.getElementById('pickedColor3').value, document.getElementById('pickedColor4').value, document.getElementById('pickedColor5').value];
}

function updateGravity() {
    gravity = (document.getElementById('isGravity').checked === true) ? [0, 1] : [0, 0]
    n1.forEach(e => {
        e.gravity = (document.getElementById('isGravity').checked === true) ? [0, 1] : [0, 0] ;
    });
}


let show = false; 
function updateShowAtractor() {
    show = (document.getElementById('showAttractor').checked === true) ? true : false ;
}