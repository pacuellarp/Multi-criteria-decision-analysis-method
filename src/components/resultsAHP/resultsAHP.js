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

const ResultsAHP = ({
  resultados,
  datos,
  namesAlternativas,
  vectoresPrioridad,
}) => {
  let ranking = new Array(namesAlternativas.length).fill(0);

  for (let i = 1; i <= resultados[0].length; i++) {
    for (let j = 0; j < namesAlternativas.length; j++) {
      ranking[j] =
        ranking[j] +
        resultados[0][i - 1][resultados[0].length - 1] *
          resultados[i][j][namesAlternativas.length - 1];
    }
  }

  let rankingPorcentaje = new Array(namesAlternativas.length).fill(0);

  for (let i = 0; i < rankingPorcentaje.length; i++) {
    rankingPorcentaje[i] = decimalAPorcentaje(ranking[i]);
  }

  let axp = new Array(datos.length).fill(0);

  for (let i = 0; i < datos.length; i++) {
    for (let j = 0; j < datos[0].length; j++) {
      axp[i] += datos[i][j] * vectoresPrioridad[0][j];
    }
  }

  let lambdaMax = axp.reduce((acumulador, valor) => acumulador + valor, 0);

  const ci = (lambdaMax - resultados[0].length) / (resultados[0].length - 1);

  const ia = (1.98 * (resultados[0].length - 2)) / resultados[0].length;

  const cr = ci / ia;

  const medidaConsistencia = [
    "Índice de consistencia (CI)",
    "Índice aleatorio (IA)",
    "Razón de consistencia (CR)",
  ];

  return (
    <div className="ml-auto mr-auto text-center" style={{ width: "50%" }}>
      <br></br>
      <br></br>
      <h2 title="La mejor alternativa de las propuestas es la que tiene un índice de prioridad mayor">
        <span style={{ color: "rgba(37, 150, 190)" }}>Resultados</span>
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
          <tr>
            <td>Total</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <BarChart
        namesAlternativas={namesAlternativas}
        rankingPorcentaje={rankingPorcentaje}
      />
      <table border="1" className="ml-auto mr-auto text-center mb-2" md="8">
        <thead>
          <tr>
            <th>Medida de Consistencia</th>
          </tr>
        </thead>
        <tbody>
          {medidaConsistencia.map((medida, index) => (
            <tr key={index}>
              <td>{medida}</td>
              <td>
                {index === 0
                  ? ci.toFixed(4)
                  : index === 1
                  ? ia.toFixed(4)
                  : cr.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsAHP;
