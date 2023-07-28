const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomes = [];
let notasFisica = [];
let notasMatematica = [];
let notasPortugues = [];

function obterDadosAluno() {

  rl.question("Insira o nome do aluno: ", (nome) => {
    nomes.push(nome);

    rl.question("Insira a nota de Física: ", (notaFisica) => {
      notasFisica.push(parseFloat(notaFisica));

      rl.question("Insira a nota de Matemática: ", (notaMatematica) => {
        notasMatematica.push(parseFloat(notaMatematica));

        rl.question("Insira a nota de Português: ", (notaPortugues) => {
          notasPortugues.push(parseFloat(notaPortugues));

          rl.question("Deseja continuar inserindo dados? (S/N): ", (resposta) => {
            if (resposta.toUpperCase() === 'S') {
              obterDadosAluno(); 
            } else {
              rl.close();
              gerarTabela();
            }
          });
        });
      });
    });
  });
}

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function gerarTabela() {
  console.log("==== TABELA DE NOTAS ====");
  console.log("Aluno\tFísica\tMatemática\tPortuguês");

  for (let i = 0; i < nomes.length; i++) {
    console.log(`${nomes[i]}\t${notasFisica[i]}\t${notasMatematica[i]}\t\t${notasPortugues[i]}`);
  }

  let mediaFisica = calcularMedia(notasFisica);
  let mediaMatematica = calcularMedia(notasMatematica);
  let mediaPortugues = calcularMedia(notasPortugues);

  console.log("=========================");
  console.log(`Média:\t${mediaFisica.toFixed(2)}\t${mediaMatematica.toFixed(2)}\t\t${mediaPortugues.toFixed(2)}`);
}

obterDadosAluno();
