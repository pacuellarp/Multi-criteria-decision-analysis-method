import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  ButtonGroup,
  ToggleButton,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
} from "react-bootstrap";

import AHP from "../ahp/ahp";
import TOPSIS from "../topsis/topsis";
import "./main.css";

const Main = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [primeraOpcionYaTomada, setPrimeraOpcionYaTomada] = useState(false);
  const [criteriosEvaluacion, setCriteriosEvaluacion] = useState(null);
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [opcionesYaTomadas, setOpcionesYaTomadas] = useState(false);
  const [rutaContinuar, setRutaContinuar] = useState(null);

  const handleOpcionSeleccionada = (buttonId) => {
    setOpcionSeleccionada(buttonId);
    setPrimeraOpcionYaTomada(true);
  };

  const handleOpcionesYaTomada = (buttonId) => {
    setMetodoSeleccionado(buttonId);
    setOpcionesYaTomadas(true);
  };

  const resoluciones = ["Resolución 0844 de 2018", "Resolución 0330 de 2017"];

  useEffect(() => {
    const arregloCriteriosEvaluacion = [
      ["Captación", "Tratamiento", "Almacenamiento"],
      ["Técnico", "Ambiental", "Social", "Económico", "Gestión de riesgo"],
    ];

    if (opcionSeleccionada === "button-1") {
      setCriteriosEvaluacion(arregloCriteriosEvaluacion[0]);
    } else {
      setCriteriosEvaluacion(arregloCriteriosEvaluacion[1]);
    }
  }, [opcionSeleccionada]);

  useEffect(() => {
    let url = "";
    if (metodoSeleccionado === "button-3") {
      url = "/ahp";
    } else {
      url = "/topsis";
    }
    setRutaContinuar(url);
  }, [metodoSeleccionado]);

  return (
    <>
      <div className="container ">
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
            <div>
              <button
                id="button-1"
                className={`btn btn-primary ${
                  opcionSeleccionada === "button-1" && "active"
                }`}
                onClick={() => handleOpcionSeleccionada("button-1")}
                title="Seleccione esta opción si la población es menor o igual a 600 habitantes"
              >
                Sí
              </button>
              <button
                id="button-2"
                className={`btn btn-warning ${
                  opcionSeleccionada === "button-2" && "active"
                }`}
                onClick={() => handleOpcionSeleccionada("button-2")}
                title="Seleccione esta opción si la población es mayor a 600 habitantes"
              >
                No
              </button>
            </div>
          </ButtonGroup>
        </Container>
      </div>
      {primeraOpcionYaTomada && (
        <div className="container">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h4>
                  <br />
                  Por lo tanto, según la{" "}
                  {opcionSeleccionada === "button-1"
                    ? `${resoluciones[0]}`
                    : `${resoluciones[1]}`}
                  , los criterios de evaluación iniciales serán:
                </h4>
                <ul className="list-group">
                  {criteriosEvaluacion.map((criterio) => (
                    <li className="list-group-item">{`${criterio}`}</li>
                  ))}
                </ul>

                <h4>
                  <br />
                  ¿Qué método deseas usar?
                </h4>
                <br />
                <br />
              </Col>
            </Row>
          </Container>

          <Container className="ml-auto mr-auto text-center" md="8">
            <ButtonGroup toggle className="mb-2">
              <div>
                <button
                  id="button-3"
                  className={`btn btn-primary ${
                    metodoSeleccionado === "button-3" && "active"
                  }`}
                  onClick={() => handleOpcionesYaTomada("button-3")}
                  title="Para tomar una decisión multicriterio con base a un proceso de jerarquía analítica (Analytic Hierarchy Procces)"
                >
                  AHP
                </button>
                <button
                  id="button-4"
                  className={`btn btn-warning ${
                    metodoSeleccionado === "button-4" && "active"
                  }`}
                  onClick={() => handleOpcionesYaTomada("button-4")}
                  title="Para tomar una decisión multicriterio con base a la Técnica para el orden de preferencia por similitud con la solución ideal (Technique for Order of Preference by Similarity to Ideal Solution)"
                >
                  TOPSIS
                </button>
              </div>
            </ButtonGroup>

            {opcionesYaTomadas && (
              <Container className="ml-auto mr-auto text-center mt-5" md="8">
                <ButtonGroup toggle className="mb-2">
                  <Link
                    to={rutaContinuar}
                    state={{ criterio: criteriosEvaluacion }}
                    className="btn btn-success"
                  >
                    Continuar
                  </Link>
                </ButtonGroup>
              </Container>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default Main;
