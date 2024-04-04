import React from "react";
import BarChart from "../barChart/barChart";

function decimalAPorcentaje(numeroDecimal) {
  // Multiplica el número decimal por 100 para obtener el porcentaje
  const porcentaje = numeroDecimal * 100;

  // Redondea el porcentaje a dos decimales
  const porcentajeRedondeado = Math.round(porcentaje * 100) / 100;

  // Convierte el resultado a una cadena de texto con el símbolo de porcentaje
  const porcentajeFormateado = porcentajeRedondeado.toFixed(2);

  return porcentajeFormateado;
}

const ResultsTOPSIS = ({ ratio, namesAlternativas }) => {
  let ranking = [...ratio];

  let rankingPorcentaje = new Array(namesAlternativas.length).fill(0);

  for (let i = 0; i < rankingPorcentaje.length; i++) {
    rankingPorcentaje[i] = decimalAPorcentaje(ranking[i]);
  }

  return (
    <div className="ml-auto mr-auto text-center" style={{ width: "50%" }}>
      <h2 title="El ranking indica en orden descendente las alternativas más alejadas al ideal negativo del proyecto y a su vez más cercana al ideal positivo del proyecto. Lo que quiere decir que la alternativa que se ubique en la posición uno de la tabla de resultados, será la mejor alternativa">
        Resultados
      </h2>
      <table border="1" className="ml-auto mr-auto text-center" md="8">
        <thead>
          <tr>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {namesAlternativas.map((alternativa, index) => (
            <tr key={index}>
              <td>{alternativa}</td>
              <td>{ranking[index].toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BarChart
        namesAlternativas={namesAlternativas}
        rankingPorcentaje={rankingPorcentaje}
      />
    </div>
  );
};

export default ResultsTOPSIS;
