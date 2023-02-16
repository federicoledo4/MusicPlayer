var contadorMusical=0;
var songCount=6;

document.addEventListener("DOMContentLoaded", function(){
    document.body.innerHTML+=`<audio id="audio" src="" autoplay loop></audio>`;
  });

function changeMusic(num){
    if(num===1){
        contadorMusical+=1;
    }else{
        contadorMusical-=1;
    }
    if (contadorMusical>songCount) {
      contadorMusical=0;
    }
    if (contadorMusical<0) {
      contadorMusical=10;
    }
    

    if (contadorMusical===0) {
      hablar("No tomes nada");
      document.getElementById("audio").src="";
      document.getElementById("Name").innerHTML="Ninguna"
      document.getElementById("Description").innerHTML="Vacio"
    }
    if (contadorMusical===1) {
      document.getElementById("audio").src="";
      hablar("Tomá una composición musical retro");
      setTimeout(() => {
      document.getElementById("audio").src="audio/songRetroFast.mp3";
      }, 4000);
      document.getElementById("Name").innerHTML="Retro Fast"
      document.getElementById("Description").innerHTML="The best song xd"
    }
    if (contadorMusical===2) {
      document.getElementById("audio").src="";
      hablar("Tomá música de cagaso");
      setTimeout(() => {
      document.getElementById("audio").src="audio/songScaryPlace2.mp3";
      },4000);
      document.getElementById("Name").innerHTML="Scary Place"
      document.getElementById("Description").innerHTML="Buuu prro"
    }
    if (contadorMusical===3) {
      document.getElementById("audio").src="";
      hablar("Tomá esta cancion sospechosa ");
      setTimeout(() => {
      document.getElementById("audio").src="audio/songSuspiciusPlace.mp3";
      },4000);
      document.getElementById("Name").innerHTML="Suspicious Place"
      document.getElementById("Description").innerHTML="Mmm...too much suspicius (A boss is coming!!)"
    }
    if (contadorMusical===4) {
      document.getElementById("audio").src="";
      hablar("Tomá música de cueva");
      setTimeout(() => {
      document.getElementById("audio").src="audio/songCave.mp3";
      },4000);
      document.getElementById("Name").innerHTML="Cave"
      document.getElementById("Description").innerHTML="It sounds like an old cave"
    }
    if (contadorMusical===5) {
      document.getElementById("audio").src="";
      hablar("Tomá una cancion china y calmada");
      setTimeout(() => {
      document.getElementById("audio").src="audio/chinesseCalmSong.mp3";
      },4000);
      document.getElementById("Name").innerHTML="Chinesse Calm"
      document.getElementById("Description").innerHTML="Mmm... (Peace and rice)"
    }
    if (contadorMusical===6) {
      document.getElementById("audio").src="";
      hablar("Toma musica mal hecha");
      setTimeout(() => {
      document.getElementById("audio").src="audio/wtf.mp3";
      },4000);
      document.getElementById("Name").innerHTML="Wtf Song"
      document.getElementById("Description").innerHTML="A bad quimera of sounds"
      
    }
    if (contadorMusical===7) {
      playSong("audio/songCave2.mp3", "Toma una segunda cancion de cueva", "Cave song 2", "mmm... Caves");
    }
    if (contadorMusical===8) {
      playSong("audio/songRock3.mp3", "Toma la tercera cancion de rock", "Rock Song 3", "mmm... Rock");
    }
    if (contadorMusical===9) {
      playSong("audio/songSrTobias.mp3", "la cancion del señor Tobias ¡siiii!", "Sr.Tobias Song", "Se nor. to bias... siiii");
    }
    if (contadorMusical===10) {
      playSong("audio/songStreesDistortionGuitar.mp3", "Toma una cancion estresante", "Strees Distortion Guitar Song", "Cuidao que te quedas sin hp");
    }
    
}

function playSong(songPath, talk, name, description){

  document.getElementById("audio").src="";

  if (talk!==null) {
      hablar(talk);
  }else{
    hablar("No se el nombre de esta cancion")
  }

  setTimeout(() => {
  document.getElementById("audio").src=songPath;
  },4000);

  if (name!==null) {
    document.getElementById("Name").innerHTML=name;  
  }else{
    document.getElementById("Name").innerHTML="no se";
  }

  if(description!==null){
    document.getElementById("Description").innerHTML=description;
  }else{
    document.getElementById("Description").innerHTML="vacio como tu alma :v";
  }
      
  songCount+=1;
}
