import React, { useState } from "react";
import Matrix from "../matrix/matrix.js";
import CriterosAlternativas from "../criterosAlternativas/criterosAlternativas";

const TOPSIS = () => {
  const [numCriterios, setNumCriterios] = useState(2);
  const [numAlternativas, setNumAlternativas] = useState(2);
  const [matriz, setMatriz] = useState([]);
  return (
    <div>
      <p>Hola gonorrea</p>
    </div>
  );
};
export default TOPSIS;
