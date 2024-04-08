import React from "react";
import ResultsTOPSIS from "../resultsTOPSIS/resultsTOPSIS";

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

  const headers = ["", ...namesCriterios];

  const tableRows = namesAlternativas.map((nombreAlternativa, index) => {
    const rowData = [
      { type: "header", content: nombreAlternativa },
      ...updatedMatrix[1][index].map((valor) => ({
        type: "data",
        content: valor,
      })),
    ];

    return rowData;
  });

  // Agregar fila para vectores ideales
  const idealVectorRow = [
    { type: "header", content: "Alternativa ideal" },
    ...ideales.map((valor) => ({ type: "data", content: valor })),
  ];

  // Agregar fila para vectores anti-ideales
  const antiIdealVectorRow = [
    { type: "header", content: "Alternativa anti-ideal" },
    ...antiIdeales.map((valor) => ({ type: "data", content: valor })),
  ];

  return (
    <div className="ml-auto mr-auto text-center" md="8">
      <br></br>
      <h2 title="Indica el valor de cada criterio dentro del proyecto dado el peso asignado a cada criterio y dado los valores ingresados de cada criterio por alternativa.">
        <span style={{ color: "rgba(37, 150, 190)" }}>
          Matriz de decisión normalizada ponderada
        </span>
      </h2>
      <table border="1" className="ml-auto mr-auto text-center" md="8">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>
                  {cell.type === "header" ? (
                    <strong>{cell.content}</strong>
                  ) : (
                    cell.content.toFixed(4)
                  )}
                </td>
              ))}
            </tr>
          ))}
          {/* Agregar filas para vectores ideales y anti-ideales */}
          <tr>
            {idealVectorRow.map((cell, cellIndex) => (
              <td key={`ideal-${cellIndex}`}>
                {cell.type === "header" ? (
                  <strong>{cell.content}</strong>
                ) : (
                  cell.content.toFixed(4)
                )}
              </td>
            ))}
          </tr>
          <tr>
            {antiIdealVectorRow.map((cell, cellIndex) => (
              <td key={`antiIdeal-${cellIndex}`}>
                {cell.type === "header" ? (
                  <strong>{cell.content}</strong>
                ) : (
                  cell.content.toFixed(4)
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <br></br>
      <br></br>
      <h2 title="Indican qué tan diferente es cada alternativa con respecto a los valores ideales que se pudieran esperar en el proyecto y con respecto a los valores no ideales">
        <span style={{ color: "rgba(37, 150, 190)" }}>
          Medidas de distancia
        </span>
      </h2>
      <table border="1" className="ml-auto mr-auto text-center" md="8">
        <thead>
          <tr>
            <th></th>
            <th>Distancia a la alternativa ideal</th>
            <th>Distancia a la alternativa anti-ideal</th>
            <th>Proximidad relativa a la alternativa ideal</th>
          </tr>
        </thead>
        <tbody>
          {namesAlternativas.map((nombre, index) => (
            <tr key={index}>
              <td>{nombre}</td>
              <td>{distanciaIdeal[index].toFixed(4)}</td>
              <td>{distanciaAntiIdeal[index].toFixed(4)}</td>
              <td>{ratio[index].toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <ResultsTOPSIS ratio={ratio} namesAlternativas={namesAlternativas} />
    </div>
  );
};

export default MatrixOperationsTOPSIS;
