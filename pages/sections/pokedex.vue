<template>
  <div v-if="$fetchState.pending">
    <Loading />
  </div>
  <div v-else-if="$fetchState.error">
    <Error />
  </div>
  <div v-else class="p-4">
    <div class="border border-blue-700 p-4 rounded-md flex items-center justify-center gap-4 mb-4">
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
      <h1 class="font-bold text-center text-4xl text-blue-700">POKEDEX</h1>
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
    </div>
    <div class="grid grid-cols-4 gap-4 mb-4">
      <PokemonCard
        v-for="(pokemon, index) in pokedexVisible()"
        :key="index"
        :pokemonName="pokemon"
      />
      <infinite-loading
        class="col-span-full"
        spinner="spiral"
        @infinite="infiniteScroll"
      ></infinite-loading>
    </div>
  </div>
</template>
<script>
  import Loading from '~/components/states/Loading.vue';
  import Error from '~/components/states/Error.vue';
  import PokemonCard from '~/components/pokedex/PokemonCard';
  export default {
    components: {
      PokemonCard,
      Loading,
      Error,
    },
    async fetch() {
      this.allPokedexData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118').then(
        (res) => res.json(),
      );
    },
    // async created() {
    //   await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.allPokedexData = data.results;
    //     });
    //   this.toShow = 60;
    // },
    data() {
      return {
        toShow: 100,
        allPokedexData: '',
      };
    },
    methods: {
      infiniteScroll() {
        console.log('Ejecutando infiniteScroll');
        this.toShow = this.toShow + 60;
        this.pokedexVisible();
      },
      pokedexVisible() {
        console.log('Ejecutando pokedexVisible');
        return this.allPokedexData.results.slice(0, this.toShow);
      },
    },
  };
</script>
