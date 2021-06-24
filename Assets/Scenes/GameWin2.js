class GameWin2 extends Phaser.Scene {
    constructor() {
        super("gamewin2");
    }

    preload(){

    }

    create(){
        console.log("game win 2");

        this.click=this.sound.add("click", {loop:false});

        this.music_menu=this.sound.add("music_menu", {loop:true}).setVolume(0.5);
        this.music_menu.play();

        
        var bg = this.add.image(800, 450, "bg_win");

        var button_next = this.add.image(370, 390, "button_next")

        var button_restart = this.add.image(315, 570, "button_restart")
            button_restart.setInteractive()
            button_restart.on("pointerdown", () => {this.sound.stopByKey("music_menu"), this.click.play(), this.scene.start("level2")} );

        var button_menu = this.add.image(250, 760, "button_menu")
        button_menu.setInteractive()
        button_menu.on("pointerdown", () => {this.click.play(), this.scene.start("menu")} );

        var slime_over = this.add.image(1100, 650, "slime_win").setScale(25);
    }

    update(){

    }
}