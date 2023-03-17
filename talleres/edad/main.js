let bottonN=document.querySelector("#bottonN")
let bottonS=document.querySelector("#bottonS")
let bottonpre=document.querySelector("#bottonPre")
bottonN.addEventListener("click",optenernom)
bottonS.addEventListener("click",saludo)
bottonpre.addEventListener("click",legal)


function optenernom(){
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
   alert("su nombre es : "+nombre+"su edad : "+edad);   
}
function saludo(){
    let nombre = document.querySelector("#nombre").value;

   alert("hola "+nombre+" bienvenido a la pagina");   
}
function legal(){
    let edad = Number(document.querySelector("#edad").value);


    if (edad>=18){
        alert("eres mayor de edad");   
    }else{
        alert("eres menor de edad");
    }
    }
   