const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3) / 3;

console.log("A média do aluno é: " + media.toFixed(2));

if (media < 5.0) {
    console.log("Conceito: RUIM");
  } else if (media >= 5.0 && media < 7.0) {
    console.log("Conceito: REGULAR");
  } else if (media >= 7.0 && media < 8.0) {
    console.log("Conceito: BOM");
  } else if (media >= 8.0 && media < 9.5) {
    console.log("Conceito: ÓTIMO");
  } else if (media >= 9.5) {
    console.log("Conceito: EXCELENTE");
  }