
//FUNCIONES DE INTRO

var containerLiving = document.getElementById('container-living');
containerLiving.style.display = 'none';
var introContainer = document.getElementById('intro-container');
var introText = document.getElementById('intro-text');
var introTip = document.getElementById('intro-tip');
var introTextP = document.getElementById('intro-p-text');
var pestañaTop = document.getElementById('pestaña-superior');
var pestañaBot = document.getElementById('pestaña-inferior');
var scrollers = document.getElementById('scrollers')
var aspectRatio = window.innerWidth / window.innerHeight;
var amountScroll = (aspectRatio > 1) ? 800 : 1300;

window.addEventListener('resize', function(){
    aspectRatio = window.innerWidth / window.innerHeight;
    amountScroll = (aspectRatio > 1) ? 800 : 1300;
});
function secuenciaIntro(){
    scrollI.style.display = 'none';
    introText.style.opacity = '1';
    setTimeout(() => {
        introTip.style.opacity = '1';
    }, 1000);
    introContainer.addEventListener('click', function handleClick(){
        setTimeout(() => {
            pestañaBot.style.animation = 'pestaña-bot 4s ease-in-out 1'
            pestañaTop.style.animation = 'pestaña-top 4s ease-in-out 1'
            introText.style.opacity = '0';
            containerLiving.style.display = 'block';
        }, 100);
        setTimeout(() => {
            introTip.style.opacity = '0';
        }, 1000);
        setTimeout(() => {
            pestañaBot.style.display = 'none';
            pestañaTop.style.display = 'none';
            introTip.style.opacity = '0';
            introTextP.style.opacity = '1' 
            if (aspectRatio < 1){
                window.scrollTo(200, 0);
            }
            setTimeout(() => {
                introTextP.style.opacity = '0';
                    setTimeout(() => {
                        introContainer.style.display = 'none';
                    }, 500);
                scrollers.style.display = (scrollerState = true) ? 'block' : 'none';
                scrollers.style.opacity = '1';
            }, 4000);
        }, 4000);

    });

}




//FUNCIONES DE LIVING


var transicionAfuera = document.getElementById('transicion-afuera');
var caminando = document.getElementById('caminando');
var afuera = document.getElementById('afuera'); //DESPUES DE TRANSICION
var afueraText = document.getElementById('afuera-p-text');
function puerta(){
    audioPuerta();
    transicionAfuera.style.display = 'block';
    caminando.src="img/caminar.gif";
    setTimeout(() => {
        transicionAfuera.style.opacity = '1';
        scrollers.style.opacity = '0';
        audioTransicion();
        setTimeout(() => {
            afuera.style.display = 'block';
            containerLiving.style.display = 'none';
            transicionAfuera.style.opacity = '0';
            setTimeout(() => {  
                caminando.src= "";
                transicionAfuera.style.display = 'none';
                afueraText.style.opacity = '1'
                setTimeout(() => {
                    afueraText.style.opacity = '0'
                }, 10000);
            }, 1000);
        }, 8500);

    }, 1000);
}

function audioPuerta(){
    var audio = new Audio('audio/puerta.mp3');
    audio.currentTime = 0;
    audio.play();
}

var boton = document.getElementById('boton-tv');
var tele = document.getElementById('tele');
var estadoBotonTV = false;
function botonTV(){
    audioBotonTV();
    if (estadoBotonTV == true){
        boton.style.backgroundColor = '#111111';
        tele.style.backgroundImage = "url('img/tv.gif')"
        estadoBotonTV = false;
    }else if(estadoBotonTV == false){
        boton.style.backgroundColor = 'brown';
        tele.style.backgroundImage = "url('img/tv.png')"
        estadoBotonTV = true;
    }
}

function audioBotonTV(){
    var audio = new Audio('audio/click.mp3');
    audio.currentTime = 0;
    audio.play();
}

var lamp = document.getElementById('lampara');
var estadoLampara = false;
function lampara(){
    audioLampara();
    if(estadoLampara == false){
        lamp.style.backgroundImage = "url('img/lampara-encendida.png')";
        estadoLampara = true;
    }else if(estadoLampara == true){
        lamp.style.backgroundImage = "url('img/lampara.png')";
        estadoLampara = false;
    }
}

function audioLampara(){
    var audio = new Audio('audio/lampara.mp3')
    audio.currentTime = 0;
    audio.play();
}


var flecha = document.getElementById('flecha');
var refri = document.getElementById('heladera');
var nota = document.getElementById('nota-h');
var estadoHeladera = false;
function heladera(){
    if (estadoHeladera === false) {    
        audioHeladera();
    }
    estadoHeladera = true;
    flecha.style.display = 'block';
    if (aspectRatio < 1){
        flecha.style.animation= 'flecha-h 200ms linear';
    }else{
        flecha.style.animation= 'flecha 200ms linear';
    }
    setTimeout(() => {
        refri.style.backgroundImage = "url('img/heladera-rota.png')"
        nota.style.display = 'block';
    }, 200);
}


function audioHeladera(){
    var audio = new Audio('audio/flecha.mp3')
    audio.currentTime = 0;
    audio.play();
}

var notaContainer = document.getElementById('nota-container');
function notaHeladera(){
    audioMapa();
    notaContainer.style.display = 'flex';
    setTimeout(() => {
        scrollers.style.opacity = '0';
        notaContainer.style.opacity = '1';
    }, 200);
}

function salirNota(){
    notaContainer.style.opacity = '0';
    scrollers.style.opacity = '1';
    setTimeout(() => {
        notaContainer.style.display = 'none';
    }, 1000);
}

//SCROLLS
var livingEntero = containerLiving.getElementsByTagName('*');
var scrollD = document.getElementById('scroll-der');
var scrollI = document.getElementById('scroll-izq');
var scrollEstado = false; 
function scrollearDerecha(){
    scrollEstado = true;
    for(let i = 0; i < livingEntero.length; i++) {
        window.scrollTo(amountScroll, 0);
        livingEntero[i].classList.add('transition');
     }
    setTimeout(() => {
        for(let i = 0; i < livingEntero.length; i++) {
            livingEntero[i].classList.remove('transition');
         }
         scrollD.style.display = 'none';
         scrollI.style.display = 'block';
    }, 200);
}
function scrollearIzquierda(){
    scrollEstado = false;
    for(let i = 0; i < livingEntero.length; i++) {
        window.scrollTo(-amountScroll, 0);
        livingEntero[i].classList.add('transition');
     }
     setTimeout(() => {
        for(let i = 0; i < livingEntero.length; i++) {
            livingEntero[i].classList.remove('transition');
         }
         scrollI.style.display = 'none';
         scrollD.style.display = 'block';
    }, 200);
}

var mapaContainer = document.getElementById('mapa-container');
function mapa(){
    audioMapa();
    mapaContainer.style.display = 'flex';
    setTimeout(() => {
        scrollers.style.opacity = '0';
        mapaContainer.style.opacity = '1';
    }, 200);
}
function audioMapa(){
    var audio = new Audio('audio/papel.mp3')
    audio.currentTime = 0;
    audio.play();
}
function salirMapa(){
    mapaContainer.style.opacity = '0';
    scrollers.style.opacity = '1';
    setTimeout(() => {
        mapaContainer.style.display = 'none';
    }, 1000);
}

//FUNCIONES AFUERA


function volverAdentro(){
    audioPuerta();

    transicionAfuera.style.display = 'block';
    caminando.src="img/caminar.gif";

    setTimeout(() => {
        transicionAfuera.style.opacity = '1';
        setTimeout(() => {
            afuera.style.display = 'none';
            containerLiving.style.display = 'block';
            transicionAfuera.style.opacity = '0';
            if (scrollEstado === true) {
                scrollearDerecha();
            }
            setTimeout(() => {  
                scrollers.style.opacity = '1';
                caminando.src= "";
                transicionAfuera.style.display = 'none';
            }, 1000);
        }, 2000);

    }, 1000);
}

function audioTransicion(){
    var audio = new Audio('audio/transicion.mp3');
    audio.currentTime = 0;
    audio.play();
}

function audioFutbol(){
    var audio = new Audio('audio/futbol.mp3');
    audio.currentTime = 0;
    audio.play();
}
function audioMartin(){
    var audio = new Audio('audio/martin-pescador.mp3');
    audio.currentTime = 0;
    audio.play();
}


//FUNCIONES PONG
function audioPongHit(){
    var audio = new Audio('audio/ponghit.mp3');
    audio.currentTime = 0;
    audio.play();
}

function audioPongWall(){
    var audio = new Audio('audio/pongwall.mp3');
    audio.currentTime = 0;
    audio.play();
}

function audioPongScore(){
    var audio = new Audio('audio/pongscore.mp3');
    audio.currentTime = 0;
    audio.play();
}

var widthDivider = (window.innerWidth < 1050) ? 2 : 1.1;

setInterval(() => {
    
    widthDivider = (window.innerWidth < 1050) ? 2 : 1.1;
}, 1000);

//TODO CODIGO DEL JUEGO PONG PERTENECE A AYUSH PURAWR https://copyassignment.com/pong-game-in-html-and-javascript/ 1 DEC, 2022
//HA SIDO LEVEMENTE MODIFICADO PARA CAMBIAR LA CANTIDAD DE RONDAS, COLORES DE FONDO, LA DIFICULTAD DE LA IA Y AGREGAR LOS SONIDOS
// Global Variables
var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var rounds = [3, 2, 1];
var colors = ['#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6'];

// The ball object (The cube that bounces back and forth)
var Ball = {
    new: function (incrementedSpeed) {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 6
        };
    }
};

// The ai object (The two lines that move up and down)
var Ai = {
    new: function (side) {
        return {
            width: 18,
            height: 180,
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 10
        };
    }
};


var Game = {
    initialize: function () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
    
        this.canvas.width = window.innerWidth * widthDivider;
        this.canvas.height = window.innerHeight * 1.625;
    
        this.canvas.style.width = (this.canvas.width/2) + 'px';
        this.canvas.style.height = (this.canvas.height/2) + 'px';
    
        this.player = Ai.new.call(this, 'left');
        this.ai = Ai.new.call(this, 'right');
        this.ball = Ball.new.call(this);
    
        this.ai.speed = 5;
        this.running = this.over = false;
        this.turn = this.ai;
        this.timer = this.round = 0;
        this.color = '#000000';
    
        Pong.menu();
        Pong.listen();
    },

    endGameMenu: function (text) {
        // Change the canvas font size and color
        Pong.context.font = '45px Courier New';
        Pong.context.fillStyle = this.color;
    
        // Draw the rectangle behind the 'Press any key to begin' text.
        Pong.context.fillRect(
            Pong.canvas.width / 2 - 350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        );
    
        // Change the canvas color;
        Pong.context.fillStyle = '#ffffff';
    
        // Draw the end game menu text ('Game Over' and 'Winner')
        Pong.context.fillText(text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15
        );
    
        setTimeout(function () {
            Pong = Object.assign({}, Game);
            Pong.initialize();
        }, 3000);
    },

    menu: function () {
        // Draw all the Pong objects in their current state
        Pong.draw();
    
        // Change the canvas font size and color
        this.context.font = '50px Courier New';
        this.context.fillStyle = this.color;
    
        // Draw the rectangle behind the 'Press any key to begin' text.
        this.context.fillRect(
            this.canvas.width / 2 - 350,
            this.canvas.height / 2 - 48,
            700,
            100
        );
    
        // Change the canvas color;
        this.context.fillStyle = '#ffffff';
    
        // Draw the 'press any key to begin' text
        this.context.fillText('Presiona cualquier tecla...',
            this.canvas.width / 2,
            this.canvas.height / 2 + 15
        );
    },

    // Update all objects (move the player, ai, ball, increment the score, etc.)
    update: function () {
        if (!this.over) {
            // If the ball collides with the bound limits - correct the x and y coords.
            if (this.ball.x <= 0) Pong._resetTurn.call(this, this.ai, this.player);
            if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, this.player, this.ai);
            if (this.ball.y <= 0) {this.ball.moveY = DIRECTION.DOWN; audioPongWall();}
            if (this.ball.y >= this.canvas.height - this.ball.height) {this.ball.moveY = DIRECTION.UP; audioPongWall();}
        
            // Move player if they player.move value was updated by a keyboard event
            if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
            else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;
        
            // On new serve (start of each turn) move the ball to the correct side
            // and randomize the direction to add some challenge.
            if (Pong._turnDelayIsOver.call(this) && this.turn) {
                this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
                this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())];
                this.ball.y = Math.floor(Math.random() * 700) + 300;
                this.ai.speed += 0.1;
                this.ball.speed += 0.1;
                this.turn = null;
            }
        
            // If the player collides with the bound limits, update the x and y coords.
            if (this.player.y <= 0) this.player.y = 0;
            else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);
        
            // Move ball in intended direction based on moveY and moveX values
            if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
            else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
            if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
            else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;
        
            // Handle ai (AI) UP and DOWN movement
            if (this.ai.y > this.ball.y - (this.ai.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.ai.y -= this.ai.speed / 1.5;
                else this.ai.y -= this.ai.speed / 4;
            }
            if (this.ai.y < this.ball.y - (this.ai.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.ai.y += this.ai.speed / 1.5;
                else this.ai.y += this.ai.speed / 4;
            }
        
            // Handle ai (AI) wall collision
            if (this.ai.y >= this.canvas.height - this.ai.height) this.ai.y = this.canvas.height - this.ai.height;
            else if (this.ai.y <= 0) this.ai.y = 0;
        
            // Handle Player-Ball collisions
            if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
                if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
                    this.ball.x = (this.player.x + this.ball.width);
                    this.ball.moveX = DIRECTION.RIGHT;
                    audioPongHit();
                
                }
            }
        
            // Handle ai-ball collision
            if (this.ball.x - this.ball.width <= this.ai.x && this.ball.x >= this.ai.x - this.ai.width) {
                if (this.ball.y <= this.ai.y + this.ai.height && this.ball.y + this.ball.height >= this.ai.y) {
                    this.ball.x = (this.ai.x - this.ball.width);
                    this.ball.moveX = DIRECTION.LEFT;
                    audioPongHit();
                }
            }
        }
    
        // Handle the end of round transition
        // Check to see if the player won the round.
        if (this.player.score === rounds[this.round]) {
            // Check to see if there are any more rounds/levels left and display the victory screen if
            // there are not.
            if (!rounds[this.round + 1]) {
                this.over = true;
                setTimeout(function () { Pong.endGameMenu('Ganador!'); }, 1000);
            } else {
                // If there is another round, reset all the values and increment the round number.
                //this.color = this._generateRoundColor();
                this.player.score = this.ai.score = 0;
                this.player.speed += 0.5;
                this.ai.speed += 1.8;
                this.ball.speed += 2;
                this.round += 1;
            
            }
        }
        // Check to see if the ai/AI has won the round.
        else if (this.ai.score === rounds[this.round]) {
            this.over = true;
            setTimeout(function () { Pong.endGameMenu('Fin del juego :('); }, 1000);
        }
    },

    // Draw the objects to the canvas element
    draw: function () {
        // Clear the Canvas
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    
        // Set the fill style to black
        this.context.fillStyle = this.color;
    
        // Draw the background
        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    
        // Set the fill style to white (For the paddles and the ball)
        this.context.fillStyle = '#ffffff';
    
        // Draw the Player
        this.context.fillRect(
            this.player.x,
            this.player.y,
            this.player.width,
            this.player.height
        );
    
        // Draw the Ai
        this.context.fillRect(
            this.ai.x,
            this.ai.y,
            this.ai.width,
            this.ai.height 
        );
    
        // Draw the Ball
        if (Pong._turnDelayIsOver.call(this)) {
            this.context.fillRect(
                this.ball.x,
                this.ball.y,
                this.ball.width,
                this.ball.height
            );
        }
    
        // Draw the net (Line in the middle)
        this.context.beginPath();
        this.context.setLineDash([7, 15]);
        this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
        this.context.lineTo((this.canvas.width / 2), 140);
        this.context.lineWidth = 10;
        this.context.strokeStyle = '#ffffff';
        this.context.stroke();
    
        // Set the default canvas font and align it to the center
        this.context.font = '100px Courier New';
        this.context.textAlign = 'center';
    
        // Draw the players score (left)
        this.context.fillText(
            this.player.score.toString(),
            (this.canvas.width / 2) - 300,
            200
        );
    
        // Draw the paddles score (right)
        this.context.fillText(
            this.ai.score.toString(),
            (this.canvas.width / 2) + 300,
            200
        );
    
        // Change the font size for the center score text
        this.context.font = '30px Courier New';
    
        // Draw the winning score (center)
        this.context.fillText(
            'Ronda ' + (Pong.round + 1),
            (this.canvas.width / 2),
            35
        );
    
        // Change the font size for the center score value
        this.context.font = '40px Courier';
    
        // Draw the current round number
        this.context.fillText(
            rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
            (this.canvas.width / 2),
            100
        );
    },

    loop: function () {
        Pong.update();
        Pong.draw();
    
        // If the game is not over, draw the next frame.
        if (!Pong.over) requestAnimationFrame(Pong.loop);
    },

    listen: function () {
        document.addEventListener('keydown', function (key) {
            // Handle the 'Press any key to begin' function and start the game.
            if (Pong.running === false) {
                Pong.running = true;
                window.requestAnimationFrame(Pong.loop);
            }
        
            // Handle up arrow and w key events
            if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;
        
            // Handle down arrow and s key events
            if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
        });
    
        // Stop the player from moving when there are no keys being pressed.
        document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
    },

    // Reset the ball location, the player turns and set a delay before the next round begins.
    _resetTurn: function(victor, loser) {
        this.ball = Ball.new.call(this, this.ball.speed);
        this.turn = loser;
        this.timer = (new Date()).getTime();
    
        victor.score++;
        audioPongScore();
    },

    // Wait for a delay to have passed after each turn.
    _turnDelayIsOver: function() {
        return ((new Date()).getTime() - this.timer >= 1000);
    },

    // Select a random color as the background of each level/round.
//    _generateRoundColor: function () {
//        var newColor = colors[Math.floor(Math.random() * colors.length)];
//        if (newColor === this.color) return Pong._generateRoundColor();
//        return newColor;
//    }
};

var Pong = Object.assign({}, Game);


var pongContainer = document.getElementById('pong');
function consola(){
    audioConsola();
    pongContainer.style.display = 'flex';
    setTimeout(() => {
        scrollers.style.opacity = '0';
        pongContainer.style.opacity = '1';
        Pong.initialize();
    }, 200);
}

function audioConsola(){
    var audio = new Audio('audio/consola.mp3')
    audio.currentTime = 0;
    audio.play();
}

function salirPong(){
    pongContainer.style.opacity = '0';
    pongContainer.style.display = 'none';
    Pong.over = true;
    scrollers.style.opacity = '1';
}