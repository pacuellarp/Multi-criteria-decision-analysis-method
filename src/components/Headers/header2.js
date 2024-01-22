/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div
        className="page-header clear-filter"
        filter-color="blue"
        style={{ height: "10px" }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/guatape.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Método AHP</h1>
            <br></br>
            <br></br>
            <br></br>
            <h3>
              Analytic Hierarchy Process, selecciona tus alternativas en función
              de la serie de criterios o variables pertinentes
            </h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
