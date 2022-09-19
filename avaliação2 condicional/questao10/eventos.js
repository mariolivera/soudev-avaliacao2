let peso = 80
let altura = 1.80
let imc=peso/(altura*altura)


    if(imc <19){
        console.log('abaixo do peso',imc)
    }else if(imc>=19 && imc<25){
        console.log('peso ideal', imc)
    }else if(imc>=25 && imc<30){
        console.log('sobre-peso ',imc)
    }else if(imc>30 && imc<35){
        console.log('sobre-peso I', imc)
    }else if(imc>=35 && imc<40){
        console.log('sobre-peso II',imc)
    }else if(imc>=40){
        console.log('sobre-peso III', imc)
    }

