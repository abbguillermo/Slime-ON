class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    preload(){
        
    }

    create(){
        this.click=this.sound.add("click", {loop:false});

        var bg = this.add.image(800, 450, "bg_menu");
            

        var button_play = this.add.image(290, 460, "button_play")
            button_play.setInteractive()
            button_play.on("pointerdown", () => {this.sound.stopByKey("music_menu"), this.click.play(), this.scene.start("level1")} );

        var button_credits = this.add.image(265, 810, "button_credits")
        button_credits.setInteractive()
        button_credits.on("pointerdown", () => {this.click.play(), this.scene.start("credits")} );

        var slime_menu = this.add.image(1200, 570, "slime_menu").setScale(30);
    }

    update(){

    }
}