<template>
  <div>
    <canvas ref="myChart" :width="100" :height="25"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "my-chart",
  data: function() {
    return {
      chart: undefined,

      datasets: [
        {
          borderWidth: 1,
          borderColor: "rgba(0, 123, 255, 0.8)",
          hoverBorderWidth: 2,
          hoverBorderColor: "rgba(0, 123, 255, 1)",
          backgroundColor: "rgba(100, 123, 255, 0.2)",
          data: []
        }
      ],

      options: {
        animation: {
          duration: 0
        },
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          scaleLabel: {
            display: true,
            labelString: "xxx"
          },
          yAxes: [
            {
              ticks: {
                fontColor: "#000000",
                fontSize: 14,
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#000000",
                fontSize: 14
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label(tooltipItem) {
              return `${tooltipItem.yLabel}`;
            }
          },
          titleFontSize: 14,
          titleFontColor: "#ffffff",
          bodyFontSize: 14,
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }
      }
    };
  },
  methods: {
    reload: function(chartLabels, chartData) {
      this.datasets[0].data = chartData;

      if (this.chart) this.chart.destroy();

      this.chart = new Chart(this.$refs.myChart, {
        type: "line",
        data: {
          labels: chartLabels,
          datasets: this.datasets
        },
        options: this.options
      });
    }
  }
};
</script>