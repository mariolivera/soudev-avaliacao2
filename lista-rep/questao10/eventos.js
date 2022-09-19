let a = 6;

let resultado = 1;
for (let n = a; n >= 1; n--) {
    document.write(n, 'x');

    resultado *= n;
}

document.write("=", resultado);


