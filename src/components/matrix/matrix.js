import React, { useState, useEffect} from 'react';

export const parseFraction = (fraction) => {
  if (!fraction) return 0;
  const parts = fraction.split('/');
  if (parts.length === 2) {
    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);
    if (denominator !== 0) {
      return numerator / denominator;
    }
  }
  return parseFloat(fraction);
};


const Matrix = ({ size, id, onUpdate }) => {
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, (_, rowIndex) =>
      Array.from({ length: size }, (_, colIndex) =>
        rowIndex === colIndex ? '1' : ''
      )
    )
  );

    
  useEffect(() => {
    // Set the ID of the table element
    const table = document.getElementById(`table-${id}`);
    if (table) {
      table.id = `table-${id}`;
    }
  }, [id]);


  const handleInputChange = (e, rowIndex, colIndex) => {
    const { value } = e.target;

    // Convert input value to decimal
    const decimalValue = parseFraction(value);

    console.log(value)
    console.log(decimalValue)
    console.log(decimalValue.toString())

    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = value;


    // Check if the entered value is not 0
    if (decimalValue !== 0) {
      // Calculate the reciprocal and set it in the opposite cell
      const reciprocal = 1 / decimalValue;
      updatedMatrix[colIndex][rowIndex] = reciprocal.toString();
    } else {
      // If entered value is 0 or empty, set the opposite cell as empty
      updatedMatrix[colIndex][rowIndex] = '';
    }

    setMatrix(updatedMatrix);
    onUpdate(updatedMatrix, id);
    console.log(`Matrix with id ${id} updated:`, updatedMatrix);
  };


  return (
    <table>
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  readOnly={rowIndex === colIndex}
                  onBlur={(e) => {
                    // Convert to decimal when losing focus
                    e.target.value = parseFraction(e.target.value).toString();
                  }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matrix;
