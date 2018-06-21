<template>
    <h1>Hello</h1>
    
</template>

<script>
import VueCharts from 'vue-chartjs'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'main-nav',
  data: function () {
    return {}
  },
  mounted () {
    // Overwriting base render method with actual data.
    console.log(Line)
    Line.render({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-nav {

}
</style>
