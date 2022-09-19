let n1 = 96
let n2 = 75
let n3 = 85
let me = 90;
let ma = ((n1+(n2*2)+(n3*3)+me/7));
let conceito = "";

    if (ma >= 90) {
    conceito = 'A';

}else if (ma < 90 && ma >= 75) {
    conceito = 'B';
}else if (75 && ma >= 60) {
    conceito = 'C';
}else if (ma <60 && ma >= 40) {
    conceito ='D';
}else {
    conceito = 'E';
}
if (conceito ==='A'|| conceito ==='B' ||conceito ==='C'){
    console.log(conceito,ma,'aprovado');
}else if(conceito === 'D'|| conceito ==='E'){
    console.log(conceito,ma,'reprovado')
}
