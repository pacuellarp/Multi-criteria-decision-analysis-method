import React from "react";
import AHP from "../components/ahp/ahp";
import Layout2 from "../layout/Layout2";

function AHPpage() {
  return (
    <>
      <Layout2
        title={"Método AHP"}
        subtitle={
          "Analytic Hierarchy Process, evalúa las alternativas en función de la jerarquía de tus criterios"
        }
      >
        <AHP />
      </Layout2>
    </>
  );
}

export default AHPpage;
