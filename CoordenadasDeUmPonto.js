// 3/4 - Fundamentos Aritméticos em JavaScript

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.



var line = gets().split(" ");
let X = parseFloat(line[0]);
let Y = parseFloat(line[1]);

// TODO: Retorne o quadrante em que o ponto se encontra

 if (X === 0 && Y === 0) {
      print("Origem");
    } 
    else if (X === 0 && Y !== 0) {
      print("Eixo Y");
    } 
    else if (X !== 0 && Y === 0) {
      print("Eixo X");
    } 
    else if (X > 0 && Y === 0) {
      print("Q1");
    } 
    else if (X < 0 && Y > 0) {
      print("Q2");
    } 
    else if (X < 0 && Y < 0) {
      print("Q3");
    } 
    else if (X > 0 && Y < 0) {
      print("Q4");
    }

//Teste #1

//Dado de entrada: 0.0 0.0
//Saída esperada:
//Origem
//Sua Saída:
//Origem


//Teste #2

//Dado de entrada: 0.1 0.0
//Saída esperada:
//Eixo X
//Sua Saída:
//Eixo X


//Teste #3

//Dado de entrada: 0.0 -3.5
//Saída esperada:
//Eixo Y
//Sua Saída:
//Eixo Y


//Teste #4

//Dado de entrada: 3.5 0.0
//Saída esperada:
//Eixo X
//Sua Saída:
//Eixo X
