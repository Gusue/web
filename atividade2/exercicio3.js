
function multiplicarMatrizes(matrizA, matrizB) {
  const linhasA = matrizA.length;
  const colunasA = matrizA[0].length;
  const linhasB = matrizB.length;
  const colunasB = matrizB[0].length;

  if (colunasA !== linhasB) {
    console.log("Não é possível calcular a multiplicação das matrizes.");
    return null;
  }

  const matrizC = new Array(linhasA);
  for (let i = 0; i < linhasA; i++) {
    matrizC[i] = new Array(colunasB);
    for (let j = 0; j < colunasB; j++) {
      matrizC[i][j] = 0;
      for (let k = 0; k < colunasA; k++) {
        matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return matrizC;
}


const matrizA = [
  [1, 2],
  [3, 4],
];

const matrizB = [
  [5, 6],
  [7, 8],
];

console.log("Matriz A:");
console.log(matrizA);

console.log("Matriz B:");
console.log(matrizB);

const matrizC = multiplicarMatrizes(matrizA, matrizB);

if (matrizC) {
  console.log("Matriz C (Resultado da multiplicação AxB):");
  console.log(matrizC);
}
