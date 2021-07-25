<script>
  import { Bar } from 'vue-chartjs';
  export default {
    props: {
      data: {
        type: Object,
        default: () => [],
      },
    },
    extends: Bar,
    mounted() {
      this.renderChart(this.data, {
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
      console.log(this.data);
    },
  };
</script>
