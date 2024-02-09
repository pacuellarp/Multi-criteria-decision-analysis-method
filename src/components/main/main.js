import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  ButtonGroup,
  ToggleButton,
  Col,
  Row,
} from "react-bootstrap";

import AHP from "../ahp/ahp";

import TOPSIS from "../topsis/topsis";

const Main = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [opcionesYaTomadas, setOpcionesYaTomadas] = useState(false);

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const handleOpcionesYaTomada = () => {
    setOpcionesYaTomadas(true);
  };

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
        <ButtonGroup toggle className="mb-2">
          <ToggleButton
            type="radio"
            variant="info"
            name="radio"
            value="Sí"
            checked={opcionSeleccionada === "Sí"}
            onChange={() => handleOpcionSeleccionada("Sí")}
            className="no-focus-outline"
          >
            Sí
          </ToggleButton>

          <ToggleButton
            type="radio"
            variant="primary"
            name="radio"
            value="No"
            checked={opcionSeleccionada === "No"}
            onChange={() => handleOpcionSeleccionada("No")}
            className="no-focus-outline"
          >
            No
          </ToggleButton>
        </ButtonGroup>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Main;
