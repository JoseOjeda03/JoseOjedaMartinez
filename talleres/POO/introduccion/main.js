var form = document.getElementById('form');
form.addEventListener("submit", submitHandler);

const mostrar=document.getElementById('modal');


const miStorage = window.localStorage;


class Persona {

    nombre
    apellido
    fecha
    cedula
    edad
 constructor(nombre,apellido,fecha,cedula,edad,imgcumple){
    this.nombre = nombre;
    this.apellido =apellido;
    this.cedula =cedula;
    this.fecha =fecha;
    this.edad = edad;
    this.imgcumple =imgcumple;
 }



 nombrecompleto() {
    let nomnreCompleto = ( this.nombre + " " + this.apellido  )
    return nomnreCompleto
 }
 cumpleanos(){
    const tiempoTranscurrido = Date.now();


 

//
const fechas = new Date();
const hoy = fechas.getDate();
const mesActual = fechas.getMonth() + 1; 
const anno=fechas.getFullYear();
const cumpledia =new Date(this.fecha)

alert()

alert(mesActual)
alert(hoy)
let result= false
   if (hoy == cumpledia.getDate()+1 && mesActual ==cumpledia.getMonth() + 1){
    result= true
   }
   else{
    result= false

    let fechahoy= hoy +"/" +mesActual+"/" + anno
    let fechaCumple = cumpledia.getDate()+1 +"/" +cumpledia.getMonth() + 1 +"/" + cumpledia.getFullYear()
    console.log(fechahoy,fechaCumple)
    this.diasFaltan(hoy,mesActual,anno,cumpledia.getDate()+1,cumpledia.getMonth() + 1,cumpledia.getFullYear())

   }
   
  return result
 }

 diasFaltan(hoy,mesActual,anno,diaC,mesC,annoC){
       

  const resultado =     Math.floor((Date.UTC(anno, mesActual, hoy) - Date.UTC(annoC, mesC, diaC) ) /(1000 * 60 * 60 * 24));

  localStorage.setItem('disFaltan', resultado );
}       
    



    


 }


function submitHandler(e) {
    const nombreI = document.getElementById('texto').value;
    const apellidoI = document.getElementById('apellido').value;
    const fechaI = document.getElementById('date').value;
    const cedulaI = document.getElementById('cedula').value;

    
    alert(nombreI);
    e.preventDefault();
    let personaF= new Persona( nombreI,apellidoI,fechaI,cedulaI);
    let nombreCompleto =personaF.nombrecompleto();
      let bool= personaF.cumpleanos()

    if(bool){
        personaF.imgcumple="img/feliz.gif"
        alert("es hoyy")
        const html =` 
        <div class="flex flex-col w-48 w-48">
    
    
        <p class="">${nombreCompleto}  </p>
        <p class=""> </p>
        <img src="img/feliz.gif" alt="">
    
     </div>
        
        `
        mostrar.innerHTML=html   
        
        localStorage.setItem('nombrecompleto', nombreCompleto );
        localStorage.setItem('fecha', personaF.fecha );
        localStorage.setItem('img', personaF.imgcumple );
        localStorage.setItem('bool', bool );
    }
    else{


        personaF.imgcumple="img/sad.gif"
        const html =` 
        <div class="flex flex-col w-48 w-48">
    
    
        <p class="">${nombreCompleto}  </p>
        <p class=""> </p>
        <img src="img/sad.gif" alt="">
    
     </div>
        
        `
        mostrar.innerHTML=html 
        localStorage.setItem('nombrecompleto', nombreCompleto );
        localStorage.setItem('fecha', personaF.fecha );
        localStorage.setItem('img', personaF.imgcumple );
        localStorage.setItem('bool', bool );
    }
   
    
  }






