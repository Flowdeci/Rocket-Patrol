class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue){
        //calls the parent gameObject.sprtie class
        super(scene,x,y,texture,frame);
        //add object to scene
        scene.add.existing(this);
        this.points=pointValue;
        this.moveSpeed=game.settings.spaceshipSpeed;
    }

    update(){
        this.x-=this.moveSpeed;

        //wrap around from left edge to right edge
        if(this.x<=0-this.width){//subtract the width to make sure its fully off
            this.x=game.config.width;
        }
    }

    reset(){
        this.x=game.config.width;
    }

}