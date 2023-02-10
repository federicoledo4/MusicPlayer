//#region fields
let vocesDisponibles=[""];
let usuarios=[]
//#endregion
obtenerVoces();
setTimeout(obtenerVoces, 100);
//#region functions


function obtenerVoces(){
    vocesDisponibles = window.speechSynthesis.getVoices();
}
    
function hablar(palabras){
    let mensaje = new SpeechSynthesisUtterance();
        mensaje.voice = vocesDisponibles[7];
        mensaje.rate = 1;
        mensaje.text = palabras;
        mensaje.pitch = 1;
        // ¡Habla!
        speechSynthesis.speak(mensaje);
}
//#endregion