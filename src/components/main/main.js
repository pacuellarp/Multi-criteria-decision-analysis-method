import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

import AHP from "../ahp/ahp";

import TOPSIS from "../topsis/topsis";
import { Col, Container, Row } from "reactstrap";

const Main = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const esquemaAprovisionamiento = opcionSeleccionada === "Sí";

  const opciones = ["AHP", "TOPSIS"];

  return (
    <div className="container">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h3>
              <br />
              <br />
              <br />A continuación, evalúa la ruta de trabajo de tu proyecto.
            </h3>

            <h4>
              <br />
              ¿El proyecto pertenece a un esquema de aprovisionamiento (Pob ≤
              600 Hab)?
            </h4>
            <br />
            <br />
          </Col>
        </Row>
      </Container>

      <Container className="ml-auto mr-auto text-center" md="8">
        <div class="btn-group" role="group" aria-label="Opciones">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => handleOpcionSeleccionada("Sí")}
          >
            Sí
          </button>
          <label>
            <input
              type="radio"
              value="Sí"
              checked={opcionSeleccionada === "Sí"}
              onChange={() => handleOpcionSeleccionada("Sí")}
              style={{ display: "none" }}
            />
          </label>

          <button
            type="button"
            class="btn btn-primary"
            onClick={() => handleOpcionSeleccionada("No")}
          >
            No
          </button>
          <label>
            <input
              type="radio"
              value="No"
              checked={opcionSeleccionada === "No"}
              onChange={() => handleOpcionSeleccionada("No")}
              style={{ display: "none" }}
            />
          </label>

          {opcionSeleccionada === "Sí" && <p>{opciones[0]}</p>}
          {opcionSeleccionada === "No" && <p>{opciones[1]}</p>}
          {console.log(opcionSeleccionada)}
        </div>

        <Routes>
          <Route path="/ahp" component={AHP} />
          <Route path="/topsis" component={TOPSIS} />
          {opcionSeleccionada === "Sí" && (
            <Route path="/" element={<Navigate to="/ahp" />} />
          )}
          {opcionSeleccionada === "No" && (
            <Route path="/" element={<Navigate to="/topsis" />} />
          )}
        </Routes>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Main;
