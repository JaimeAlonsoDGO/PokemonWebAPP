<template>
  <div class="p-4">
    <div class="border border-blue-700 p-4 rounded-md flex items-center justify-center gap-4 mb-4">
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
      <h1 class="font-bold text-center text-4xl text-blue-700">POKEDEX</h1>
      <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
    </div>
    <div class="grid grid-cols-4 gap-4 mb-4">
      <PokemonCard
        v-for="(pokemon, index) in pokedexDataToShow"
        :key="index"
        :pokemonName="pokemon"
      />
    </div>
    <infinite-loading spinner="spiral" @infinite="infiniteScroll" />
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
    created() {
      this.allPokedexData = this.$store.state.data.pokedexData;
      this.pokedexDataToShow = this.allPokedexData.slice(0, 40);
      this.lowToShow += 40;
      this.topToShow += 40;
    },
    data() {
      return {
        topToShow: 40,
        lowToShow: 0,
        allPokedexData: [],
        pokedexDataToShow: [],
      };
    },
    methods: {
      infiniteScroll($state) {
        const newPokemon = this.allPokedexData.slice(this.lowToShow, this.topToShow);
        if (newPokemon.length) {
          this.pokedexDataToShow.push(...newPokemon);
          this.lowToShow += 40;
          this.topToShow += 40;
          $state.loaded();
        } else {
          $state.complete();
        }
      },
    },
  };
</script>
