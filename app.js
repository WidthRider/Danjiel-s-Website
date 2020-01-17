var songs = ["Watch (Original Mix)","Molly","Basic Chill","-Piano-","Sometimes","Relax (Original Mix)"];
var songsLength = ["3:20","4:37","4:08","3:50","3:55","2:45"];
var songsName = ["watchSong","mollySong","chillSong","pianoSong","sometimesSong","relaxSong"];
var songsStop = ["stopWatch()","stopMolly()","stopChill()","stopPiano()","stopSometimes()","stopRelax()"];
//const createSongsButton = document.querySelector(".mainButton");
document.body.onload=createSongs;

var watch =document.getElementById("watchSong");
var molly =document.getElementById("mollySong");
var chill =document.getElementById("chillSong");
var piano =document.getElementById("pianoSong");
var sometimes =document.getElementById("sometimesSong");
var relax =document.getElementById("relaxSong");

var songCheck = [watch,molly,chill,piano,sometimes,relax];


//--------------Creating Songfields
function createSongs(){
  for(var i = 0; i < songs.length ; i++){
    //create div
    var div=document.createElement("div");
    div.setAttribute("class","song1");
    
    //create ul
    var ul=document.createElement("ul");
    
    //create li containing Titel
    var liTitle=document.createElement("li");
    liTitle.textContent = songs[i];
    liTitle.setAttribute("class","smallitemSong");
    
    //create li containing stop Button
    var liStop=document.createElement("li");
    liStop.setAttribute("class","smallitemSong");
    var stopButton=document.createElement("button");
    stopButton.setAttribute("class","stopbutton");
    stopButton.setAttribute("onClick","stopSongs('"+songsName[i]+"')");
    var divStop=document.createElement("div");
    divStop.textContent="stop";
    
    //create li containing Play Button
    var liPlay=document.createElement("li");
    liPlay.setAttribute("class","smallitemSong");
    var playButton=document.createElement("button");
    playButton.setAttribute("class","playbutton");
    playButton.setAttribute("onClick", "playSongs('"+songsName[i]+"')");
    var playimg=document.createElement("img");
    playimg.setAttribute("src","img/playbutton_white.png");
    playimg.setAttribute("id","playbutton"+(i+1));
    playimg.setAttribute("alt","Playbutton");
    
    //create li containing Timeline
    var liTimer=document.createElement("li");
    liTimer.setAttribute("class","timeline");
    liTimer.textContent="Timeline";
    
    //create li containing length of song
    var liLength=document.createElement("li");
    liLength.setAttribute("class","smallitemSong");
    liLength.textContent=songsLength[i];
    
    //create hr
    var hr = document.createElement("hr");
    
    //Combine everything into one div and display it
    var curdiv = document.querySelector(".test");
    document.body.insertBefore(div, curdiv);
    div.appendChild(ul);
    ul.appendChild(liTitle);
    ul.appendChild(liStop);
    liStop.appendChild(stopButton);
    stopButton.appendChild(divStop);
    ul.appendChild(liPlay);
    liPlay.appendChild(playButton);
    playButton.appendChild(playimg);
    ul.appendChild(liTimer);
    ul.appendChild(liLength);
    div.appendChild(hr);
  }
 
}


var buttonNumber = 1;
//play, pause and stop Songs 
function playSongs(whichSong){
  //check which song got clicked on
  for(var i = 0; i < songCheck.length; i++){
    if(whichSong == songCheck[i].id){
      if(songCheck[i].paused) {
        
        //check if other songs are running and pause them
        if(!watch.paused || !molly.paused || !chill.paused || !piano.paused || !sometimes.paused || !relax.paused ){
          watch.pause();
          molly.pause();
          chill.pause();
          piano.pause();
          sometimes.pause();
          relax.pause();
          for(var y = 1; y <= 6; y++){
            document.getElementById("playbutton"+(y)).src="img/playbutton_white.png";
          }
        }
        //play song
        document.getElementById("playbutton"+(i+1)).src="img/pauseButton_white.png";
        songCheck[i].play();
        //pause song
      }else {
        document.getElementById("playbutton"+(i+1)).src="img/playbutton_white.png";
        songCheck[i].pause();
      }
      
    }
    
  }
  
}
//stop and reset song
function stopSongs(whichSong){
  for(var i = 0; i < songCheck.length; i++){
    if(whichSong == songCheck[i].id){
        document.getElementById("playbutton"+(i+1)).src="img/playbutton_white.png";
        songCheck[i].pause();
        songCheck[i].currentTime = 0;
    }
    
  }
}