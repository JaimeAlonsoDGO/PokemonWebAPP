<template>
  <div class="p-4 grid grid-cols-4 gap-4">
    <div
      class="
        col-span-4
        border border-blue-700
        p-2
        rounded-md
        flex
        items-center
        justify-center
        gap-4
      "
    >
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
      <h1 class="font-bold text-center text-4xl text-blue-700">POKEDEX</h1>
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
    </div>
    <PokemonCard v-for="(pokemon, index) in pokedexData" :key="index" :pokemonName="pokemon" />
  </div>
</template>
<script>
  import PokemonCard from '~/components/pokedex/PokemonCard';
  export default {
    components: {
      PokemonCard,
    },
    async mounted() {
      await fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
        .then((response) => response.json())
        .then((data) => {
          this.pokedexData = data.results;
        });
    },
    data() {
      return {
        pokedexData: '',
        pokemonData: '',
      };
    },
  };
</script>
