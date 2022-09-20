const alturaPessoas=[1.80,1.62,1.44,1.58,2.13,2.53,1.95,1.38]

let maiorAltura = 0
let menorAltura = 1.38

    for (n=0;n<alturaPessoas.length;n++){
        if(alturaPessoas[n]>maiorAltura){
        maiorAltura=alturaPessoas[n];
    }if(alturaPessoas[n]<menorAltura){
        menorAltura=alturaPessoas[n];
    }
}
console.log('A menor altura do grupo é',menorAltura);
console.log('A maior altura do grupo é',maiorAltura);