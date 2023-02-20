
let j=0;
let sumaA=0;
let sumaT=0;
let sumaN=0;
let promA=0;
let promT=0;
let promN=0;
let porA=0;
let porF=0;
let porT=0;
let porN=0;
let notaFinal=0;


do{
    let nota1=Number(prompt("digite la nota del examen 1 "))
    if(nota1<=0 || nota1>5){
        alert("el numero tiene que ser entre 0 y 5")
     
    }else{
        sumaN+=nota1;
        j=1;
    }
}while( j!=1)
j=0;
do{
let nota2=Number(prompt("digite la nota del examen 2 "))
if(nota2<=0 || nota2>5){
    alert("el numero tiene que ser entre 0 y 5")
    
}else{
    sumaN+=nota2;
    j=1;
}
}while( j!=1)
j=0;
do{
let nota3=Number(prompt("digite la nota del examen 3 "))
if(nota3<=0 || nota3>5){
    alert("el numero tiene que ser entre 0 y 5")
    
}else{
    sumaN+=nota3;
    j=1;
}
}while( j!=1)
j=0;
promN=sumaN/3;
porN=promN*0.55;
do{
let trabajos1=Number(prompt("digite la nota del taller 1"))
if(trabajos1<=0 || trabajos1>5){
    alert("el numero tiene que ser entre 0 y 5")
    
}else{
    sumaT+=trabajos1;
    j=1;
}
}while( j!=1)
j=0;
do{
let trabajos2=Number(prompt("digite la nota del taller 2"))
if(trabajos2<=0 || trabajos2>5){
    alert("el numero tiene que ser entre 0 y 5")
    
}else{
    sumaT+=trabajos2;
    j=1;
}
}while( j!=1)
j=0;
promT=sumaT/2;
porT=promT*0.15;
do{
let Examf=Number(prompt("digite la nota del examen final"))
if(Examf<=0 || Examf>5){
    alert("el numero tiene que ser entre 0 y 5")
 
}else{
    porF = Examf*0.2;
    j=1;

}
}while( j!=1)
j=0;
do{
let auto=Number(prompt("digite la autoevaluacion"))
if(auto<=0 || auto>5){
    alert("el numero tiene que ser entre 0 y 555")
    j=1;
}else{
    sumaA += auto
    j=1;

}
}while( j!=1)
j=0;
do{
let coaAuto=Number(prompt("digite la co-evaluacion"))
if(coaAuto<=0 || coaAuto>5){
    alert("el numero tiene que ser entre 0 y 5")
  
}else{
    sumaA += coaAuto
  
    j=1;
}
}while( j!=1)
j=0;
promA=sumaA/2;
porA=promA*0.1;
console.log(porA)
console.log(porF)
console.log(porN)
console.log(porT)

notaFinal=porA+porF+porN+porT
console.log(notaFinal)
if(notaFinal>=4.7 && notaFinal<= 5   ){
    alert("La nota definitiva es de: "+notaFinal+ " el nivel es de SUPERIOR,Felicitaciones Aprobaste")
}else if( notaFinal>=4.0 && notaFinal<=4.6   ){
    alert("La nota definitiva es de: "+notaFinal+ " el nivel es de AlTO,Felicitaciones Aprobaste")
}else if( notaFinal>=3.0 &&  notaFinal<=3.9){
    alert("La nota definitiva es de: "+notaFinal+ " el nivel es de BASICO,Felicitaciones Aprobaste")
}else if(notaFinal>=2.0 &&  notaFinal<=2.9   ){
    alert("La nota definitiva es de: "+notaFinal+ " el nivel es de BAJO,Reprobaste")
}
else if( notaFinal>=0 && notaFinal<=1.9 ){
    alert("La nota definitiva es de: "+notaFinal+ " el nivel es de MUY BAJO,Reprobaste")
}
