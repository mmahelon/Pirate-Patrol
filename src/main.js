//Micah Mahelona, 4/17/2022
//Pirate Patrol, 18 hrs

//Point Breakdown
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
//-Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
//-Display the time remaining (in seconds) on the screen (10)
//-Implement the 'FIRE' UI text from the original game (5)
//-Add your own (copyright-free) background music to the Play scene (5)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
 
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;