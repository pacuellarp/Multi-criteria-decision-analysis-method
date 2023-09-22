import React from 'react';

const MatrixOperations = ({ matrices }) => {

  // Realiza operaciones matemáticas con las matrices y muestra los resultados
  // Este código dependerá de las operaciones que desees realizar
  const sumaVectores = (vec1,vec2) =>{
    let res=0;
    for (let i=0;i<vec1.length;i++){
      res=res+vec1[i]+vec2[i];
    }
    return res;
  }
  
  let suma = 0;
  suma=sumaVectores(matrices[1][0],matrices[2][0]);
  console.log(suma);

  console.log(matrices);
  return (
    <div>
      <h2>Resultados de Operaciones</h2>
        
    </div>
  );
};

export default MatrixOperations;
