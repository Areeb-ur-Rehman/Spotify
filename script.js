console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('./assets/STUBBORN.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Stubborn", filePath: "./assets/STUBBORN", coverPath: "assets/1.stubborn"},
    {songName: "Stubborn", filePath: "./assets/1.mp3", coverPath: "covers/1.cover"},
    {songName: "Stubborn", filePath: "./assets/2.mp3", coverPath: "covers/2.cover"},
    {songName: "Stubborn", filePath: "./assets/3.mp3", coverPath: "covers/3.cover"},
    {songName: "Stubborn", filePath: "./assets/4.mp3", coverPath: "covers/4.cover"},
    {songName: "Stubborn", filePath: "./assets/5.mp3", coverPath: "covers/5.cover"},
    {songName: "Stubborn", filePath: "./assets/6.mp3", coverPath: "covers/6.cover"},
]

// songs.forEach((element,i)=>{
//     console.log(element, i);
//     element.getElementsByClassName("img")[0].src = songs[i].filePath;
// })

// let audioElement = new Audio('1.mp3');
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
    
})

// if(!audioElement.paused){
//     audioElement.pause()
// }

// listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100 );
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    Element.addEventListener('click', (e)=>{
        console.log(e);
    })
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.add('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove(' fa-circle-play');
        e.target.classList.add(' fa-circle-pause');

    })
})