const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['Downloads/WOOSUNG (김우성) – Come-Down.mp3']

//keep track of songs
let songIndex = 1

//initially load song info DOM
loadsong(songs[songIndex])

//update song details
function loadsong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadsong(songs[songIndex])

    playSong()
}

function nextSong(){
    songIndex++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadsong(songs[songIndex])

    playSong()
}

function updateProgress(e){
    const {duration, currentTime}= e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `%{progress.percent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duruation
}

//event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else {
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

const Audio = new Audio("/home/harutoasahi/Downloads/WOOSUNG (김우성) – Come-Down.mp3");
audio.src = "/home/harutoasahi/Downloads/WOOSUNG (김우성) – Come-Down.mp3";