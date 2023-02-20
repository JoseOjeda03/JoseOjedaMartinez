//fionachi
/*
const fio =[0,1];
let num = Number(prompt("Digite la cantidad de numeros" ))
function fionachi(num){
    for(let i=2;i<= num;i++){
        fio[i]=fio[i-1]+ fio[i-2];
    
    
    }

    return fio[num];
}
console.log(fionachi(num));
*/
//2
/*
let incial=Number(prompt("digite el intervalo incial"));
let final =Number(prompt("digite el intervalo final"));
let suma =0;
if(Number.isInteger(incial)&&Number.isInteger(final)){
    for(let i=incial; i<=final;i++){
        if ((i%2)==0){
          suma +=i;  
        }
    }
    console.log(suma)
} else
alert("los numeros deben ser enteros ")
*/
//3
/*
let numero=Number(prompt("ingereseun numero entre 11 y y 14"))
if(Number.isInteger(numero)){
   if (numero>10 && numero <15){
    console.log("entre")
    let total=1;
    for(let i=1;i<=numero;i++){
        total=total*i;
    }
     alert("Total: "+total)
   }
   else{ 
    alert("el numero debe ser entre 11 y 14")
}

}else{
    alert("el numero tiene que ser entero entre 11 y y 14")
}
*/
//4
/*
let i=0;
do{
let op=Number(prompt("ingrese la opcion que desea \n 1) Sumar 2 numeros \n 2)restar 3 numeros \n 3)multiplicar 2 numeros \n 4)Dividir 2 numeros \n 0)salir "))

let numero =0;

let numer2 =0;
let numer3 =0;
let result=0;

switch(op){
   case 1:
    numero=Number(prompt("diigte el primer numero "))
    numer2=Number(prompt("diigte el segundo numero "))
     result=numero+numer2
     alert("La suma de los dos numeros es de :"+result)
     break;
     case 2:
        numero=Number(prompt("diigte el primer numero "))
        numer2=Number(prompt("diigte el segundo numero "))
        numer3=Number(prompt("diigte el segundo numero "))
        result=(numero)-(numer2)-(numer3)
        alert("La resta de los tres numeros es de :"+result)
        break;
    case 3:
        numero=Number(prompt("diigte el primer numero "))
        numer2=Number(prompt("diigte el segundo numero "))
        result=numero*numer2;
        alert("la multiplicacion de los dos numeros es de :" +result)
        break;

    case 4:
        numero=Number(prompt("diigte el dividendo "))
        do{
        numer2=Number(prompt("diigte el divisor  "))
        if(numer2 != 0){
            result=numero/numer2;
            alert("el resultado de la division es de :" +result)
            j=1;
         
        }else{
            alert("el divisor tiene que ser diferente que 0")
        }
        }while(j != 1)
        break;
       case 0:
        alert("Hasta la Proxima ")   
        i=1;
         break;
      default:
            alert("los numeros deben ser de 0 a 4")
            break;
    }
}while(i !=1)

*/
//5
/*
let num=Number(prompt("digite un numero mayor a 100"))
let primos =[];
if (Number.isInteger(num)){
    if(num >100){
  for(let i=2;i<num;i++){
       if(primo(i)){
         primos.push(i);
       }
  }
  console.log(primos)
    }
    else 
    alert("el numero debe ser mayor que 100")
}
else
alert("el numero debe ser entero mayor que 1000")

function primo(nu){
    for(let j =2; j<nu;j++){
        if (nu%j===0){
            return false;
        }
    }
    return true !== 1
}
*/
//6
/*
let j=0;
do{
    let cantidad=Number(prompt("digite la catidad de productos "))

    console.log(!isNaN(cantidad))
    if(cantidad!=0 && !isNaN(cantidad)){
        let  descuento=0;
        let total =0;
        for(let i=1; i<= cantidad ;i++){
            let precios =Number(prompt("digite e precio del productos"))
        
            if(precios >= 100 && precios<=199){
                descuento= precios*0.1
                total=precios-descuento;
                alert("su descuento es de 10% el total es: "+total)
                descuento=0;
                total=0;
            }else if(precios>=100 && precios<=200){
                descuento=precios*0.2
                total=precios-descuento
                alert("su descuento es de 20% el total es: "+total)
                descuento=0;
                total=0;
            }
            else if(precios>200 ){
                descuento=precios*0.3
                total=precios-descuento
                alert("su descuento es de 30% el total es: "+total)
                descuento=0;
                total=0;
            }else
            alert("no tuvo descuento el totales de : "+precios)

            j=1;
        }
    }else{
        alert("el numero esta 0 o no es un numero")
    }
}while(j !=1 )

*/