let numeros = [18,34,21,-2,12,14,56]
let quantpar = 0
let quantimpar = 0
let somapares = 0
let somatudo = 0

    for(n = 0; n < numeros.length; n++){
        if (numeros[n]===0){
            break;
        
    } if(numeros[n] % 2 === 0){
        quantpar++;
        somapares += numeros[n];
    } else {
        quantimpar++;
    }
    somatudo += numeros[n];
}
let mediapar = somapares/quantpar
let mediageral = somatudo/numeros.length
console.log('A quantidade cde numeros pares é igual a',quantpar)
console.log('A quantidade cde numeros impares é igual a',quantimpar)
console.log('A madia de numeros pares é igual a', mediapar)
console.log('A madia de numeros pares é igual a', mediageral)