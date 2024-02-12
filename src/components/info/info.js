import React from "react";
import { Card, CardBody } from "react-bootstrap";

const InfoComponent = () => {
  return (
    <>
      <div className="container">
        <section className="mb-5">
          <Card>
            <CardBody>
              <article>
                <p className="text-dark text-bold">
                  La toma de decisiones se basa en elegir la mejor opción entre
                  varias alternativas, considerando un conjunto de criterios.
                  Cada vez que alguien toma una decisión, se encuentra en un
                  entorno específico, o escenario de decisión. Este entorno es
                  crucial para garantizar que la elección sea acertada.
                </p>
                <p>
                  En este proyecto, los métodos utilizados (<b>AHP</b> y{" "}
                  <b>TOPSIS</b>) están dentro del grupo de{" "}
                  <b>ambientes con certeza</b>, lo que significa que el decisor
                  tiene un conocimiento específico del escenario y de las
                  posibles alternativas. Esto implica que el decisor establece
                  sus <b>criterios</b> y <b>alternativas</b> independientemente
                  del método a utilizar, aunque los procedimientos de cada
                  método son distintos. <br />
                  <br />
                </p>
                <p id="ahp">
                  A continuación, se describe su uso en este proyecto.
                </p>
              </article>
              <article className="mt-5">
                <h2 className="text-center">Método AHP</h2>
                <p>
                  El método AHP (Analytic Hierarchy Procces) propone una
                  estructura jerárquica de 3 niveles para la resolución de un
                  problema de decisión multicriterio: un objetivo como primer
                  nivel, los diferentes criterios a evaluar en el segundo nivel,
                  y las diferentes alternativas en el nivel más bajo.
                </p>
                <figure className="d-flex justify-content-center">
                  <img
                    src="https://pmi-p-001.sitecorecontenthub.cloud/api/public/content/6701df624dde415485bf2e916b4110f7?v=09514a11"
                    class="img-fluid img-thumbnail"
                    alt="ahpStrcuture"
                  />
                </figure>
                <p>
                  Por lo que, para alcanzar el objetivo, se aplica una serie de
                  comparaciones por parejas entre criterios, se determinará la
                  importancia de cada criterio, y más adelante, se realizarán
                  las mismas comparaciones entre alternativas para cada
                  criterio, evaluando así la importancia de cada alternativa
                  dentro del criterio i.
                </p>
                <p>
                  La importancia que tiene cada atributo respecto a otro se
                  determinará por la siguiente tabla, la cuál nos permitirá
                  realizar los juicios de valor por parejas:
                </p>
                <figure className="d-flex justify-content-center">
                  <img
                    src="https://prevencontrol.com/wp-content/uploads/Escala-Fundamental.jpg"
                    class="img-fluid img-thumbnail"
                    alt="ahpValues"
                  />
                </figure>
                <p>
                  El método le asignará un peso a cada criterio gracias a la
                  matriz de comparación por parejas, significando un peso
                  elevado para una mayor importancia del criterio en cuestión.
                  <br />
                  <br /> A continuación, para cada criterio, se realizarán otras
                  matrices de comparación por parejas de las alternativas,
                  generando el peso que posee cada alternativa dentro del
                  criterio elegido.
                </p>
                <p>
                  En este método, todas las matrices deben cumplir la propiedad
                  de reciprocidad. Es decir, para cada celda de cada matriz, su
                  posición opuesta deberá tener el inverso multiplicativo del
                  valor ingresado. Por lo tanto, la diagonal de la matriz
                  siempre ha de ser 1, puesto que se estaría comparando el
                  criterio (o alternativa) con el mismo.{" "}
                  <b>
                    En la página del método, cuando ingreses un valor,
                    inmediatamente, se ingresará el recíproco.
                  </b>
                </p>
                <p>
                  Después, se normaliza cada matriz (criterios y alternativas),
                  para calcular los vectores de prioridad, los cuales definirán
                  el peso específico que tiene cada criterio o alternativa con
                  respecto a las demás.
                </p>
                <p id="topsis">
                  Y como último paso, con el fin de poder evaluar
                  consecuentemente todas las alternativas deberemos crear el
                  ranking de prioridad. Será el resultado de combinar la
                  importancia relativa de los criterios junto con la puntuación
                  de las alternativas.
                </p>
              </article>
              <article className="mt-5">
                <h2 className="text-center">
                  <span>Método TOPSIS</span>
                </h2>
                <p>
                  El método TOPSIS (Technique for Order of Preference by
                  Similarity to Ideal Solution), evalúa las alternativas
                  respecto a tu solución ideal, es una técnica que defiende la
                  similitud de cada alternativa respecto a la solución ideal.
                  Tan solo requiere un número mínimo de entradas por parte del
                  centro decisor para proporcionar el ranking final de
                  preferencia.
                </p>
                <p>
                  La idea fundamental del método describe que la mejor solución
                  será aquella que mantiene la distancia mínima con respecto a
                  la solución ideal, así como la distancia más alejada de la
                  solución anti ideal.
                </p>
                <figure className="d-flex justify-content-center">
                  <img
                    src="https://www.researchgate.net/profile/Kamal-Omari-2/publication/352524053/figure/fig1/AS:1180220514148362@1658397906104/Basic-concept-of-the-TOPSIS-method-i-i-i-positive-ideal-solution-i-i-i.ppm"
                    class="img-fluid img-thumbnail"
                    alt="ahpValues"
                  />
                </figure>
                <p>
                  El primer paso consiste en establecer el{" "}
                  <b>orden de los criterios</b>. Esto es, establecer el sentido
                  objetivo del criterio. Por ejemplo, si el criterio es{" "}
                  <b>calidad</b>, y el objetivo es encontrar la alternativa con
                  la mayor calidad, su orden será <b>creciente</b>. Por otro
                  lado, si el criterio es <b>precio</b> y el objetivo es
                  encontrar la alternativa con el menor precio, su orden será{" "}
                  <b>decreciente</b>.
                </p>
                <p>
                  A continuación, se debe establecer la ponderación de cada
                  criterio, es decir, definir el peso de cada criterio entre 0 y
                  1, siendo el total de ponderaciones igual a 1 (es decir,
                  100%).
                </p>
                <p>
                  El sigueinte paso es construir la matriz con la puntuación de
                  las alternativas en cada uno de los diferentes criterios. La
                  importancia que tiene cada atributo respecto a otro se
                  determinará, al igual que el método AHP, por la siguiente
                  tabla:
                </p>
                <figure className="d-flex justify-content-center">
                  <img
                    src="https://prevencontrol.com/wp-content/uploads/Escala-Fundamental.jpg"
                    class="img-fluid img-thumbnail"
                    alt="ahpValues"
                  />
                </figure>
                <p>
                  Una vez calculada la matriz ponderada, se calcula los ideales
                  positivo y negativo. Después, se calcula la distancia respecto
                  al ideal positivo y negativo de cada alternativa. Por último,
                  se calcula el ratio de proximidad/lejanía para cada
                  alternativa.
                </p>
                <p>
                  El ratio de proximidad/lejanía proporcionará siempre valores
                  entre 0 y 1. Si a la alternativa se halla más cerca del punto
                  ideal se acercará a 1, por el contrario, si está más cerca del
                  punto anti ideal, su valor se hallará más próximo a 0.
                </p>
              </article>
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
};

export default InfoComponent;
