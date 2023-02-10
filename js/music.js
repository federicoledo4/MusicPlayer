var contadorMusical=0

document.addEventListener("DOMContentLoaded", function(){
    document.body.innerHTML+=`<audio id="audio" src="" autoplay loop></audio>`;
  });

function changeMusic(num){
    if(num===1){
        contadorMusical+=1;
    }else{
        contadorMusical-=1
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
      contadorMusical=-1;
    }
    
  }