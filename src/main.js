    console.log("i hate broke people");

let config={
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    input: {
        keyboard: true
    }
}

//reserve keybinds
let keyFIRE, keyRESET, keyLEFT, keyRIGHT;

let game=new Phaser.Game(config);




//set ui sizes
let borderUISize=game.config.height/15;
let borderPadding=borderUISize/3;