import React, { useEffect } from "react";
import AHP from "../components/ahp/ahp";
import Layout2 from "../layout/Layout2";
import { useLocation } from "react-router-dom";

function AHPpage() {
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
        title={"Método AHP"}
        subtitle={
          "Analytic Hierarchy Process, evalúa las alternativas en función de la jerarquía de tus criterios"
        }
      >
        <AHP state={state} />
      </Layout2>
    </>
  );
}

export default AHPpage;
