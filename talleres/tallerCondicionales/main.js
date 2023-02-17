// primer
/*
let numeros =[];
let l ;

for(let i=0;i<3;i++){
    
      
        let numero =prompt("Digite el numero ");
    
        numeros.push(numero);
    
     
       
        
  

    


}
for(let j=0; j<numeros.length;j++){
    if(numeros[j] == numeros[j+1]){
        alert("el numero fue repetido");
        
       
    }
}

let min=Math.min.apply(null,numeros);
console.log("el numero menor es "+min);
let max=Math.max.apply(null,numeros);
console.log("el numero mayor es "+max);
*/

//2)
/*
let altura= prompt("digite la altura del triangulo en cm");

let base= prompt("digite la base del triangulo en cm");

if( altura != base ){


    if(altura >4 && base >5){

        let area=(base*altura)/2
        alert("el area del triangulo es de: "+area)
    }else{
        alert((base*2)+10)
    }
}
else{
    alert("los dos valores no pueden ser iguales ");
}
*/
//3
/*
let numero=prompt("digite el numero")


if (numero%2){
    alert("el numero es inpar")
}else{
    
    alert("el numero es par ");
}
*/
//5
/*
let nota= prompt("digite la nota ");

if(nota > 20  || nota <1){
   alert("el numero tiene que ser entre 1 y 20")
}else if( nota == 19 || nota ==20){
    alert("sacaste A")
}else if(nota==17 ||nota==16 ||nota==18){
    alert("sacaste B")
}else if(nota==13 ||nota==14 ||nota==15){
    alert("sacaste C")
}else if(nota==10 ||nota==11 ||nota==12){
    alert("sacaste D")
}else if (nota <=9 && nota>=1 ){
    alert("sacaste E")
}
*/
//6
/*
let numero =Number(prompt("digita el numero"))
let multiplo =Number(prompt("digite el multiplo")) 
let rest= numero %multiplo
if (rest==0 ){
    alert("es multiplo")
}else{
    alert("no es multiplo")
}
*/
//7
/*
let numero=prompt("digite el numero ")
if (numero>=1){
    alert("el numero es postivo")
}else if(numero==0){
    alert("el numero es 0")
}else if (numero<0){
    alert("el numero es negativo")
}
*/
//8
/*
let suma=0;
let result=0;
for(let i=0;i <3 ;i++){
    
    
    let numro1 =Number(prompt("diga numeros del 1 al 10"))
    if(Number.isInteger(numro1)){
    if(numro1>10  || numro1 <1){
        alert("el numero tiene que ser del 1 al 10")
        break;
        
    }
    suma += numro1;
 console.log(suma)
    }else{
        break;
    }
}
result=suma/3;
console.log(result)
if(result != 0){
    let ter = (result > 5 )? true : false;
    alert(ter)
}
*/

//9
/*
let numero =Number(prompt("digite el numero"))

if(Number.isInteger(numero)){
    if(numero >=0){
        if ((numero%2)==0){
            alert("es par")
        }else{
            alert("es impar")
        }
    }else{
        alert("el numero es negativo")
    }

}else{
    alert("el numero no es entero")
}
*/

//10
/*
let diametro =Number(prompt("digite el diametro de la rueda"))
let grosor =Number(prompt("digite el grosor de la reuda"))
if(diametro > 1.4){
    alert("La rueda es para veiculo grande")

}else if(diametro <=1.4 && diametro>0.8){
    alert("la rueda es para vehiculo mediano")
}else {
    alert("la rueda es para un vehiculo pequeño")
}
if(diametro>1.4 && grosor<0.4  || diametro <= 1.4  && diametro >0.8 && grosor < 0.25)
alert("el grosor para esta rueda es inferior al recomendado")

*/