/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader({ title, subtitle }) {
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
            <h1 className="h1-seo">{`${title}`}</h1>
            <br></br>
            <br></br>
            <br></br>
            <h3>{`${subtitle}`}</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
