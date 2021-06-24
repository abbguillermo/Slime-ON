class Credits extends Phaser.Scene {
    constructor() {
        super("credits");
    }

    preload(){

    }

    create(){
        this.click=this.sound.add("click", {loop:false});

        var bg = this.add.image(800, 450, "bg_credits");
            

        var button_back = this.add.image(140, 75, "button_back")
            button_back.setInteractive()
            button_back.on("pointerdown", () => {this.click.play(), this.scene.start("menu")} );
    }

    update(){

    }
}