<template>
  <div class="p-4">
    <header>
      <div
        class="border border-blue-700 p-4 rounded-md flex items-center justify-center gap-4 mb-4"
      >
        <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
        <h1 class="font-bold text-center text-4xl text-blue-700">POKEDEX</h1>
        <img src="~/assets/svg/PokeballColor.svg" class="w-10" />
      </div>
      <div class="mb-4 grid grid-cols-1 gap-2 lg:grid-cols-2">
        <multiselect
          v-model="search.pokemon"
          :close-on-select="true"
          selectLabel="Select"
          deselectLabel=""
          selectedLabel="Selected"
          placeholder="Search by name"
          :options="allPokedexData"
          :multiple="false"
          :taggable="true"
          :searchable="true"
          label="name"
          track-by="name"
        />
        <CustomButton :action="clearFilters" textButton="Clear Filters" />
      </div>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
      <PokemonCard v-if="search.pokemon" :pokemonName="search.pokemon" />
      <PokemonCard
        v-else
        v-for="(pokemon, index) in pokedexDataToShow"
        :key="index"
        :pokemonName="pokemon"
      />
    </div>
    <infinite-loading v-if="!search.pokemon" spinner="spiral" @infinite="infiniteScroll">
      <div slot="spinner" class="text-center text-blue-700">Loading...</div>
      <div slot="no-more" class="text-center text-blue-700">-That's all-</div>
      <div slot="no-results" class="text-center text-blue-700">-No results-</div>
    </infinite-loading>
  </div>
</template>
<script>
  import Multiselect from 'vue-multiselect';
  import Loading from '~/components/states/Loading.vue';
  import Error from '~/components/states/Error.vue';
  import PokemonCard from '~/components/pokedex/PokemonCard';
  import CustomButton from '~/components/buttons/CustomButton';
  export default {
    props: {
      allPokedexData: {
        type: Array,
        default: () => [],
      },
    },
    components: {
      PokemonCard,
      Loading,
      Error,
      Multiselect,
      CustomButton,
    },
    created() {
      this.pokedexDataToShow = this.allPokedexData.slice(0, 40);
      this.lowToShow += 40;
      this.topToShow += 40;
    },
    data() {
      return {
        search: {
          pokemon: '',
        },
        topToShow: 40,
        lowToShow: 0,
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
      clearFilters() {
        this.search = {
          pokemon: '',
        };
        this.topToShow = 40;
        this.lowToShow = 0;
      },
    },
  };
</script>
<style>
  .multiselect__option:hover,
  .multiselect__option::after,
  .multiselect__option--highlight,
  .multiselect__option--selected {
    background-color: #1e3a8a;
    color: white;
  }
</style>
