document.addEventListener('DOMContentLoaded',()=> {

    getserv();
	
}); 
let searching ="";
let boton=document.querySelector("#boton");
const conter=document.querySelector("#container"); 
const search= document.querySelector("#search");
const button= document.querySelector("#boton");
search.addEventListener('input',(e)=>{
searching =e.target.value;


if(searching==""){
    getserv ();
}

getbuscar(searching);



})

let img=[]
let bus=[]
let i=1;
const diccionario={
    grass:"bg-success"
}


let getbuscar = async (searching) =>{
    button.value=searching;
    console.log(searching);
    const urlSer = `https://pokeapi.co/api/v2/pokemon/${searching}`;
    fetch(urlSer)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
       
boton.addEventListener("click",informacion(data))
       
        if(searching != undefined){
            bus.push(data)
            console.log(bus);
            imagen(bus)
            bus.pop();
        }
        
    });
}
button.addEventListener("click",getbuscar);



let getserv = async () =>{
    console.log("img");
    const urlSer = `https://pokeapi.co/api/v2/pokemon/${searching}`;
    /*fetch(urlSer)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data.results);
        nombres(data.results);
        imagen(img)
    });*/

    try{
        const response=  await fetch(urlSer);
        const result =  await response.json();
        nombres(result.results);
      }catch(error){
        console.log(error);
      }
}

function getimg(url,i){
   
    const urlsub = url ;
    fetch(urlsub)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        
       console.log(data);
       img.push(data)
        imagen(img);
       
    });
}




function nombres(pokemons){
  console.log(pokemons[1])
    let html = "";
    let htle5="";

    const container=document.querySelector("#container");
    
    pokemons.forEach(pokemon => {
        
        const{name,url}=pokemon;
       console.log(name);

       
     
    
       
            
          for(let k=0;k >= 20;k++){
            
          }
          getimg(url);
          
           
            container.innerHTML =html;

            console.log(i)
            i++;


           
          
    });


}
function imagen (pokemons){
    let html = "";
    console.log(pokemons)

   
    
    pokemons=  pokemons.sort(function(a, b) {
        return a.id-b.id; /* Modificar si se desea otra propiedad */
    });

  

    
    pokemons.forEach(pokemon => {

        const{abilities,forms,sprites,game_indices,held_items,id,types,moves}=pokemon;
        console.log(id)
        var elemento = document.getElementById("container");


        html+= `
        <div id="tipo" class="card " style="width: 18rem;">
        <div id="conter" >
        <img src="${sprites.other["official-artwork"]["front_default"]}" class="card-img-top" alt="...">
        </div>
        
        <div class="card-body">
          <h2 class="card-title">${forms[0]["name"]}</h3>
          <h5 class="card-text">Type: ${types[0].type["name"]}</h5>
          <a id="ir" href="index.html" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
     

      
 
             `;
           

           
                
             switch(types[0].type["name"]){
                case "grass":
                    
             }

             if(types[0].type["name"]=== "grass"){
                console.log("hola")
                $("#tipo").addClass("bg-success ");
                
               
             }else if(types[0].type["name"]=== "fire"){
                $("#tipo").addClass("bg-danger ");
             }
             else if(types[0].type["name"]=== "water"){
                $("#tipo").addClass("bg-info ");
             }
             conter.innerHTML=html;
    });


  
   
}




function informacion(gg){
    console.log(gg)
    conter.innerHTML=""
   conter

    let html2 = "";
    html2+= `
    <div class="card" style="width: 18rem;">
    <img src="${gg.sprites.other["official-artwork"]["front_default"]}" class="card-img-top" alt="...">
    <div class="card-body">
 
    </div>
  </div>
 

  

         `;


         conter.innerHTML=html2
}