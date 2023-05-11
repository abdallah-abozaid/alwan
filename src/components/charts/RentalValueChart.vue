<template>
  <Pie :data="data" :options="options" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'BarChart',
  components: { Pie },
  data() {
    return {
      data: {
        datasets: [
          {
            backgroundColor: ['#800000', '#50FFFF'],
            data: [40, 20]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style scoped></style>
