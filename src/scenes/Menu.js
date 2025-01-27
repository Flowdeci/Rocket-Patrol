class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    init() {
        console.log("Menu: init");
    }

    preload() {
        //load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
        this.load.image('ufo', './assets/ufo.png')

        //load explositon spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })

        //load auido
        this.load.audio('sfx_select', './assets/sfx-select.wav')
        this.load.audio('sfx_explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx_shot','./assets/sfx-shot.wav')
        this.load.audio('sfx_explosion-2','./assets/explosion-2.mp3')
        this.load.audio('sfx_explosion-3','./assets/explosion-3.mp3')
        this.load.audio('sfx_explosion-4','./assets/explosion-4.mp3')
        this.load.audio('sfx_explosion-5','./assets/explosion-5.mp3')

    }

    //adds objects to the scene
    create() {
        //animation creation, animaitons are stored in the asset cache, and can be used 
        //in all the scnes of the game
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0,
                end: 9,
                first: 0
            }),
            frameRate: 30
        });

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Rocket Patrol-The Final Rocket', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,game.config.height/2, 'Use arros and F or mouse to play', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor='#00FF00';
        menuConfig.color='#000';
        this.add.text(game.config.width/2,game.config.height/2+borderUISize+borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
        

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
       
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //easy mode
            game.settings= {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            //hard mode
            game.settings= {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }
}