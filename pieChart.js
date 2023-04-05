import Chart from 'chart.js/auto'
import builds from './builds'
const buildPieChart = () => {
  const buildNames = builds.map(build => build.name)
  const buildValues = builds.map(build => build.count)
  new Chart('buildsChart', {
    type: 'pie',
    data: {
      labels: buildNames,
      datasets: [{
        data: buildValues,
        background: [
          '#91469E', '#19691A', '#31C1B2', '#A5C131', '#AD0088'
        ]
      }],
      hoverOffset: 4
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            font: {
              size: 10
            }
          }
        },
        title: {
          display: true,
          text: 'Starter builds for the next 3.21 Crucible League',
          font: {
            size: 24
          }
        }
      }
    }
  })
}
export default buildPieChart