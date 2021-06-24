class Level1 extends Phaser.Scene {
    constructor() {
        super("level1");
    }


    create(){
        gameOver=false;
        score=0;
        lives=5;
        velocity1=300;
        velocity2=500;
        velocity3=500;
        console.log("level1")

//map
        map1 = this.make.tilemap({ key: "mapa1"});
        var tilesets = map1.addTilesetImage("TileMap-Programacion1-TPFinal-2021", "tiles");

        var background = map1.createLayer("Fondo", tilesets, 0, 0);
        var decorations = map1.createLayer("Decoraciones", tilesets, 0, 0);
        var platforms = map1.createLayer("Plataformas", tilesets, 0, 0);
        platforms.setCollisionByProperty({solido: true});
        var platformsDmg = map1.createLayer("PlataformasDaño", tilesets, 0, 0);
        platformsDmg.setCollisionByProperty({solido: true});
        var platformsCure = map1.createLayer("PlataformaCura", tilesets, 0, 0);
        platformsCure.setCollisionByProperty({solido: true});

//player
        player=this.physics.add.sprite(200, 1005, "player").setSize(30, 32);
        player.setGravityY(1000)

//lives sprite
        lives_sprite=this.add.sprite(813, 430, "lives");
        lives_sprite.setScrollFactor(0);

//score
        scoreImage= this.physics.add.image(800, 550, "score_count");
        scoreImage.setScrollFactor(0);
        
        scoreText=this.add.text(770, 540, "0", { fontSize: '20px', fill: '#00D2FA', strokeThickness: 3});
        scoreText.setScrollFactor(0);

//spikes
        spikes=this.physics.add.staticGroup();
        spikes.create(304, 1012, "spikes_D").setSize(15, 15);
        spikes.create(784, 1012, "spikes_D").setSize(15, 15);
        spikes.create(816, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1104, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1616, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1648, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1680, 1012, "spikes_D").setSize(15, 15);
        spikes.create(272, 756, "spikes_D").setSize(15, 15);
        spikes.create(1136, 756, "spikes_D").setSize(15, 15);
        spikes.create(1168, 756, "spikes_D").setSize(15, 15);
        spikes.create(1584, 756, "spikes_D").setSize(15, 15);
        spikes.create(240, 500, "spikes_D").setSize(15, 15);
        spikes.create(752, 500, "spikes_D").setSize(15, 15);
        spikes.create(1136, 500, "spikes_D").setSize(15, 15);
        spikes.create(1584, 500, "spikes_D").setSize(15, 15);
        spikes.create(1616, 500, "spikes_D").setSize(15, 15);
        spikes.create(304, 244, "spikes_D").setSize(15, 15);
        spikes.create(912, 244, "spikes_D").setSize(15, 15);
        spikes.create(1136, 244, "spikes_D").setSize(15, 15);
        spikes.create(1168, 244, "spikes_D").setSize(15, 15);
        spikes.create(368, 940, "spikes_U").setSize(15, 15);
        spikes.create(912, 940, "spikes_U").setSize(15, 15);
        spikes.create(944, 940, "spikes_U").setSize(15, 15);
        spikes.create(1520, 940, "spikes_U").setSize(15, 15);
        spikes.create(368, 684, "spikes_U").setSize(15, 15);
        spikes.create(336, 428, "spikes_U").setSize(15, 15);
        spikes.create(304, 428, "spikes_U").setSize(15, 15);
        spikes.create(752, 172, "spikes_U").setSize(15, 15);
        spikes.create(784, 172, "spikes_U").setSize(15, 15);
        spikes.create(817, 172, "spikes_U").setSize(15, 15);
        spikes.create(1009, 172, "spikes_U").setSize(15, 15);
        spikes.create(172, 687, "spikes_L").setSize(15, 15);
        spikes.create(492, 303, "spikes_L").setSize(15, 15);
        spikes.create(596, 847, "spikes_R").setSize(15, 15);
        spikes.create(852, 687, "spikes_R").setSize(15, 15);
        spikes.create(1428, 879, "spikes_R").setSize(15, 15);
        spikes.create(1428, 335, "spikes_R").setSize(15, 15);

//slimes
        slimes = this.physics.add.group()
        slimes.create(Phaser.Math.FloatBetween(300, 400), 970, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1712, 1744), 970, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(170, 400), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(170, 400), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(615, 860), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(615, 860), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1124, 1300), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1124, 1300), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1450, 1744), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1450, 1744), 715, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(170, 400), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(170, 400), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(615, 860), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(615, 860), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1124, 1300), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1124, 1300), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1450, 1744), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(1450, 1744), 472, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(170, 400), 200, "slime_static").setGravityY(1000).setBounce(1);
        slimes.create(Phaser.Math.FloatBetween(170, 400), 200, "slime_static").setGravityY(1000).setBounce(1);

//slimes bouncy
        slimes_bouncy=this.physics.add.group({
            key: "slime_bouncy",
            repeat: Phaser.Math.Between(2, 9),
            setXY: {x: 492, y: 160, stepX: 150}
        });
        slimes_bouncy.children.iterate(function(child){
            child.setBounce(1);
            child.setCircle(10);
            child.setVelocity (Phaser.Math.Between(-300, 300), 150);
            child.setGravityY(500);
        });

//slime heart
        slime_heart=this.physics.add.image(1664,220, "slime_heart").setScale(2, 2).setSize(20, 20).setGravityY(1000).setBounce(1);

//cursors
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        cursors=this.input.keyboard.createCursorKeys();

//collisions
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, spikes, this.damage, null, this);
        this.physics.add.collider(player, platformsCure);
        this.physics.add.collider(player, platformsDmg, /*this.damage, null, this*/);
        this.physics.add.overlap(player, slime_heart, this.cure, null, this);
        this.physics.add.overlap(player, slimes, this.collectSlime, null, this);
        this.physics.add.collider(platformsCure, slime_heart);
        this.physics.add.collider(platforms, slimes);
        this.physics.add.collider(spikes, slimes);
        this.physics.add.collider(platformsDmg, slimes);
        this.physics.add.overlap(player, slimes_bouncy, this.collectSlimeBouncy, null, this);
        this.physics.add.collider(platforms, slimes_bouncy);
        this.physics.add.collider(platformsDmg, slimes_bouncy);
        this.physics.add.collider(platformsCure, slimes_bouncy);
        //this.physics.add.collider(spikes, slimes_bouncy);

//sounds
        this.jump=this.sound.add("jump", {loop:false}).setDetune(-500).setVolume(0.5);
        this.music_gameplay=this.sound.add("music_gameplay", {loop:true}).setVolume(0.5);
        this.music_gameplay.play();
        this.slime_big=this.sound.add("slime_big", {loop:false});
        this.slime_small=this.sound.add("slime_small", {loop:false});
        this.life=this.sound.add("life", {loop:false}).setVolume(0.5);
        this.hit=this.sound.add("hit", {loop:false}).setVolume(0.5);

//camera
        this.cameras.main.setBounds(0, 0, map1.widthInPixels, map1.heightInPixels);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(1);

//timer
        initialTime = 120
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(810, 460, '', { fontSize: '25px', fill: '#00D2FA', strokeThickness: 3});
        timeText.setScrollFactor(0);


    }

    update(){
        if (gameOver){       
            return
        }

//Stick down
        if (player.body.blocked.down){
            if(this.cameras.main.zoom<4){
                this.cameras.main.zoom=this.cameras.main.zoom+0.03;
            }
            player.setVelocity(0);
            player.setGravityY(1000);
            player.setGravityX(0);
            player.flipY=false

                if (cursors.left.isDown && cursors.up.isDown){
                    player.setVelocityX(-velocity1);
                    player.setVelocityY(-velocity2);
                    player.flipX=true;
                    this.jump.play();
                }
                else if (cursors.right.isDown && cursors.up.isDown){
                    player.setVelocityX(velocity1);
                    player.setVelocityY(-velocity2);
                    player.flipX=false;
                    this.jump.play();
                }
                else if (cursors.left.isDown){
                    player.setVelocityX(-velocity1);
                    player.anims.play("sides", true);
                    player.flipX=true;
                }
                else if (cursors.right.isDown){
                    player.setVelocityX(velocity1);
                    player.anims.play("sides", true);
                    player.flipX=false;
                }
                else if (cursors.up.isDown){
                    player.setVelocityY(-velocity2)
                    this.jump.play();
                }
                else{
                    player.anims.play("idle", true);
                }
        }
        else

//Stick up
        if (player.body.blocked.up){
            if (this.cameras.main.zoom<4){
                this.cameras.main.zoom=this.cameras.main.zoom+0.03;
            }
            player.setVelocity(0);
            player.setGravityY(-1000);
            player.setGravityX(0);
            player.flipY=true

                if (cursors.left.isDown && cursors.down.isDown){
                    player.setVelocityX(-velocity1);
                    player.setVelocityY(velocity2 - 400);
                    player.flipX=true;
                    this.jump.play();
                }
                else if (cursors.right.isDown && cursors.down.isDown){
                    player.setVelocityX(velocity1);
                    player.setVelocityY(velocity2 - 400);
                    player.flipX=false;
                    this.jump.play();
                }
                else if (cursors.left.isDown){
                    player.setVelocityX(-velocity1);
                    player.anims.play("sides", true);
                    player.flipX=true;
                }
                else if (cursors.right.isDown){
                    player.setVelocityX(velocity1);
                    player.anims.play("sides", true);
                    player.flipX=false;
                    
                }
                else if (cursors.down.isDown){
                    player.setVelocityY(velocity2 - 400)
                    this.jump.play();
                }
                else{
                    player.anims.play("idle", true);
                }
        }
        else

//Stick left
        if (player.body.blocked.left){
            if (this.cameras.main.zoom<4){
                this.cameras.main.zoom=this.cameras.main.zoom+0.03;
            }
            player.setVelocity(0);
            player.setGravityX(-1000);
            player.setGravityY(0);
            player.flipX=false
            player.flipY=false;

                if(cursors.up.isDown && cursors.right.isDown){
                    player.setVelocityY(-velocity1);
                    player.setVelocityX(velocity3);
                    player.flipX=false;
                    this.jump.play();
                }
                else if (cursors.down.isDown && cursors.right.isDown){
                    player.setVelocityY(velocity1);
                    player.setVelocityX(velocity3);
                    player.flipX=false;
                    this.jump.play();
                }
                else if (cursors.up.isDown){
                    player.setVelocityY(-velocity1);
                    player.anims.play("up-down", true);
                    player.flipX=false;
                }
                else if (cursors.down.isDown){
                    player.setVelocityY(velocity1);
                    player.anims.play("up-down", true);
                    player.flipX=false;
                }
                else if (cursors.right.isDown){
                    player.setVelocityX(velocity3)
                    this.jump.play();
                }
                else{
                    player.anims.play("idle-walls", true);
                }
        }
        else

//Stick right
        if (player.body.blocked.right){
            if (this.cameras.main.zoom<4){
                this.cameras.main.zoom=this.cameras.main.zoom+0.03;
            }
            player.setVelocity(0);
            player.setGravityX(1000);
            player.setGravityY(0);
            player.flipX=true;
            player.flipY=false;

                if(cursors.down.isDown && cursors.left.isDown){
                    player.setVelocityY(velocity1);
                    player.setVelocityX(-velocity3);
                    player.flipX=true;
                    this.jump.play();
                }
                else if (cursors.up.isDown && cursors.left.isDown){
                    player.setVelocityY(-velocity1);
                    player.setVelocityX(-velocity3);
                    player.flipX=true;
                    this.jump.play();
                }
                else if (cursors.down.isDown){
                    player.setVelocityY(velocity1);
                    player.anims.play("up-down", true);
                    player.flipX=true;
                }
                else if (cursors.up.isDown){
                    player.setVelocityY(-velocity1);
                    player.anims.play("up-down", true);
                    player.flipX=true;
                }
                else if (cursors.left.isDown){
                    player.setVelocityX(-velocity3)
                    this.jump.play();
                }
                else{
                    player.anims.play("idle-walls", true);
                }
        }
        else{
            setTimeout(()=> {
                if (this.cameras.main.zoom>2){
                this.cameras.main.zoom=this.cameras.main.zoom-0.02;
                }
            }, 50);

            player.anims.play("air", true);
            player.setGravityY(993);
            player.setGravityX(0);

            if (cursors.left.isDown){
                player.setVelocityX(-velocity1);
                
            }
            else if (cursors.right.isDown){
                player.setVelocityX(velocity1);
            }
        }

        if(score>=20){
            this.win();
        }

        if (lives===5){
            lives_sprite.setFrame(1);
        }
        else
        if (lives===4){
            lives_sprite.setFrame(2);
        }
        else
        if (lives===3){
            lives_sprite.setFrame(3);
        }
        else
        if (lives===2){
            lives_sprite.setFrame(4);
        }
        else
        if (lives===1){
            lives_sprite.setFrame(5);
        }
        else
        if (lives===6){
            lives_sprite.setFrame(0);
        }
        
    }

    collectSlime(player, slime){
        this.slime_big.play()
        score+=1;
        scoreText.setText(score);
        console.log("score: " + score);
        slime.disableBody(true, true);
    }

    collectSlimeBouncy(player, slimeBouncy){
        this.slime_small.play()
        score+=.5;
        scoreText.setText(score);
        console.log("score: " + score);
        slimeBouncy.disableBody(true, true);

        if((slimes_bouncy.countActive(true)===0)){
            slimes_bouncy.children.iterate(function(child){
                child.enableBody(true, child.x, child.y, true, true);
                child.setVelocity(Phaser.Math.Between(-300, 300), 300);
            });
        }
    }

    damage(player, spike){
        this.hit.play()
        if (! gameOver){
            if(lives>0){    
                lives--
                console.log("lives: " + lives);
            }
                spike.disableBody(false,true);
            

            if(lives===0){
                lives_sprite.setFrame(6);
                this.death();
                
            }
        } 
    }

    cure(player, heart){
        this.life.play()
        if (! gameOver){
        
            if (lives<6) {
                lives++
                console.log("lives: " + lives);
                heart.disableBody(false, true);
                setTimeout(()=> {
                    heart.enableBody(true, 1664,220, true, true);
                    console.log("heart: active");
                }, (Phaser.Math.FloatBetween(10000, 40000)));
            }
        }
    }

    death(){
        gameOver=true
        lives_sprite.setFrame(6);
        player.anims.play("death");
        console.log("over");
        setTimeout(()=> {
            this.sound.stopByKey("music_gameplay");
            this.scene.start("gameover1");
        }, 1000);
    }

    win(){
        gameOver=true;
        setTimeout(()=> {
            this.sound.stopByKey("music_gameplay");
            this.scene.start("gamewin1");
        }, 500);
    }

    
onSecond() {
        if (! gameOver){       
            initialTime = initialTime - 1; // One second
            timeText.setText("" + initialTime);
            if (initialTime == 0) {
                gameOver=true;
                timedEvent.paused = true;
                this.death()
            }            
        }

    }

}
