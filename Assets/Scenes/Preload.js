class Preload extends Phaser.Scene {
    constructor() {
        super("preload");
    }
    
    
    preload(){
        this.load.spritesheet("player", "./Assets/Sprites/player_spritesheet.png", {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet("lives", "./Assets/Sprites/lives_spritesheet.png", {frameWidth:96, frameHeight: 16});

        this.load.image("spikes_D", "./Assets/Sprites/spikes_down.png");
        this.load.image("spikes_U", "./Assets/Sprites/spikes_up.png");
        this.load.image("spikes_L", "./Assets/Sprites/spikes_left.png");
        this.load.image("spikes_R", "./Assets/Sprites/spikes_right.png");
        this.load.image("slime_static", "./Assets/Sprites/slime_static.png");
        this.load.image("slime_bouncy", "./Assets/Sprites/slime_bouncy.png");
        this.load.image("slime_heart", "./Assets/Sprites/slime_heart.png");
        this.load.image("slime_jump", "./Assets/Sprites/slime_speed.png");
        this.load.image("slime_plus", "./Assets/Sprites/slime_plus.png");
        this.load.image("door", "./Assets/Sprites/door_end.png");
        this.load.image("button_back", "./Assets/Sprites/button_back.png");
        this.load.image("button_next", "./Assets/Sprites/button_gamewin_nextlevel.png");
        this.load.image("button_menu", "./Assets/Sprites/button_menu.png");
        this.load.image("button_restart", "./Assets/Sprites/button_restart.png");
        this.load.image("button_credits", "./Assets/Sprites/menu_credits.png");
        this.load.image("button_play", "./Assets/Sprites/menu_play.png");
        this.load.image("bg_menu", "./Assets/Sprites/menu_fondo.png");
        this.load.image("bg_credits", "./Assets/Sprites/credits.png");
        this.load.image("bg_win", "./Assets/Sprites/gamwin_fondo.png");
        this.load.image("bg_over", "./Assets/Sprites/gameover_fondo.png");
        this.load.image("slime_menu", "./Assets/Sprites/menu_slime.png");
        this.load.image("slime_win", "./Assets/Sprites/gamewin_slime.png");
        this.load.image("slime_over", "./Assets/Sprites/gameover_slime.png");
        this.load.image("laser", "./Assets/Sprites/laser.png");
        this.load.image("jump_sign", "./Assets/Sprites/jump_sign.png" );
        this.load.image("score_count", "./Assets/Sprites/contador_score.png" );

        this.load.audio("jump", "./Assets/Audio/SFX/slime_small.mp3");
        this.load.audio("click", "./Assets/Audio/SFX/click.mp3");
        this.load.audio("slime_big", "./Assets/Audio/SFX/slime_big.mp3");
        this.load.audio("slime_small", "./Assets/Audio/SFX/slime_small.mp3");
        this.load.audio("life", "./Assets/Audio/SFX/gain_life.mp3");
        this.load.audio("hit", "./Assets/Audio/SFX/hit.mp3");
        this.load.audio("sound_door", "./Assets/Audio/SFX/door.mp3");
        this.load.audio("music_menu", "./Assets/Audio/Music/music_menu.mp3");
        this.load.audio("music_gameplay", "./Assets/Audio/Music/music_gameplay.mp3");
        this.load.audio("music_gameover", "./Assets/Audio/Music/music_gameover.mp3");
        

        this.load.tilemapTiledJSON("mapa1", "./Assets/Maps/mapa1.json");
        this.load.tilemapTiledJSON("mapa2", "./Assets/Maps/mapa2.json");
        this.load.image("tiles", "./Assets/Maps/TileMap-Programacion1-TPFinal-2021.png");
    }

    create(){
        this.anims.create({
            key: "sides",
            frames: this.anims.generateFrameNumbers("player", {start: 1, end: 4}),
            frameRate: 6,
        });
        this.anims.create({
            key: "up-down",
            frames: this.anims.generateFrameNumbers("player", {start: 6, end: 9}),
            frameRate: 6,
        });
        this.anims.create({
            key: "death",
            frames: this.anims.generateFrameNumbers("player", {start: 12, end: 17}),
            frameRate: 10,
        });
        this.anims.create({
            key: "idle",
            frames: [{key: "player", frame: 0}],
        });
        this.anims.create({
            key: "idle-walls",
            frames: [{key: "player", frame: 7}],
        });
        this.anims.create({
            key: "air",
            frames: [{key: "player", frame: 10}],
        });

        this.music_menu=this.sound.add("music_menu", {loop:true}).setVolume(0.5);
        this.music_menu.play();
        this.sound.pauseOnBlur=false

        this.scene.start("menu");
        
    }
}