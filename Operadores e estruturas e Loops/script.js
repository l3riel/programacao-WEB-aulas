let x = 10;
let y = 4;

console.log("Soma:", x + y);
console.log("Subtração:", x - y);
console.log("Multiplicação:", x * y);
console.log("Divisão:", x / y);
console.log("Resto da divisão:", x % y);
console.log("Exponenciação:", x ** y);

console.log("x é igual a y?", x == y);
console.log("x é diferente de y?", x != y);
console.log("x é maior que y?", x > y);
console.log("x é menor que y?", x < y);
console.log("x é maior ou igual a y?", x >= y);
console.log("x é menor ou igual a y?", x <= y);


let resultadoTrue = (x > y) && (x != 0); // true
let resultadoFalse = (x < y) || (y < 0); // false

console.log("Expressão lógica que resulta em true:", resultadoTrue);
console.log("Expressão lógica que resulta em false:", resultadoFalse);


let nota = 68; // valor entre 0 e 100

if (nota >= 70) {
    console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

let mes = 4; // número do mês (1-12)
let nomeMes;

switch (mes) {
    case 1: nomeMes = "Janeiro"; break;
    case 2: nomeMes = "Fevereiro"; break;
    case 3: nomeMes = "Março"; break;
    case 4: nomeMes = "Abril"; break;
    case 5: nomeMes = "Maio"; break;
    case 6: nomeMes = "Junho"; break;
    case 7: nomeMes = "Julho"; break;
    case 8: nomeMes = "Agosto"; break;
    case 9: nomeMes = "Setembro"; break;
    case 10: nomeMes = "Outubro"; break;
    case 11: nomeMes = "Novembro"; break;
    case 12: nomeMes = "Dezembro"; break;
    default: nomeMes = "Mês inválido";
}

console.log("Mês correspondente:", nomeMes);



let numero = 0;
console.log("Números pares de 0 a 20:");

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}


let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];

console.log("Lista de cidades:");
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}


console.log("Números de 10 a 1 em ordem decrescente:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
