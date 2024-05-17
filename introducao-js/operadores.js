//operadores matematicosa
let numero_1 = 20;
let numero_2 = 12;

console.log("soma", numero_1 + numero_2);
console.log("subtrair", numero_1 - numero_2);
console.log("multiplicar", numero_1 * numero_2);
console.log("dividir", numero_1 / numero_2);
console.log("resto", numero_1 % numero_2);
console.log("expo", numero_1 ** numero_2);

//operadores de atribuicao
let numero_3 = 40;
let numero_4 = 20;
console.log( numero_3 += numero_4); // 40 + 20 = 60
console.log( numero_3 -= numero_4); //60 - 20 = 40
console.log( numero_3 *= numero_4);  //40*20 = 800
console.log( numero_3 **= numero_4); //800**20 = longoooo
console.log( numero_3 /= numero_4); //longooo
console.log( numero_3 %= numero_4); //12

console.log( numero_3 = numero_3 + numero_4); 

//operadores de comparacao
let numero_5 = 2;
let numero_6 = 1;

console.log(numero_6 == numero_5); //verifica o valor
console.log(numero_6 === numero_5); //verifica o valor E o tipo do dado
console.log(numero_6 > numero_5); 
console.log(numero_6 < numero_5); 
console.log(numero_6 >= numero_5); 
console.log(numero_6 <= numero_5);
console.log(numero_6 != numero_5); 
console.log(numero_6 !== numero_5);

//operadores logicos
let numero_7 = 2;
let numero_8 = 3;

// && = E - true && true = true;
// || = OU - true || false = true;
// ! = NEGACAO -> NOT - !true = false;

console.log(numero_6 !== numero_5);
console.log(numero_6 || numero_5);
console.log(!numero_6);

//operadores unarios
console.log(numero_8++); //incrementando +1
console.log(numero_8--); //decrementando -1
