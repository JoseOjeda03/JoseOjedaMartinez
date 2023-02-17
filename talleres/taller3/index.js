let button=document.querySelector("#botonMenu");
let pagina=document.querySelector("#pagina");
button.addEventListener("click",apretar);

function apretar(){

    console.log("entro")
    $("#pagina").addClass("origin-bottom -rotate-12 ");

}