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
        backgroundColor: [
          '#2CB042', '#2077A0', '#4F6D5C', '#773CB6', '#A0B63C'
        ]
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
          text: 'Starter builds for the next 3.21 Crucible League',
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