import Chart from 'chart.js/auto'
import builds from './builds'
const buildPieChart = () => {
  const buildNames = builds.map(build => build.name)
  //const buildAscandancy = builds.map(build => build.ascendancy)
  const buildValues = builds.map(build => build.count)
  const  buildColors = builds.map(build => build.color)
  new Chart('buildsChart', {
    type: 'pie',
    data: {
      labels: buildNames,
      datasets: [{
        data: buildValues,
        backgroundColor: buildColors
      }],
      hoverOffset: 4
    },
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeInOutBounce'
      },
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
          text: 'Starter builds for the next 3.22 Ancestors League',
          font: {
            size: 24
          }
        }
      },
      transitions: {
        show: {
          animations: {
            x: {
              from: 0
            },
            y: {
              from: 0
            }
          }
        },
        hide: {
          animations: {
            x: {
              to: 0
            },
            y: {
              to: 0
            }
          }
        }
      }
    }
  })
}
export default buildPieChart