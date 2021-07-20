<template>
  <div v-if="getLoadingStatus" class="m-auto">
    <Loading />
  </div>
  <div v-else class="px-36 py-12">
    <header class="mb-4">
      <h1 class="text-center text-blue-900 font-bold text-4xl">
        <span class="opacity-75">No. {{ getPokemonData['id'] }}: </span>
        {{ getPokemonData['name'].charAt(0).toUpperCase() + getPokemonData['name'].slice(1) }}
      </h1>
    </header>
    <section class="mb-4">
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

        <div class="grid grid-rows-2 gap-4">
          <div class="bg-blue-900 rounded-md text-white grid grid-cols-1 lg:grid-cols-2 p-4">
            <h2
              class="
                text-center text-4xl text-blue-100
                col-span-full
                font-bold
                border-b border-blue-100
                rounded-md
              "
            >
              General Information
            </h2>
            <div class="m-auto">
              <h3 class="font-bold text-xl text-blue-100 text-center">Height</h3>
              <h3 class="font-bold text-xl text-center">
                {{ (+getPokemonData['height'] * 10) / 100 }} m
              </h3>
            </div>
            <div class="m-auto">
              <h3 class="font-bold text-xl text-blue-100 text-center">Weight</h3>
              <h3 class="font-bold text-xl text-center">
                {{ (+getPokemonData['weight'] * 10) / 100 }} kg
              </h3>
            </div>
            <div class="m-auto">
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
            <div class="m-auto">
              <h3 class="font-bold text-xl text-blue-100 text-center">Base Experience</h3>
              <h3 class="font-bold text-xl text-center">{{ getPokemonData['base_experience'] }}</h3>
            </div>
          </div>

          <div class="border border-blue-900 rounded-md p-4">
            <h2
              class="
                text-blue-900
                font-bold
                text-4xl text-center
                border-b border-blue-900
                rounded-md
                p-4
                mb-4
              "
            >
              Types
            </h2>
            <div class="flex items-center justify-center gap-4">
              <h3
                class="border border-blue-900 p-2"
                v-for="type in getPokemonData['types']"
                :key="type['slot']"
              >
                {{ type['type']['name'] }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <button
      class="bg-blue-900 text-white font-bold rounded-md p-2 hover:bg-blue-800 w-full"
      @click="toPokedex"
    >
      Back to Pokedex
    </button>
  </div>
</template>
<script>
  import Loading from '~/components/states/Loading.vue';
  export default {
    components: {
      Loading,
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
    },
  };
</script>
