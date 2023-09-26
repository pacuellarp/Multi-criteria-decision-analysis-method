import React from 'react';
import BarChart from '../barChart/barChart';

function decimalAPorcentaje(numeroDecimal) {
    // Multiplica el número decimal por 100 para obtener el porcentaje
    const porcentaje = numeroDecimal * 100;

    // Redondea el porcentaje a dos decimales
    const porcentajeRedondeado = Math.round(porcentaje * 100) / 100;

    // Convierte el resultado a una cadena de texto con el símbolo de porcentaje
    const porcentajeFormateado = porcentajeRedondeado.toFixed(2);

    return porcentajeFormateado;
}

const Results = ({resultados,datos,namesAlternativas, vectoresPrioridad}) =>{  

    let ranking = new Array(namesAlternativas.length).fill(0)

    for (let i=1;i<=resultados[0].length;i++){
        for (let j=0;j<namesAlternativas.length;j++){
            ranking[j]=ranking[j]+(resultados[0][i-1][resultados[0].length-1]*resultados[i][j][namesAlternativas.length-1])
        }
    }

    let rankingPorcentaje = new Array(namesAlternativas.length).fill(0);

    for(let i=0;i<rankingPorcentaje.length;i++){
        rankingPorcentaje[i]=(decimalAPorcentaje(ranking[i]))
    };

    let axp = new Array(datos.length).fill(0);


    for (let i = 0; i < datos.length; i++) {
        for (let j = 0; j < datos[0].length; j++) {
            axp[i] += datos[i][j] * vectoresPrioridad[0][j];
        }
    }

    let lambdaMax = axp.reduce((acumulador, valor) => acumulador + valor, 0);

    const ci = (lambdaMax-resultados[0].length)/(resultados[0].length-1);

    const ia = 1.98*(resultados[0].length-2)/resultados[0].length;

    const cr = ci/ia;

    const medidaConsistencia = ['Índice de consistencia (CI)','Índice aleatorio (IA)','Razón de consistencia (CR)']


    return(
        <div>
        <h2>Resultados</h2>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {namesAlternativas.map((alternativa, index) => (
              <tr key={index}>
                <td>{alternativa}</td>
                <td>{ranking[index]}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <BarChart namesAlternativas={namesAlternativas} rankingPorcentaje={rankingPorcentaje} />
        <table>
          <thead>
          <tr>
              <th>Medida de Consistencia</th>
            </tr>
          </thead>
          <tbody>
            {medidaConsistencia.map((medida, index) => (
              <tr key={index}>
                <td>{medida}</td>
                <td>{index === 0 ? ci : index === 1 ? ia : cr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Results;