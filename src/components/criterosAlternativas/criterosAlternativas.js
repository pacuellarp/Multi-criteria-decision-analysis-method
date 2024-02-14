import React from "react";

const CriterosAlternativas = ({
  numCriterios,
  numAlternativas,
  setNamesCriterios,
  setNamesAlternativas,
}) => {
  const input = ["cri", "alt"];
  const generateUniqueId = (input, cuenta) => `${input}${cuenta + 1}`;

  // Función para manejar cambios en los inputs
  const handleInputChange = () => {
    for (let i = 0; i < criteriosId.length; i++) {
      const inputElement = document.getElementById(criteriosId[i]);
      criteriosNombre[i] = inputElement.value;
    }
    for (let i = 0; i < alternativasId.length; i++) {
      const inputElement = document.getElementById(alternativasId[i]);
      alternativasNombre[i] = inputElement.value;
    }

    setNamesCriterios(criteriosNombre);
    setNamesAlternativas(alternativasNombre);
  };

  // Genera los inputs y sus IDs dinámicamente
  const criterios = [];
  const alternativas = [];
  const criteriosId = [];
  const alternativasId = [];
  const criteriosNombre = [];
  const alternativasNombre = [];

  for (let i = 0; i < numCriterios; i++) {
    const criterioId = generateUniqueId(input[0], i);
    criteriosId.push(criterioId);
    criterios.push(
      <input
        key={criterioId} // Asegura que cada input tenga una clave única
        type="text"
        id={criterioId}
        onChange={(e) => handleInputChange(e, i)}
        placeholder={`Criterio ${i + 1}`}
      />
    );
  }

  for (let i = 0; i < numAlternativas; i++) {
    const alternativaId = generateUniqueId(input[1], i);
    alternativasId.push(alternativaId);
    alternativas.push(
      <div>
        <input
          key={alternativaId} // Asegura que cada input tenga una clave única
          type="text"
          id={alternativaId}
          onChange={(e) => handleInputChange(e, i)}
          placeholder={`Alternativa ${i + 1}`}
          list="alternatives"
          name="myAlternatives"
        />
        <datalist id="alternatives">
          <option value="Abastos de agua"></option>
          <option value="Planta convencional"></option>
          <option value="Planta compacta"></option>
          <option value="Puntos de suministro"></option>
          <option value="Captación de aguas lluvia"></option>
          <option value="Soluciones individuales"></option>
        </datalist>
      </div>
    );
  }

  return (
    <div className="ml-auto mr-auto text-center" md="8">
      <p>A continuación, introduce tus criterios:</p>
      <p>{criterios}</p>
      <p>Introduce tus alternativas:</p>
      <p className="d-flex  flex-wrap justify-content-center">{alternativas}</p>
    </div>
  );
};

export default CriterosAlternativas;
