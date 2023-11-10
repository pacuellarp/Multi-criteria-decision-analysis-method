import React, { useState } from "react";

const Main = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const opciones = ["asd", "dsa"];

  return (
    <div>
      {" "}
      <p>
        Bienvenido a la plataforma de evaluación de alternativas mediante
        métodos de decisión multicriterio.
        <br />A continuación, evalúa la ruta de trabajo de tu proyecto.
      </p>
      <h4>
        ¿El proyecto pertenece a un esquema de aprovisionamiento (Pob ≤ 600
        Hab)?
      </h4>
      <div>
        <label>
          <input
            type="radio"
            value="Sí"
            checked={opcionSeleccionada === "Sí"}
            onChange={() => handleOpcionSeleccionada("Sí")}
          />
          Sí
        </label>

        <label>
          <input
            type="radio"
            value="No"
            checked={opcionSeleccionada === "No"}
            onChange={() => handleOpcionSeleccionada("No")}
          />
          No
        </label>

        {opcionSeleccionada === "Sí" && <p>{opciones[0]}</p>}
        {opcionSeleccionada === "No" && <p>{opciones[1]}</p>}
        {console.log(opcionSeleccionada)}
      </div>
    </div>
  );
};

export default Main;
