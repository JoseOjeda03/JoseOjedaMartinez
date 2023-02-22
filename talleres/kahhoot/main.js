document.addEventListener('DOMContentLoaded',()=> {

    getserv();
	
}); 
const containerPreguntas=document.querySelector("#container2");
const ww=document.querySelector("#gg");
let uu ;
let i=0;
let j=0;
let k=0;
let u=0;
let ar0=[]
function getserv(){
    console.log("img");
    const urlSer = "preguntados.json";
    fetch(urlSer)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data.Datos);
        nombres(data.Datos);


    });
   
    console.log(ar0)
    function nombres(preguntas){

        let html = "";
       console.log( preguntas[0])
      
       


            console.log(i)
           for(j=0;j<5;j++){
            ar0.push(preguntas[j])
            nexpregunta(preguntas,j)
                    }
             
            
                          
                                  
                           console.log(i)
                          
            
            
            
                    
                   

       
 


       

        
        
       
              
       
        

    }








}


function nexpregunta(preguntas,j){

    if(j==i){

        console.log(j)
       
       const{Pregunta,A,B,C,D,respuestaCorrecta}=preguntas[j];
        console.log(Pregunta)
          html= `
          
          <div id="pregunta" class="grid justify-items-center  content-center  w-10/12  h-14  bg-white mt-24 " >  <P>${Pregunta}</P> </div>
              



          <div id="gg" class=" grid gap-x-16 gap-y-8  grid-cols-2 mt-80">
              
          <button  class="w-[550px] h-16 bg-white hover:bg-sky-700 cursor-pointer" value="${A}" data-bs-toggle="modal" data-bs-target="#exampleModal"   > ${A}   </button>
          <button  class="w-[550px] h-16 bg-white hover:bg-sky-700 cursor-pointer" value="${B}" data-bs-toggle="modal" data-bs-target="#exampleModal"   > ${B}   </button>
          <button  class="w-[550px] h-16 bg-white hover:bg-sky-700 cursor-pointer" value="${C}" data-bs-toggle="modal" data-bs-target="#exampleModal"   > ${C}   </button>
          <button  class="w-[550px] h-16 bg-white hover:bg-sky-700 cursor-pointer" value="${D}" data-bs-toggle="modal" data-bs-target="#exampleModal"   > ${D}   </button>
          
          
          </div>
              `;

             
              containerPreguntas.innerHTML = html;


              let opcion="";
  const botones = Array.from(document.getElementById('gg').children);
  botones.forEach(button => {
      button.addEventListener('click', ({target}) => {
          opcion=target.value
          console.log(opcion)
          correcta(respuestaCorrecta,opcion);
          do{

          if(uu){
            console.log("pasa")
            containerPreguntas.innerHTML = "";
           i++;
           u++;
           if(i>=4){
            console.log("lol")
            containerPreguntas.innerHTML = `            <div class="mt-64"">
            <div      class="w-96 h-96 bg-slate-50 flex justify-center items-center rounded-lg ">

                <p  class="text-2xl">El puntuaje fue de : ${u}</p>
   
               </div> 

        </div>`;  
        }
           nexpregunta(ar0,i)
           console.log(i)
          
           k=1;
          
           
           break;
          
          }else{
            
            i++;
            if(i>=4){
                console.log("lol")
                containerPreguntas.innerHTML = `             <div class="mt-64"">
                <div      class="w-96 h-96 bg-blue-600 flex justify-center items-center">

                    <p>El puntuaje fue de : ${u}</p>
       
                   </div> 

            </div>`;  
            }
                nexpregunta(ar0,i)
               
                break;
            
          
           
            
          }
        }while(k !=1)
       
       })})
    
    }else{

        
        
    }
}
function correcta  (repuesta,opcion){

    const imagen=document.querySelector("#modal");
     
    
    
    if (repuesta === opcion){
        uu=true;
        imagen.innerHTML=` 
        <div  class="modal-body flex justify-center items-center bg-lime-500">
        <img src=" img/depositphotos_9604781-stock-photo-correct-stamp.jpg" alt="">
      </div>
       `


    }else{
        uu =false;
        imagen.innerHTML=` 
        <div  class="modal-body flex justify-center items-center bg-red-600/100"">
        <img src="img/123.png" alt="">
      </div>
        
       `
    }

    console.log(uu)
} 
