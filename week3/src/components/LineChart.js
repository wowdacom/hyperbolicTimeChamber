import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['6 JUN', '7 JUN', '8  JUN', '9  JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'],
      datasets: [
        {
            label: 'INCOME',
            backgroundColor: '#4A90E2',
            data: [20, 40, 10, 30, 20, 15, 43, 23]
        },
        {
          label: 'REVENUE',
          backgroundColor: '#7ED321',
          data: [40, 39, 10, 40, 39, 80, 40, 40]
        },{
          label: 'COST',
          backgroundColor: '#D0021B',
          data: [60, 55, 32, 10, 2, 12, 53, 53]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}