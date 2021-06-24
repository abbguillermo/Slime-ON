var config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1600,
        height: 900,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [Preload, Menu, Credits, Level1, GameOver1, GameWin1, Level2, GameOver2, GameWin2]
};


var map1;
var map2;

var player;

var door;

var score;
var scoreText;
var scoreImage;

var lives;
var lives_sprite;

var goal_win;

var jump_sign;

var spikes;
var slimes;
var slimes_bouncy;
var slime_heart;
var slime_jump;
var slime_plus;

var cursors;
var gameOver;
var velocity1;
var velocity2;
var velocity3;

var initialTime;
var timedEvent;
var timeText;

window.onload = function(){
    game = new Phaser.Game(config)
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame());
}
var resizeGame = function(){
    let canvas = document.querySelector("canvas");
    const {innerWidth,innerHeight} = window;
    const ratio = innerWidth / innerHeight;
    const gameRatio = game.config.width / game.config.height;

    if(ratio < gameRatio){
        canvas.style.width = innerWidth + "px";
        canvas.style.height = innerHeight / gameRatio + "px";
    }
    else{
        canvas.style.width = innerWidth - gameRatio + "px";
        canvas.style.height = innerWidth + "px";
    }
}