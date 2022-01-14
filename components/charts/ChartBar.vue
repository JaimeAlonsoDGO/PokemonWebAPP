<script>
  import { HorizontalBar } from 'vue-chartjs';
  export default {
    extends: HorizontalBar,
    props: {
      data: {
        type: Object,
        default: () => {},
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
