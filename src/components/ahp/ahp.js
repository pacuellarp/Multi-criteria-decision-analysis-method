import React, { useState} from 'react';
import Matrix from '../matrix/matrix.js';
import { parseFraction } from '../matrix/matrix';
import MatrixOperations from '../matrixOperations/matrixOperations';
import CriterosAlternativas from '../criterosAlternativas/criterosAlternativas'


const AHP = () => {
  const [numCriterios, setNumCriterios] = useState(2);
  const [numAlternativas, setNumAlternativas] = useState(2);
  const [matrices, setMatrices] = useState([]);
  const [mostrarMatrixOperations, setMostrarMatrixOperations] = useState(false);
  const [namesCriterios, setNamesCriterios] = useState([]);
  const [namesAlternativas, setNamesAlternativas] = useState([]);
  const [matricesTitles, setMatricesTitles] = useState('');
  const[mostrarCalcular,setMostrarCalcular] = useState(false);
  let updatedMatrices =[];

const handleMatrixUpdate = (updatedMatrix, matrixId) => {
  // Obtén el índice de la matriz que se actualizó
  
  let indices=['comCri']
  for(let i=1;i<matrices.length;i++){
        indices.push(`comAlt${i}`)
  };

  for(let i=0;i<matrices.length;i++){
    if(indices[i]===matrixId){
      updatedMatrices[i]=updatedMatrix;
    }
  };
 
  

  // Copia el estado actual de matrices
  //const updatedMatrices = [...matrices];

  // Reemplaza la matriz actualizada en el arreglo de matrices
  //updatedMatrices[matrixIndex] = updatedMatrix;

  // Actualiza el estado matrices con las matrices actualizadas
  //setMatrices(updatedMatrices);
};


  const handleEstablecerClick = () => {
    const matrizPrincipal = Array.from({ length: numCriterios }, () =>
      Array(numCriterios).fill(1)
    );

    const matricesAlternativas = Array.from({ length: numCriterios }, () =>
      Array(numAlternativas).fill('')
    );

    setMatrices([matrizPrincipal, ...matricesAlternativas]);


    const matrizPrincipalTitle = 'Matriz de comparación de criterios';

    // Genera títulos para las matrices de valoraciones de cada criterio
    const criteriosTitles = namesCriterios.map((criterio) => {
      return `Matriz de valoraciones para ${criterio}`;
    });
  
    // Establece el título de la matriz principal y los títulos de las matrices de valoraciones
    setMatricesTitles([matrizPrincipalTitle, ...criteriosTitles]);
    setMostrarCalcular(true);
  };

  const handleCalcularClick = () => {
    updatedMatrices.forEach((matriz)=>{
      matriz.forEach((fila)=>{
        for(let i=0;i<fila.length;i++){
          fila[i]=parseFraction(fila[i])
        }
      })
    })
    setMatrices(updatedMatrices)
    setMostrarMatrixOperations(true);
  };

  return (
    <div>
      <h1>Método AHP</h1>
      <div>
        <label>Número de Criterios:</label>
        <select value={numCriterios} onChange={(e) => setNumCriterios(parseInt(e.target.value, 10))}>
          {[2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Número de Alternativas:</label>
        <select value={numAlternativas} onChange={(e) => setNumAlternativas(parseInt(e.target.value, 10))}>
          {[2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <CriterosAlternativas numAlternativas={numAlternativas} numCriterios={numCriterios} setNamesCriterios={setNamesCriterios} setNamesAlternativas={setNamesAlternativas}/>
      <div>
        <button onClick={handleEstablecerClick}>Establecer</button>
      </div>
      <div>
        {matrices.map((matrix, index) => (
          <div key={index}>
            <h2>{matricesTitles[index]}</h2>
            <Matrix names={index === 0 ? namesCriterios : namesAlternativas} size={matrix.length} id={index === 0 ? 'comCri' : `comAlt${index}`} onUpdate={(updatedMatrix) => handleMatrixUpdate(updatedMatrix, index === 0 ? 'comCri' : `comAlt${index}`)} />
          </div>
        ))}
      </div>
      <div>
        {mostrarCalcular && <button onClick={handleCalcularClick}>Calcular</button>}
      </div>
      {mostrarMatrixOperations && <MatrixOperations namesCriterios={namesCriterios} namesAlternativas={namesAlternativas} numCriterios={numCriterios} numAlternativas={numAlternativas} matrices={matrices} />} {/* Pasa las matrices a MatrixOperations */}
    </div>
  );
};

export default AHP;
