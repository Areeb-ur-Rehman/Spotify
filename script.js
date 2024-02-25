console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('./assets/STUBBORN.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Stubborn", filePath: "./assets/STUBBORN", coverPath: "covers/true love"},
]

// let audioElement = new Audio('1.mp3');
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    
})

// if(!audioElement.paused){
//     audioElement.pause()
// }

// listen to Events
document.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
})