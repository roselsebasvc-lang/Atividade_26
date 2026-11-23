// Atividade 26 - Fibonacci
// Escreva um programa que receba um número inteiro \(N\) do usuário e exiba os primeiros \(N\) números da Sequência de Fibonacci. 
// A sequência começa com 0 e 1, e cada termo seguinte é a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, 13...).

let quantidade = Number(prompt("Quantos números você quer ver?"));
let numero1 = 0;
let numero2 = 1;

for (let volta = 1; volta <= quantidade; volta = volta + 1) {
  
  console.log(numero1);

  let soma = numero1 + numero2;

  numero1 = numero2;
  numero2 = soma;
}
