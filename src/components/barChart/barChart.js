import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ namesAlternativas, rankingPorcentaje }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: namesAlternativas,
          datasets: [
            {
              label: 'Ranking',
              data: rankingPorcentaje,
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo de las barras
              borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de las barras
              borderWidth: 1, // Ancho del borde de las barras
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Porcentaje (%)',
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Ocultar la leyenda
            },
          },
        },
      });
    }
  }, [namesAlternativas, rankingPorcentaje]);

  return <canvas ref={chartRef} style={{ width: '50%', height: '50%' }} />;
};

export default BarChart;
