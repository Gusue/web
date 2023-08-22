
function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

function calcularTransposta(matriz) {
  const transposta = [];
  for (let i = 0; i < matriz[0].length; i++) {
    transposta.push([]);
    for (let j = 0; j < matriz.length; j++) {
      transposta[i].push(matriz[j][i]);
    }
  }
  return transposta;
}


const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

const transpostaA = calcularTransposta(matrizA);

console.log("Transposta de A:");
imprimirMatriz(transpostaA);
