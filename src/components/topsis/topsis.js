import React, { useState } from "react";
import MatrixTOPSIS from "../matrixTOPSIS/matrixTOPSIS";
import { parseFraction } from "../matrixTOPSIS/matrixTOPSIS";
import CriterosAlternativas from "../criterosAlternativas/criterosAlternativas";
import OrderTable from "../tendencyTable/tendencyTable";
import MatrixOperationsTOPSIS from "../matrixOperationsTOPSIS/matrixOperationsTOPSIS";

const TOPSIS = () => {
  const [numCriterios, setNumCriterios] = useState(2);
  const [numAlternativas, setNumAlternativas] = useState(2);
  const [matrices, setMatrices] = useState([]);
  const [mostrarMatrixOperations, setMostrarMatrixOperations] = useState(false);
  const [namesCriterios, setNamesCriterios] = useState([]);
  const [namesAlternativas, setNamesAlternativas] = useState([]);
  const [matricesTitles, setMatricesTitles] = useState("");
  const [mostrarCalcular, setMostrarCalcular] = useState(false);
  const [orderChoices, setOrderChoices] = useState([]);
  const [updatedMatrix, setUpdatedMatrix] = useState([]);

  let updatedMatrices = [];

  const handleMatrixUpdate = (updatedMatrix, matrixId) => {
    // Obtén el índice de la matriz que se actualizó

    let indices = ["ponderacion", "originalMatrix"];
    for (let i = 2; i < matrices.length; i++) {
      indices.push(`comAlt${i}`);
    }

    for (let i = 0; i < indices.length; i++) {
      if (indices[i] === matrixId) {
        updatedMatrices[i] = updatedMatrix;
      }
    }
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

    const matrizPrincipal = Array.from({ length: numAlternativas }, () =>
      Array(numCriterios).fill("")
    );

    setMatrices([matrizPrincipal]);

    const matrizPrincipalTitle =
      "Matriz de elavuación de alternativas con respecto a los criterios";

    // Establece el título de la matriz principal

    //Prepara el estado de la tendecia de los criterios según cuántos hayan de éstos
    const order = [];
    for (let i = 1; i <= numCriterios; i++) {
      order.push("Creciente");
    }
    setOrderChoices(order);

    setMatricesTitles([matrizPrincipalTitle]);
    setMostrarCalcular(true);
    blockButtonsInputsSelects();
  };

  // Función para manejar los cambios en la elección de la tendecia de los criterios
  const handleOrderChange = (index, value) => {
    const newOrderChoices = [...orderChoices];
    newOrderChoices[index] = value;
    setOrderChoices(newOrderChoices);
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

    setUpdatedMatrix(updatedMatrices);
    setMostrarMatrixOperations(true);
    blockButtonsInputsSelects();
    console.log(updatedMatrices);
  };

  const resetTOPSIS = () => {
    setNumCriterios(2);
    setNumAlternativas(2);
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
    <div>
      <h1>Método TOPSIS</h1>
      <div>
        <label>Número de Criterios:</label>
        <select
          value={numCriterios}
          onChange={(e) => setNumCriterios(parseInt(e.target.value, 10))}
        >
          {[2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Número de Alternativas:</label>
        <select
          value={numAlternativas}
          onChange={(e) => setNumAlternativas(parseInt(e.target.value, 10))}
        >
          {[2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <CriterosAlternativas
          numAlternativas={numAlternativas}
          numCriterios={numCriterios}
          setNamesCriterios={setNamesCriterios}
          setNamesAlternativas={setNamesAlternativas}
        />
        <div>
          <button onClick={handleEstablecerClick}>Establecer</button>
        </div>
      </div>
      {mostrarCalcular && (
        <React.Fragment>
          <div>
            <h2>{["Orden de los criterios"]}</h2>
            <OrderTable
              namesCriterios={namesCriterios}
              orderChoices={orderChoices}
              handleOrderChange={handleOrderChange}
            />
            <h2>{["Ponderación de los criterios"]}</h2>
            <MatrixTOPSIS
              namesCriterios={namesCriterios}
              namesAlternativas={[]}
              sizeRow={1}
              sizeCol={numCriterios}
              id={"ponderacion"}
              onUpdate={(updatedMatrix) =>
                handleMatrixUpdate(updatedMatrix, "ponderacion")
              }
            />
            {matrices.map((matrix, index) => (
              <div key={index}>
                <h2>{matricesTitles[index]}</h2>
                <MatrixTOPSIS
                  namesCriterios={namesCriterios}
                  namesAlternativas={namesAlternativas}
                  sizeRow={numAlternativas}
                  sizeCol={numCriterios}
                  size={matrix.length}
                  id={"originalMatrix"}
                  onUpdate={(updatedMatrix) =>
                    handleMatrixUpdate(updatedMatrix, "originalMatrix")
                  }
                />
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleCalcularClick}>Calcular</button>
            <button
              onClick={() => {
                setMostrarCalcular(false);
                unblockButtonsInputsSelects();
                setNamesCriterios([]);
                setNamesAlternativas([]);
                setMatricesTitles("");
                const inputs = document.querySelectorAll("input");
                // Iterar sobre los elementos input y establecer sus valores a una cadena vacía
                for (let i = 0; i < inputs.length; i++) {
                  inputs[i].value = "";
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
          <MatrixOperationsTOPSIS
            namesCriterios={namesCriterios}
            namesAlternativas={namesAlternativas}
            numCriterios={numCriterios}
            numAlternativas={numAlternativas}
            updatedMatrix={updatedMatrix}
            orderChoices={orderChoices}
          />
          <div>
            <button onClick={resetTOPSIS}>Reiniciar</button>
            <button onClick={resetCalcular}>Regresar</button>
          </div>
        </React.Fragment>
      )}{" "}
      {/* Pasa las matrices a MatrixOperations */}
    </div>
  );
};

export default TOPSIS;
