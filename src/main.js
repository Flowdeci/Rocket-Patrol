 //Name: Cody Karigaca
 //Title: Rocket Patrol- The Final Rocket
 //Time: 5 hours 
 //Mods: Mouse controls (5, have to hold right click to move),Allow the player to control the Rocket after it's fired (1),
 //Display the time remaining (in seconds) on the screen (3), Implement the speed increase that happens after 30 seconds in the original game (1)
 //Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
//Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
//3 5 pointers 2 1 pointers 1 3 pointer
 //Citaions: just the phaser documentation   
    console.log("i hate broke people");

let config={
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],
    input: {
        keyboard: true,
        pointer: true
    }
}

//reserve keybinds
let keyFIRE, keyRESET, keyLEFT, keyRIGHT;

let game=new Phaser.Game(config);




//set ui sizes
let borderUISize=game.config.height/15;
let borderPadding=borderUISize/3;