class GameOver1 extends Phaser.Scene {
    constructor() {
        super("gameover1");
    }

    preload(){

    }

    create(){
        console.log("game over 1");

        this.click=this.sound.add("click", {loop:false});

        this.music_gameover=this.sound.add("music_gameover", {loop:true}).setVolume(0.5);
        this.music_gameover.play();
        
        var bg = this.add.image(800, 450, "bg_over");
            

        var button_restart = this.add.image(315, 407, "button_restart")
            button_restart.setInteractive()
            button_restart.on("pointerdown", () => {this.sound.stopByKey("music_gameover"), this.click.play(), this.scene.start("level1")} );

        var button_menu = this.add.image(250, 660, "button_menu")
        button_menu.setInteractive()
        button_menu.on("pointerdown", () => {this.sound.stopByKey("music_gameover"), this.click.play(), this.scene.start("menu")} );

        var slime_over = this.add.image(1100, 650, "slime_over").setScale(25);
    }

    update(){

    }
}