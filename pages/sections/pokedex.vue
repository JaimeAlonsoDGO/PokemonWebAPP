<template>
  <div class="p-4">
    <div class="border border-blue-700 p-4 rounded-md flex items-center justify-center gap-4 mb-4">
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
      <h1 class="font-bold text-center text-4xl text-blue-700">POKEDEX</h1>
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
    </div>
    <div class="grid grid-cols-4 gap-4 mb-4">
      <PokemonCard v-for="(pokemon, index) in pokedexVisible" :key="index" :pokemonName="pokemon" />
    </div>
    <button
      class="text-center w-full font-bold text-white bg-blue-900 p-2 rounded-md hover:bg-blue-700"
      @click="toShow += 20"
    >
      More
    </button>
  </div>
</template>
<script>
  import PokemonCard from '~/components/pokedex/PokemonCard';
  export default {
    components: {
      PokemonCard,
    },
    async created() {
      await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
        .then((response) => response.json())
        .then((data) => {
          this.allPokedexData = data.results;
        });
    },
    data() {
      return {
        toShow: 20,
        allPokedexData: '',
      };
    },
    computed: {
      pokedexVisible() {
        return this.allPokedexData.slice(0, this.toShow);
      },
    },
  };
</script>
