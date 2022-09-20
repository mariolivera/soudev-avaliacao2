let numeros =[3,54,12,31,45,11,23,45,67,54,34]
let intervalo0_25 = 0
let intervalo26_50 = 0
let intervalo51_75 = 0
let intervalo76_100 = 0

    for(n =0; n < numeros[n].length; n++){
       
    } if(numeros[n]>0 && numeros[n]<25){
        intervalo0_25++
        intervalo0_25 += numeros[n];
    } 
    if(numeros[n]>25 && numeros[n]<50){
        intervalo26_50++
        intervalo26_50 += numeros[n];
    }
    if(numeros[n]>50 && numeros[n]<75){
        intervalo51_75++
        intervalo51_75 += numeros[n];
    }
    if(numeros[n]>75 && numeros[n]<100){
        intervalo76_100++
        intervalo76_100 += numeros[n];
    } 

    console.log('intervalos entre 0 a 25 é igaul a',intervalo0_25)
    console.log('intervalos entre 26 a 50 é igaul a',intervalo26_50)
    console.log('intervalos entre 51 a 75 é igaul a',intervalo51_75)
    console.log('intervalos entre 76 a 100 é igaul a',intervalo76_100)