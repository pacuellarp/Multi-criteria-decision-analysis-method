import React, { useEffect } from "react";
import AHP from "../components/ahp/ahp";
import Layout2 from "../layout/Layout2";
import { useLocation } from "react-router-dom";

function AHPpage() {
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
