import React, { useState, useEffect } from "react";
import MatrixAHP from "../matrixAHP/matrixAHP.js";
import { parseFraction } from "../matrixAHP/matrixAHP";
import MatrixOperationsAHP from "../matrixOperationsAHP/matrixOperationsAHP";
import CriterosAlternativas from "../criterosAlternativas/criterosAlternativas";
import { Link } from "react-router-dom";

const AHP = ({ state }) => {
  const [numCriterios, setNumCriterios] = useState(2);
  const [numAlternativas, setNumAlternativas] = useState(2);
  const [matrices, setMatrices] = useState([]);
  const [mostrarMatrixOperations, setMostrarMatrixOperations] = useState(false);
  const [namesCriterios, setNamesCriterios] = useState([]);
  const [namesAlternativas, setNamesAlternativas] = useState([]);
  const [matricesTitles, setMatricesTitles] = useState("");
  const [mostrarCalcular, setMostrarCalcular] = useState(false);
  let updatedMatrices = [];

  const handleMatrixUpdate = (updatedMatrix, matrixId) => {
    // Obtén el índice de la matriz que se actualizó

    let indices = ["comCri"];
    for (let i = 1; i < matrices.length; i++) {
      indices.push(`comAlt${i}`);
    }

    for (let i = 0; i < matrices.length; i++) {
      if (indices[i] === matrixId) {
        updatedMatrices[i] = updatedMatrix;
      }
    }

    // Copia el estado actual de matrices
    //const updatedMatrices = [...matrices];

    // Reemplaza la matriz actualizada en el arreglo de matrices
    //updatedMatrices[matrixIndex] = updatedMatrix;

    // Actualiza el estado matrices con las matrices actualizadas
    //setMatrices(updatedMatrices);
  };

  const blockButtonsInputsSelects = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
      button.classList.add("disabled"); // Aplicar estilos para indicar que están deshabilitadas
    });

    // Obtener todas las celdas de entrada y deshabilitarlas
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = true;
      input.classList.add("disabled"); // Aplicar estilos para indicar que están deshabilitadas
    });

    // Obtener todas las listas deshabilitarlas
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
      select.disabled = true;
      select.classList.add("disabled"); // Aplicar estilos para indicar que están deshabilitadas
    });
  };

  const unblockButtonsInputsSelects = () => {
    // Habilitar botones
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("disabled"); // Aplicar estilos para indicar que están deshabilitadas
    });

    // Habilitar todas las celdas de entrada y quitar los estilos de deshabilitado
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = false;
      input.classList.remove("disabled");
    });

    // Habilitar todas las listas y quitar los estilos de deshabilitado
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
      select.disabled = false;
      select.classList.remove("disabled");
    });
  };

  const emptySpaces = () => {
    const inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        return true; // Hay un campo vacío
      }
    }

    return false; // No hay campos vacíos
  };

  const isThereAZero = () => {
    const inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "0") {
        return true; // Hay un campo vacío
      }
    }

    return false; // No hay campos vacíos
  };

  const handleEstablecerClick = () => {
    if (emptySpaces()) {
      // Puedes mostrar un mensaje de error, no ejecutar la función, o realizar alguna acción adecuada
      alert("Por favor, completa todos los campos antes de continuar.");
      return; // No ejecutar más allá si hay un campo vacío
    }

    const matrizPrincipal = Array.from({ length: numCriterios }, () =>
      Array(numCriterios).fill(1)
    );

    const matricesAlternativas = Array.from({ length: numCriterios }, () =>
      Array(numAlternativas).fill("")
    );

    setMatrices([matrizPrincipal, ...matricesAlternativas]);

    const matrizPrincipalTitle = "Matriz de comparación de criterios";

    // Genera títulos para las matrices de valoraciones de cada criterio
    const criteriosTitles = namesCriterios.map((criterio) => {
      return `Matriz de valoraciones para ${criterio}`;
    });

    // Establece el título de la matriz principal y los títulos de las matrices de valoraciones
    setMatricesTitles([matrizPrincipalTitle, ...criteriosTitles]);
    setMostrarCalcular(true);
    blockButtonsInputsSelects();
  };

  const handleCalcularClick = () => {
    if (emptySpaces()) {
      // Puedes mostrar un mensaje de error, no ejecutar la función, o realizar alguna acción adecuada
      alert("Por favor, ingresa todos los valores para continuar.");
      return; // No ejecutar más allá si hay un campo vacío
    }

    if (isThereAZero()) {
      // Puedes mostrar un mensaje de error, no ejecutar la función, o realizar alguna acción adecuada
      alert(
        "Por favor, revisa tus valores ingresados, el 0 no es un valor válido."
      );
      return; // No ejecutar más allá si hay un campo vacío
    }

    updatedMatrices.forEach((matriz) => {
      matriz.forEach((fila) => {
        for (let i = 0; i < fila.length; i++) {
          fila[i] = parseFraction(fila[i]);
        }
      });
    });
    setMatrices(updatedMatrices);
    setMostrarMatrixOperations(true);
    blockButtonsInputsSelects();
  };

  const resetAHP = () => {
    if (state) {
      setNumCriterios(state.criterio.length);
      setTimeout(() => {
        criteriaAutocompletion(state.criterio);
      }, "250");
    } else {
      setNumCriterios(2);
      setNumAlternativas(2);
    }
    setMatrices([]);
    setMostrarMatrixOperations(false);
    setNamesCriterios([]);
    setNamesAlternativas([]);
    setMatricesTitles("");
    setMostrarCalcular(false);
    unblockButtonsInputsSelects();
    updatedMatrices = [];

    const inputs = document.querySelectorAll("input");
    // Iterar sobre los elementos input y establecer sus valores a una cadena vacía
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  const criteriaAutocompletion = (criteria) => {
    for (const criterion of criteria) {
      const cri = document.getElementById(
        `cri${criteria.indexOf(criterion) + 1}`
      );
      cri.value = criterion;
    }
  };

  useEffect(() => {
    if (state) {
      setNumCriterios(state.criterio.length);
      setTimeout(() => {
        criteriaAutocompletion(state.criterio);
      }, "250");
    }
  }, [state]);

  const resetCalcular = () => {
    unblockButtonsInputsSelects();
    setMatrices([]);
    updatedMatrices = [];
    setMostrarMatrixOperations(false);
    setMostrarCalcular(false);

    setTimeout(() => {
      handleEstablecerClick();
    }, 0);
  };

  return (
    <div className="ml-auto mr-auto text-center my-5" md="8">
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-stretch">
        <p className="mr-3">¿Deseas repasar rápidamente el procedimiento?</p>
        <div className="d-flex flex-row justify-content-center">
          <Link
            to="/info#ahp"
            target="_blank"
            hash="#ahp"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            Haz click aquí
          </Link>
          <p>.</p>
        </div>
      </div>
      <div>
        <label>Número de Criterios: </label>
        <select
          value={numCriterios}
          onChange={(e) => setNumCriterios(parseInt(e.target.value, 10))}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Número de Alternativas: </label>
        <select
          value={numAlternativas}
          onChange={(e) => setNumAlternativas(parseInt(e.target.value, 10))}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <CriterosAlternativas
        numAlternativas={numAlternativas}
        numCriterios={numCriterios}
        setNamesCriterios={setNamesCriterios}
        setNamesAlternativas={setNamesAlternativas}
      />
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleEstablecerClick}
        >
          Establecer
        </button>
      </div>
      <br></br>
      {mostrarCalcular && (
        <React.Fragment>
          <div className="ml-auto mr-auto text-center" md="8">
            {matrices.map((matrix, index) => (
              <div key={index}>
                <h2>{matricesTitles[index]}</h2>
                <MatrixAHP
                  names={index === 0 ? namesCriterios : namesAlternativas}
                  size={matrix.length}
                  id={index === 0 ? "comCri" : `comAlt${index}`}
                  onUpdate={(updatedMatrix) =>
                    handleMatrixUpdate(
                      updatedMatrix,
                      index === 0 ? "comCri" : `comAlt${index}`
                    )
                  }
                />
              </div>
            ))}
          </div>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleCalcularClick}
            >
              Calcular
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                setMostrarCalcular(false);
                unblockButtonsInputsSelects();
                if (state) {
                  setNumCriterios(state.criterio.length);
                  setTimeout(() => {
                    criteriaAutocompletion(state.criterio);
                  }, "250");
                } else {
                  setNamesCriterios([]);
                  setNamesAlternativas([]);
                  setMatricesTitles("");
                  const inputs = document.querySelectorAll("input");
                  // Iterar sobre los elementos input y establecer sus valores a una cadena vacía
                  for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = "";
                  }
                }
              }}
            >
              Regresar
            </button>
          </div>
        </React.Fragment>
      )}
      {mostrarMatrixOperations && (
        <React.Fragment>
          <MatrixOperationsAHP
            namesCriterios={namesCriterios}
            namesAlternativas={namesAlternativas}
            numCriterios={numCriterios}
            numAlternativas={numAlternativas}
            matrices={matrices}
          />
          <div>
            <button type="button" class="btn btn-primary" onClick={resetAHP}>
              Reiniciar
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={resetCalcular}
            >
              Regresar
            </button>
          </div>
        </React.Fragment>
      )}{" "}
      {/* Pasa las matrices a MatrixOperations */}
    </div>
  );
};

export default AHP;
