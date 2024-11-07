import Chart from 'chart.js/auto'
import builds from './builds'
const buildPieChart = () => {
  const buildNames = builds.map(build => build.name)
  //const buildAscandancy = builds.map(build => build.ascendancy)
  const buildValues = builds.map(build => build.count)
  const buildColors = builds.map(build => build.color)
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
              size: 14
            }
          }
        },
        title: {
          display: true,
          text: 'Starter Builds for the upcoming relaunch Path of Exile 3.25 Settlers of Kalguur League',
          font: {
            size: 32
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