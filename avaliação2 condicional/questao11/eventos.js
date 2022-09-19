let preço = 2000;
let pagamento ='';

if (pagamento === 'dinheiroAvista' || pagamento === 'cheque') {
    preço = preço - (preço * 0.1);
    console.log('preçoFinal=', preço);
}else if (pagamento === 'cartãoAvista') {
    preço = preço - (preço * 0.15);
    console.log ('preçoFinal=', preço);
}else if (pagamento === 'emDuasVezes') {
    console.log ('preçoFinal =', preço);
} else {
    preço = preço* 1.1;
    console.log ('preçoFinal=', preço);
}