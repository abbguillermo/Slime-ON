class Level2 extends Phaser.Scene {
    constructor() {
        super("level2");
    }

    create(){
        gameOver=false;
        score=0;
        lives=5;
        velocity1=300;
        velocity2=500;
        velocity3=500;
        console.log("level2")

//map
        map1 = this.make.tilemap({ key: "mapa2"});
        var tilesets = map1.addTilesetImage("TileMap-Programacion1-TPFinal-2021", "tiles");

        var background = map1.createLayer("Fondo", tilesets, 0, 0);
        var goal = map1.createLayer("Meta", tilesets, 0, 0);
        var platforms = map1.createLayer("Plataformas", tilesets, 0, 0);
        platforms.setCollisionByProperty({solido: true});
        var spikesEnd = map1.createLayer("Pinchos", tilesets, 0, 0);
        spikesEnd.setCollisionByProperty({solido: true});

//player
        player=this.physics.add.sprite(400, 1005, "player").setSize(30, 32);
        player.setGravityY(1000)

//lives sprite
        lives_sprite=this.add.sprite(813, 430, "lives");
        lives_sprite.setScrollFactor(0);

//spikes
        spikes=this.physics.add.staticGroup();
        spikes.create(848, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1008, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1200, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1232, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1392, 1012, "spikes_D").setSize(15, 15);
        spikes.create(1008, 788, "spikes_D").setSize(15, 15);
        spikes.create(688, 276, "spikes_D").setSize(15, 15);
        spikes.create(656, 276, "spikes_D").setSize(15, 15);
        spikes.create(1072, 244, "spikes_D").setSize(15, 15);
        spikes.create(1104, 244, "spikes_D").setSize(15, 15);
        spikes.create(912, 939, "spikes_U").setSize(15, 15);
        spikes.create(944, 939, "spikes_U").setSize(15, 15);
        spikes.create(944, 171, "spikes_U").setSize(15, 15);
        spikes.create(912, 171, "spikes_U").setSize(15, 15);
        spikes.create(880, 171, "spikes_U").setSize(15, 15);
        spikes.create(1648, 651, "spikes_U").setSize(15, 15);
        spikes.create(1680, 651, "spikes_U").setSize(15, 15);
        spikes.create(523, 816, "spikes_L").setSize(15, 15);
        spikes.create(523, 784, "spikes_L").setSize(15, 15);
        spikes.create(437, 592, "spikes_R").setSize(15, 15);
        spikes.create(437, 560, "spikes_R").setSize(15, 15);
        spikes.create(1749, 880, "spikes_R").setSize(15, 15);
        spikes.create(1749, 912, "spikes_R").setSize(15, 15);
        spikes.create(1557, 912, "spikes_R").setSize(15, 15);
        spikes.create(1557, 944, "spikes_R").setSize(15, 15);
        spikes.create(1557, 880, "spikes_R").setSize(15, 15);
        spikes.create(1557, 848, "spikes_R").setSize(15, 15);
        spikes.create(1557, 816, "spikes_R").setSize(15, 15);
        

//slimes
        slimes=this.physics.add.group({
            key: "slime_static",
            repeat: Phaser.Math.Between(15, 20),
            setXY: {x: 525, y: 300, stepX: 60}
        });
        slimes.children.iterate(function(child){
            child.setBounce(.5);
            child.setGravityY(500);
        });
        

//slimes bouncy
        slimes_bouncy=this.physics.add.group({
            key: "slime_bouncy",
            repeat: Phaser.Math.Between(2, 9),
            setXY: {x: 550, y: 160, stepX: 150}
        });
        slimes_bouncy.children.iterate(function(child){
            child.setBounce(.99);
            child.setCircle(10);
            child.setVelocity (Phaser.Math.Between(-300, 300), 300);
            child.setGravityY(200);
        });

//slime plus
        slime_plus=this.physics.add.image(Phaser.Math.FloatBetween(1450, 1600), 180, "slime_plus"). setGravity(Phaser.Math.FloatBetween(100, 900)). setBounce(1);

//slime heart
        slime_heart=this.physics.add.image(400, 200, "slime_heart").setScale(2, 2).setSize(20, 20);

//slime jump
        slime_jump=this.physics.add.image(220, 900, "slime_jump").setScale(2, 2).setGravityY(500);

//laser ball
        var laser_ball=this.physics.add.image(800, 300, "laser").setGravityY(500). setSize(20, 20). setBounce(1). setVelocity(300);

//door
        door=this.physics.add.image(320, 976, "door").setImmovable(true);

//goal win
        goal_win=this.physics.add.image(225, 400);

//jump sign
        jump_sign=this.add.image(230, 950, "jump_sign").setVisible(false);

//cursors
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        cursors=this.input.keyboard.createCursorKeys();

//collisions
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, spikes, this.damage, null, this);
        this.physics.add.collider(player, spikesEnd, this.damageEnd, null, this);
        this.physics.add.overlap(player, slime_heart, this.cure, null, this);
        this.physics.add.overlap(player, slimes, this.collectSlime, null, this);
        this.physics.add.overlap(player, slime_jump, this.CollectSlimeJump, null, this);
        this.physics.add.overlap(player, slime_plus, this.CollectSlimePlus, null, this);
        this.physics.add.collider(player, door);
        this.physics.add.collider(player, laser_ball, this.death, null, this);
        this.physics.add.collider(platforms, slimes);
        this.physics.add.overlap(player, slimes_bouncy, this.collectSlimeBouncy, null, this);
        this.physics.add.collider(platforms, slimes_bouncy);
        this.physics.add.collider(platforms, slime_heart);
        this.physics.add.collider(platforms, slime_jump);
        this.physics.add.collider(platforms, slime_plus);
        this.physics.add.collider(platforms, laser_ball);
        this.physics.add.overlap(player, goal_win, this.win, null, this);
        //this.physics.add.collider(spikes, slimes_bouncy);

//sounds
        this.jump=this.sound.add("jump", {loop:false}).setDetune(-500).setVolume(0.5);
        this.music_gameplay=this.sound.add("music_gameplay", {loop:true}).setVolume(0.5);
        this.music_gameplay.play();
        this.slime_big=this.sound.add("slime_big", {loop:false});
        this.slime_small=this.sound.add("slime_small", {loop:false});
        this.life=this.sound.add("life", {loop:false}).setVolume(0.5);
        this.hit=this.sound.add("hit", {loop:false}).setVolume(0.5);
        this.sound_door=this.sound.add("sound_door", {loop:false}).setVolume(0.5);

//camera
        this.cameras.main.setBounds(0, 0, map1.widthInPixels, map1.heightInPixels);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(1);

//timer
        initialTime = 120
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(810, 460, '', { fontSize: '25px', fill: '#00D2FA', strokeThickness: 3});
        timeText.setScrollFactor(0);

//score
        scoreImage= this.physics.add.image(800, 550, "score_count");
        scoreImage.setScrollFactor(0);

        scoreText=this.add.text(770, 540, "0", { fontSize: '20px', fill: '#00D2FA', strokeThickness: 3});
        scoreText.setScrollFactor(0);
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

        if (score>=20){
            scoreText.setText(":D");
            this.openDoor();
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

    damageEnd(player, spike){
        if (! gameOver){
            lives=0
            console.log("lives: " + lives);
            
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
                    heart.enableBody(true, 400, 200, true, true);
                    console.log("heart: active");
                }, (Phaser.Math.FloatBetween(10000, 40000)));
            }
        }
    }

    CollectSlimeJump(player, slime_jump){
        this.life.play()
        velocity2=1200
        console.log("salto");
        slime_jump.disableBody(true, true);
        door.enableBody(true, 320, 976, true, true);
        jump_sign.setVisible(true);
    }

    CollectSlimePlus(player, slime_plus){
        score+=5;
        scoreText.setText(score);
        console.log("score: " + score);
        slime_plus.disableBody(true, true);
    }

    openDoor(){
        this.sound_door.play()
        console.log("door open")
        score="";
        door.disableBody(false,true);
        
    }

    death(){
        gameOver=true;
        lives_sprite.setFrame(6);
        player.anims.play("death");
        console.log("over");
        setTimeout(()=> {
            this.sound.stopByKey("music_gameplay");
            this.scene.start("gameover2");
        }, 1000);

        
    }

    win(){
        gameOver=true;
        goal_win.disableBody(true, true);
        console.log("win");
        setTimeout(()=> {
            this.sound.stopByKey("music_gameplay");
            this.scene.start("gamewin2");
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