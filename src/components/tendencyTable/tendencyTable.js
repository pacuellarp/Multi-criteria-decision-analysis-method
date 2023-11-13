// Nuevo componente: OrderTable.js

import React from "react";

const OrderTable = ({ namesCriterios, orderChoices, handleOrderChange }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {namesCriterios.map((criterio, index) => (
              <th key={index}>{criterio}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {namesCriterios.map((criterio, index) => (
              <td key={index}>
                <select
                  value={orderChoices[index] || "Creciente"}
                  onChange={(e) => handleOrderChange(index, e.target.value)}
                >
                  <option value="Creciente">Creciente</option>
                  <option value="Decreciente">Decreciente</option>
                </select>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
