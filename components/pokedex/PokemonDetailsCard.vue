<template>
  <div v-if="getLoadingStatus" class="m-auto">
    <Loading />
  </div>
  <div v-else class="px-4 lg:px-36 py-4 lg:py-12">
    <header class="mb-4 sticky top-0 bg-white z-10">
      <CustomButton textButton="Back to Pokedex" :action="toPokedex" class="mb-4" />
      <h1
        class="
          text-center text-blue-900
          font-bold
          text-4xl
          border border-blue-900
          p-2
          rounded-md
          mb-2
        "
      >
        <span class="opacity-75">No. {{ getPokemonData['id'] }}: </span>
        {{ getPokemonData['name'].charAt(0).toUpperCase() + getPokemonData['name'].slice(1) }}
      </h1>
    </header>
    <section class="mb-4">
      <DropDown :getPokemonData="getPokemonData" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <img
          :src="
            getPokemonData['sprites']['other']['official-artwork']['front_default']
              ? getPokemonData['sprites']['other']['official-artwork']['front_default']
              : getPokemonData['sprites']['front_default']
          "
          class="bg-blue-100 rounded-md w-full"
          alt="Pokemon Image"
        />
        <ChartBar :data="getDataChart" />
      </div>
    </section>
  </div>
</template>
<script>
  import Loading from '~/components/states/Loading.vue';
  import ChartBar from '~/components/charts/ChartBar.vue';
  import DropDown from '../containers/DropDown.vue';
  import CustomButton from '../buttons/CustomButton.vue';
  export default {
    components: {
      Loading,
      ChartBar,
      DropDown,
      CustomButton,
    },
    methods: {
      toPokedex() {
        this.$store.commit('updateLayout', 0);
      },
    },
    computed: {
      getPokemonData() {
        return this.$store.state.data.pokemonDetails;
      },
      getLoadingStatus() {
        return this.$store.state.loadingStatus;
      },
      getDataChart() {
        const pokemonStats = this.getPokemonData['stats'];
        let pokemonDataSet = [];
        let labels = [];
        if (pokemonStats) {
          pokemonStats.map((stat) => {
            pokemonDataSet.push(stat['base_stat']);
            labels.push(
              stat['stat']['name'].charAt(0).toUpperCase() + stat['stat']['name'].slice(1),
            );
          });
          const data = {
            labels: labels,
            datasets: [
              {
                label: 'Stats',
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: 'rgb(75, 192, 192)',
                data: pokemonDataSet,
              },
            ],
          };
          return data;
        } else return;
      },
    },
  };
</script>
