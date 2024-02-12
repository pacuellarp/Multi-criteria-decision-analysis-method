import TOPSIS from "../components/topsis/topsis";
import Layout2 from "../layout/Layout2";

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";

function TOPSISpage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  let { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout2
        title={"Método TOPSIS"}
        subtitle={
          "Technique for Order of Preference by Similarity to Ideal Solution, evalúa las alternativas respecto a tu solución ideal"
        }
      >
        <TOPSIS state={state} />
      </Layout2>
    </>
  );
}

export default TOPSISpage;
