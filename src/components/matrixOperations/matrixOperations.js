import React from 'react';

const MatrixOperations = ({ matrices, numCriterios, numAlternativas, namesAlternativas, namesCriterios }) => {

  const sumas = []

  let datos=[...matrices]

  for (const matriz of matrices){
    if(matriz){
      sumas.push([]);
    }
  }
  console.log(sumas);
  console.log(matrices[0].length);

  for (let i=0;i<sumas.length;i++){
    for(let j=0;j<matrices[i].length;j++){
      sumas[i].push(0)
    }
  }
  let a=0;
  for (const vector of sumas){
    for (let i=0;i<vector.length;i++){
      for(let j=0;j<vector.length;j++){
        vector[i]=vector[i]+matrices[a][j][i]
      }
    }
    a=a+1;
  }
  
  let resultados = [...matrices]

  a=0;
  for(const matriz of resultados){
    for (let i=0;i<matriz.length;i++){
      for(let j=0;j<matriz.length;j++){
        matriz[i][j]=(matriz[i][j])/(sumas[a][j])
      }
    }
    a=a+1;
  }

  const vectoresPrioridad =[]

  for (const matriz of matrices){
    if(matriz){
      vectoresPrioridad.push([]);
    }
  }

  const calcularPromedio = (array) => {
    // Suma todos los elementos del array
    const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  
    // Divide la suma por la cantidad de elementos para obtener el promedio
    const promedio = suma / array.length;
  
    return promedio;
  };
  
  console.log(resultados[1][1]);

  for (let i=0;i<vectoresPrioridad.length;i++){
    for (let j=0;j<resultados[i].length;j++){
      vectoresPrioridad[i].push(calcularPromedio(resultados[i][j]));
    }
  }

  if(resultados[0].length===numCriterios){
    for (let i=0;i<resultados.length;i++){
      for (let j=0;j<resultados[i].length;j++){
        if(i===0){
          resultados[i][j][numCriterios]=vectoresPrioridad[i][j];
        }else{
          resultados[i][j][numAlternativas]=vectoresPrioridad[i][j];
        }
      }
    }
  }
  

  const tableTitles=["Comparación de criterios",...namesCriterios]
  const columnNames0=[...namesCriterios,"Vector de prioridad"]
  const rowNames0=[...namesCriterios]
  const columnNames1=[...namesAlternativas,"Vector de prioridad"]
  const rowNames1=[...namesAlternativas]


  console.log(resultados);
  console.log(vectoresPrioridad);
  console.log(datos);
  return (
    <div>
      <h2>Matrices normalizadas y vectores de prioridad</h2>
      <div>
        {resultados.map((matrix, matrixIndex) => (
          <div key={matrixIndex}>
            {tableTitles && tableTitles[matrixIndex] && (
              <h2>{tableTitles[matrixIndex]}</h2>
            )}
            <table>
              <tbody>
                {/* Fila de títulos de columnas */}
                <tr>
                  <td></td> {/* Celda vacía en la esquina superior izquierda */}
                  {matrix[0].map((colName, colIndex) => (
                    <td key={colIndex}>
                      {matrixIndex === 0 ? columnNames0[colIndex] : columnNames1[colIndex]}
                    </td>
                  ))}
                </tr>

                {/* Filas de datos */}
                {matrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* Título de fila */}
                    <td>{matrixIndex === 0 ? rowNames0[rowIndex] : rowNames1[rowIndex]}</td>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}

                {/* Fila de total */}
                <tr>
                  <td>Total</td>
                  {matrix[0].map((_, colIndex) => (
                    <td key={colIndex}>1</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};



export default MatrixOperations;
