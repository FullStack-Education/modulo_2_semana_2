var primeiraVariavel = "ola";

console.log(primeiraVariavel);

let aula_1 = 2;

// //VAR
function exemploVar(){
    if(true){
        var x = 2;
        console.log("dentro do if", x);
    }

    console.log("fora do if", x);
}

exemploVar();

// //LET e CONST

function exemploLet(){
    if(true){
        let y = 3;
        const s = 2;
        console.log("dentro do if", y, s);
    }

    console.log("fora do if", y, s);
}

exemploLet();

//TIPOS DE DADOS
var nome_aluno = 'Barbosa';
var camisa_10 = 'Pelé';
var numero_sorte = 555;
var ganhouJogo = true;
let qtdJogos;
let time = null;
let arrayFrutas = ['banana', 'laranja', 'mamao', 'melao'];
let arrayAlunos = [
    ['Barbara', 'Bruno', 'Marcos', 'Ana', 'Cheryl'],
    ['Heverton', 'Lucas', 'Gustavo', 'Gabriela', 'Gabriel']
]

var objetoPessoa = {
    nome: 'Lucas',
    idade: 30,
    altura: 1.80
}

console.log("objeto pessoa:", objetoPessoa);
console.log("objeto pessoa - altura:", objetoPessoa.altura);

//undefined
console.log('variavel nao inicializada', qtdJogos);

function semRetorno(){}

console.log("funcao chamada", semRetorno());

// //null
console.log("time", time);

console.log( typeof numero_sorte);

console.log('array de frutas:', arrayFrutas[0]);

console.log('array de alunos:', arrayAlunos[1][3]);
