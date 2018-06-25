<template>
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
          <line-example></line-example>
        </div>
      </div>
    </div>
</template>

<script>
import LineExample from './LineChart.js'
export default {
  name: 'app',
  components: {
    LineExample
  }
}
</script>

<style>
.container {
  max-width: 100%;
  margin: 0 auto;
}
</style>