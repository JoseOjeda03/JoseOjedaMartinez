let estudiantes={
    "estudiante":[
        {
            "nombre":"Andres",
            "codigo":22,
            "nivel":"Beginner",
            "nota1":70,
            "nota2":70,
            "nota3":70,
            "notaF":70,
            "promedio":null,
           
        }

    ]
  
    

    
}
let numerosTalentos=0;
let k=0;
let q=0;
let e=0;
let l=0;
let codigo;
let nombre;
do{
    let opcion=prompt("Menu\n"+
    "1)diigtar cantidad de talentos\n"+
    "2)Registrar datos de los talentos \n"+
    "3)Registrar primera nota\n"+
    "4)Registrar segunda nota\n"+
    "5)Registrar tercer nota\n"+
    "6)Registrar nota final\n"+
    "7)Mejor nota de la Mision 1\n"+
    "8)Mejor nota de la Mision 2\n"+
    "9)Mejor nota de la Mision 3\n"+
    "10)Promedio\n"+
    "11)Mostrar Datos Talentos\n"+
    "12)Nombre Del Desarollador\n"+
    "13)Salir");
    
    switch(Number(opcion)){
    
       case 1: 

         
         if(numerosTalentos==0){
            do{
                numerosTalentos=Number(prompt("ingrese la cantidad de talentos "));
                if(!isNaN(numerosTalentos)){
                       l=1;
                }else{
                    alert("esto no es un numero digite de nuevo")
                }
            }while(l!=1)
   
         }else{
            alert("ya fueron ingresada la cantidad de talentos continue por favor");
         }
     
        break;
        case 2:

            for(let i=1 ; i<=numerosTalentos;i++){

                do{
                    e=0;
                     nombre=prompt("Digite el Nombre del estudiante");
                    if(nombre==""){
                        alert("el nombre esta vacio, Digite el nombre por favor");
                    }else
                    e=1;
                }while(e!=1)


                do{
                    j=0;
                    codigo=Number(prompt("Digite el Codigo del estudiante"));
                    if(CodigoRe(codigo)){
                        alert("el codigo digitado esta ya registrado dogita otro por favor")
                    }else{
                        j=1;
                    }
                
                }while(j!=1 )
                let NuevoEstudiante={"nombre":nombre ,"codigo":codigo};
                 
                 estudiantes.estudiante.push(NuevoEstudiante);
                 
    
    
            }
            console.log(estudiantes);
            break;
        case 3:
             q=0;
            for(let i=0 ; i<=numerosTalentos;i++){
                do{
                    
                    let nota1=prompt("Digite La nota 1 del estudiante "+estudiantes.estudiante[i]["nombre"]);
                    if(nota1<=0 || nota1>100){
                        alert("el numero debe estar entre el rango de 0 a 100")
                    }else{
                        estudiantes.estudiante[i]["nota1"]=nota1
                        q=1; 
                    }

                }while(q!=1)

                
                 
    
    
            }
            console.log(estudiantes);
            break;
            case 4:
                q=0;
                for(let i=0 ; i<=numerosTalentos;i++){
                    do{
                    
                        let nota2=prompt("Digite La nota 2 del estudiante "+estudiantes.estudiante[i]["nombre"]);
                        if(nota2<=0 || nota2>100){
                            alert("el numero debe estar entre el rango de 0 a 100")
                        }else{
                            estudiantes.estudiante[i]["nota2"]=nota2
                            q=1; 
                        }
    
                    }while(q!=1)
    
                    
                     
        
        
                }
                console.log(estudiantes);
                break;
                case 5:
                    q=0;
                    for(let i=0 ; i<=numerosTalentos;i++){
                        do{
                    
                            let nota3=prompt("Digite La nota 3 del estudiante "+estudiantes.estudiante[i]["nombre"]);
                            if(nota3<=0 || nota3>100){
                                alert("el numero debe estar entre el rango de 0 a 100")
                            }else{
                                estudiantes.estudiante[i]["nota3"]=nota3
                                q=1; 
                            }
        
                        }while(q!=1)
        
                         
            
            
                    }
                    console.log(estudiantes);
                    break;         
                    case 6:
                        q=0;
                        for(let i=0 ; i<=numerosTalentos;i++){
                            do{
                    
                                let notaF=prompt("Digite La nota Final del estudiante "+estudiantes.estudiante[i]["nombre"]);
                                if(notaF<=0 || notaF>100){
                                    alert("el numero debe estar entre el rango de 0 a 100")
                                }else{
                                    estudiantes.estudiante[i]["notaF"]=notaF
                                    q=1; estudiantes.estudiante

                                }
            
                            }while(q!=1)
            
                            
                             
                
                
                        }
                        console.log(estudiantes);
                        break; 




            case 7:
                MejorNota1(estudiantes.estudiante)
                break;
            case 8:
                MejorNota2(estudiantes.estudiante)
                break;
            case 9:
                MejorNota3(estudiantes.estudiante)
                break;
            case 10:
                PromedioF(estudiantes.estudiante)
                break;
            case 11:
                MostrarDatos(estudiantes.estudiante)
                break;
            case 12:
            alert("Desarrollador:Jose Fernando Ojeda Martinez")
            break;
        case 13:
            k=1;
    
    
    
    }
    
}while(k!=1)

function CodigoRe(numeros){
   let repetido=false
    for(let y=0;y<estudiantes.estudiante.length;y++){
        console.log(y);
           
        if (estudiantes.estudiante[y]["codigo"]!=numeros){
            repetido=false;
          
        }else{
            repetido=true;
            break;
        }
        
      
     }
     return(repetido);
}
function MejorNota1(estudiantes){
    let mayorNota1=0;
    estudiantes.forEach(estudiante => {
        console.log(estudiante)
        if (Number(estudiante["nota1"])> mayorNota1){
            mayorNota1=estudiante["nota1"];
        }
        console.log(mayorNota1)
    });            
    MejorNotaF(estudiantes.estudiante)
    reak;
  
   console.log(mayorNota1);

}
function MejorNota2(estudiantes){
    let mayorNota1=0;
    estudiantes.forEach(estudiante => {
        console.log(estudiante)
        if (Number(estudiante["nota2"])> mayorNota1){
            mayorNota1=estudiante["nota2"];
        }
        console.log(mayorNota1)
    });
  
   console.log(mayorNota1);

}
function MejorNota3(estudiantes){
    let mayorNota1=0;
    estudiantes.forEach(estudiante => {
        console.log(estudiante)
        if (Number(estudiante["nota3"])> mayorNota1){
            mayorNota1=estudiante["nota3"];
        }
        console.log(mayorNota1)
    });
  
   console.log(mayorNota1);

}
function MejorNotaF(estudiantes){
    let mayorNota1=0;
    estudiantes.forEach(estudiante => {
        console.log(estudiante)
        if (Number(estudiante["notaF"])> mayorNota1){
            mayorNota1=estudiante["notaF"];
        }
        console.log(mayorNota1)
    });
  
   console.log(mayorNota1);

}

function PromedioF(estudiantes){
    let suma=0;
    let Promedio=0;
    let SPromedio=0;
    estudiantes.forEach(estudiante => {
        Promedio=0;
        suma=0;
        suma+=estudiante["nota1"]+estudiante["nota2"]+estudiante["nota3"]+estudiante["notaF"];
        Promedio=suma/4;

        SPromedio="El Promedio del estudiante: "+estudiante["nombre"] +"es de:" +Promedio
        alert(SPromedio)
    });
  
  

}

function MostrarDatos(estudiantes){

    let datos="";
    estudiantes.forEach(estudiante => {
     
        suma=0;
        datos="El Nombre del estudiante: "+estudiante["nombre"]+ "\n"  +"El codigo" +estudiante["codigo"]+ "\n" +"Nota 1:  "+estudiante["nota1"] + "\n" +"Nota 2:  "+estudiante["nota2"] + "\n" +"Nota 3:  "+estudiante["nota3"] + "\n" +"Nota final:  "+estudiante["notaF"] + "\n" 
   
        alert(datos)
    });
  
  

}
