

let songIndex=0;
let audioElement= new Audio('./songs/1.mp3')
const PlayButton=document.getElementById("masterplay")
const PlayProcessing=document.getElementById("playProcessing")
// convert to array formet
const songitem= Array.from(document.getElementsByClassName('images_divider'))
let song=[
    { songName:"Bajrang Bann", filePath:"songs/1.mp3",coverPath:"covers/1.jpg" },
    { songName:"koka", filePath:"songs/2.mp3",coverPath:"covers/2.jpg" },
    { songName:"Bajrang Bann", filePath:"songs/3.mp3",coverPath:"covers/3.jpg" },
    { songName:"Bajrang Bann", filePath:"songs/4.mp3",coverPath:"covers/4.jpg" },
    { songName:"Bajrang Bann", filePath:"songs/5.mp3",coverPath:"covers/5.jpg" },
    { songName:"Bajrang Bann", filePath:"songs/6.mp3",coverPath:"covers/6.jpg" },

{ songName:"Bajrang Bann", filePath:"songs/7.mp3",coverPath:"covers/7.jpg" },
{ songName:"Bajrang Bann", filePath:"songs/8.mp3",coverPath:"covers/8.jpg" },
]
songitem.forEach(
    (e,i)=>{
 e.getElementsByTagName('img')[0].src=song[i].coverPath
e.getElementsByTagName('span')[0].innerText=song[i].songName
// e.getElementsByTagName('span')=song[i].songName
    }
)
PlayButton.addEventListener(
    'click',
    ()=>{
        if( audioElement.paused ||audioElement.currentTime <=0){
            audioElement.play();
            PlayButton.classList.remove("fa-circle-play")
            PlayButton.classList.add('fa-pause-circle')
        }else{
            audioElement.pause();
            PlayButton.classList.add("fa-circle-play")
            PlayButton.classList.remove('fa-pause-circle')
        }
    }
)
audioElement.addEventListener(
    "timeupdate",
    ()=>{
        let musictime= parseInt((audioElement.currentTime/audioElement.duration)*100)
        PlayProcessing.value=musictime
    }
 )
 PlayProcessing.addEventListener(
    "change",
    ()=>{
        audioElement.play();
        PlayButton.classList.add("fa-pause-circle")
        audioElement.currentTime=audioElement.duration*PlayProcessing.value/100
    }
 )
 const makesong =()=>{
    Array.from(document.getElementsByTagName("i")).forEach(
        (e)=>{
       e.classList.add('fa-circle-play')
        e.classList.remove('fa-pause-circle')
        }
       
    )
 }
 Array.from(document.getElementsByClassName('time_divider')).forEach(
    (e)=>{
    e.addEventListener(
        'click',
        (e)=>{

            songIndex=e.target.id
makesong();
e.target.classList.remove('fa-circle-play')
e.target.classList.add('fa-pause-circle')
audioElement.src= `songs/${songIndex}.mp3`
audioElement.currentTime <=0
audioElement.play()

PlayButton.classList.add('fa-pause-circle')
        }
    )

    }
 )
 document.getElementById('next').addEventListener(
    "click",
    ()=>{
        if(songIndex <=8){
            songIndex =parseInt( songIndex )+ 1
        }else{
            songIndex=1
            console.log("vikadfs")

        }
        console.log(songIndex,"out")
        audioElement.src= `songs/${ songIndex}.mp3`
        audioElement.currentTime <=0
        audioElement.play()
        PlayButton.classList.add('fa-pause-circle')
        PlayButton.classList.remove('fa-circle-play')
    }
 )
 document.getElementById('previes').addEventListener(
    "click",
    ()=>{
        if(songIndex <=1){
        songIndex = 1
        }
    
    else{
        songIndex =parseInt( songIndex )- 1


    }
    
    console.log( songIndex,"vikas")
        audioElement.src= `songs/${songIndex}.mp3`
        audioElement.currentTime <=0
        audioElement.play()
        PlayButton.classList.add('fa-pause-circle')
        PlayButton.classList.remove('fa-circle-play')


    }
 )
