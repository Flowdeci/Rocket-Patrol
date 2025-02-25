class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        //just calls the gameobjecs. srpite parent class 
        super(scene, x, y, texture, frame)

        //add object to scene
        scene.add.existing(this)// add to existing, displayList, updateList
        this.isFiring = false;///track rocekts firing status
        this.moveSpeed = 2;//rocket speed in pixels/frame

        this.sfxShot = scene.sound.add('sfx_shot');

        this.scene = scene;
    }

    update() {
        //left/right movement and if were firing the rocket we cant move


        if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed
        }

        //mouse controls
        if (this.scene.input.activePointer.rightButtonDown()) {
            //going to the left so the mouse needs to be to the left of the rocket
            if (this.scene.input.activePointer.x < this.x && this.scene.input.activePointer.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if (this.scene.input.activePointer.x > this.x && this.scene.input.activePointer.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }

        //fire button
        if (Phaser.Input.Keyboard.JustDown(keyFIRE) || this.scene.input.activePointer.leftButtonDown()) {
            this.isFiring = true;
            this.sfxShot.play();
        }

        //if fired, move up
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        //reset on miss
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding
        }

    }

    //reset rocket to ground
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
        
    }
}