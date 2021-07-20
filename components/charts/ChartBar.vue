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
      this.renderChart(this.data);
      console.log(this.data);
    },
  };
</script>
