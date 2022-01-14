<script>
  import { Bar } from 'vue-chartjs';
  export default {
    extends: Bar,
    props: {
      data: {
        type: Object,
        default: () => [],
      },
    },
    mounted() {
      this.renderChart(this.data, {
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  };
</script>
