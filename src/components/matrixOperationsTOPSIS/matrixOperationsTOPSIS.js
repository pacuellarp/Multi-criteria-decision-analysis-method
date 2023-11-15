import React from "react";

const MatrixOperationsTOPSIS = ({
  updatedMatrix,
  numCriterios,
  numAlternativas,
  namesAlternativas,
  namesCriterios,
  orderChoices,
}) => {
  //Norma de las columas, por criterio
  const normaVector = [];
  //Copia de las matrices ingresadas
  let resultados = updatedMatrix.map((row) => [...row]);

  //Ceros para iniciar la cuenta de las normas
  for (let i = 0; i < numCriterios; i++) {
    normaVector.push(0);
  }

  //Se calculas las normas según los criterios
  for (let i = 0; i < numCriterios; i++) {
    resultados[1].forEach((fila) => {
      normaVector[i] = normaVector[i] + fila[i] ** 2;
    });
    normaVector[i] = Math.sqrt(normaVector[i]);
  }

  resultados[1].forEach((fila) => {
    for (let i = 0; i < numCriterios; i++) {
      fila[i] = fila[i] / normaVector[i]; //Normalización de la matriz de decisión
      fila[i] = fila[i] * resultados[0][0][i]; //Creación de la matriz normaliza ponderada
    }
  });

  const columnas = []; //Ordenar por criterios
  const ideales = [];
  const antiIdeales = [];

  for (let i = 0; i < numCriterios; i++) {
    columnas.push([]);
  }

  resultados[1].forEach((fila) => {
    for (let i = 0; i < numCriterios; i++) {
      columnas[i].push(fila[i]); //Organiza por criterio
    }
  });

  for (let i = 0; i < numCriterios; i++) {
    let mayor = Math.max(...columnas[i]); //Mayor por criterio
    let menor = Math.min(...columnas[i]); //Menor por criterio
    if (orderChoices[i] === "Creciente") {
      //Para comparar el orden del criterio
      ideales.push(mayor);
      antiIdeales.push(menor);
    } else {
      ideales.push(menor);
      antiIdeales.push(mayor);
    }
  }

  let distanciaIdeal = [];
  let distanciaAntiIdeal = [];

  //Ceros para iniciar la cuenta de las distancias
  for (let i = 0; i < numAlternativas; i++) {
    distanciaIdeal.push(0);
    distanciaAntiIdeal.push(0);
  }

  //Cálculo de las distancias
  for (let i = 0; i < numAlternativas; i++) {
    for (let j = 0; j < numCriterios; j++) {
      distanciaIdeal[i] =
        distanciaIdeal[i] + (ideales[j] - resultados[1][i][j]) ** 2;
      distanciaAntiIdeal[i] =
        distanciaAntiIdeal[i] + (antiIdeales[j] - resultados[1][i][j]) ** 2;
    }
    distanciaIdeal[i] = Math.sqrt(distanciaIdeal[i]);
    distanciaAntiIdeal[i] = Math.sqrt(distanciaAntiIdeal[i]);
  }

  //Proximidad relativa a la alternativa ideal
  const ratio = [];

  //Cálculo de esta proximidad por alternativa
  for (let i = 0; i < numAlternativas; i++) {
    ratio.push(
      distanciaAntiIdeal[i] / (distanciaAntiIdeal[i] + distanciaIdeal[i])
    );
  }

  return (
    <div>
      <p>Hola</p>
      <button
        onClick={() => {
          console.log(ratio);
        }}
      >
        Yes
      </button>
    </div>
  );
};

export default MatrixOperationsTOPSIS;
