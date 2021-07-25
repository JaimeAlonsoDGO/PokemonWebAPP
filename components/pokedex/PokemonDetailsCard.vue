<template>
  <div v-if="getLoadingStatus" class="m-auto">
    <Loading />
  </div>
  <div v-else class="px-4 lg:px-36 py-4 lg:py-12">
    <header class="mb-4 sticky top-0 bg-white">
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
      <button
        class="bg-blue-900 text-white font-bold rounded-md p-2 hover:bg-blue-800 w-full"
        @click="toPokedex"
      >
        Back to Pokedex
      </button>
    </header>
    <section class="mb-4">
      <div class="bg-blue-900 rounded-md text-white pb-4 mb-4">
        <h2
          class="
            text-center text-4xl text-blue-100
            col-span-full
            font-bold
            border-b border-blue-100
            rounded-md
            p-4
            relative
          "
        >
          General Information
          <img
            v-if="!show"
            @click="show = true"
            src="~/assets/svg/down.svg"
            class="w-10 absolute top-5 right-5 cursor-pointer hover:bg-blue-800 rounded-md"
          />
          <img
            v-else
            @click="show = false"
            src="~/assets/svg/up.svg"
            class="w-10 absolute top-5 right-5 cursor-pointer hover:bg-blue-800 rounded-md"
          />
        </h2>
        <div class="grid grid-cols-2 gap-4" v-show="show">
          <div>
            <h3 class="font-bold text-xl text-blue-100 text-center">Height</h3>
            <h3 class="font-bold text-xl text-center">
              {{ (+getPokemonData['height'] * 10) / 100 }} m
            </h3>
          </div>
          <div>
            <h3 class="font-bold text-xl text-blue-100 text-center">Weight</h3>
            <h3 class="font-bold text-xl text-center">
              {{ (+getPokemonData['weight'] * 10) / 100 }} kg
            </h3>
          </div>
          <div>
            <h3 class="font-bold text-xl text-blue-100 text-center">Abilities</h3>
            <h3
              class="font-bold text-xl text-center"
              v-for="(ability, index) in getPokemonData['abilities']"
              :key="index"
            >
              {{
                ability['ability']['name'].charAt(0).toUpperCase() +
                ability['ability']['name'].slice(1)
              }}
            </h3>
          </div>
          <div>
            <h3 class="font-bold text-xl text-blue-100 text-center">Base Experience</h3>
            <h3 class="font-bold text-xl text-center">{{ getPokemonData['base_experience'] }}</h3>
          </div>
          <div>
            <h3 class="font-bold text-xl text-blue-100 text-center">Types</h3>
            <div class="flex items-center justify-center gap-2">
              <PokemonType
                v-for="type in getPokemonData['types']"
                :key="type['slot']"
                :type="type['type']"
              />
            </div>
          </div>
        </div>
      </div>
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
  import PokemonType from '~/components/pokedex/PokemonType.vue';
  import ChartBar from '~/components/charts/ChartBar.vue';
  export default {
    components: {
      Loading,
      ChartBar,
      PokemonType,
    },
    data() {
      return {
        show: false,
      };
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
