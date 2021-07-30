<template>
  <pokedex
    v-if="$store.state.layoutPokedex === 0"
    :allPokedexData="$store.state.data.pokedexData"
  />
  <PokemonDetailsCard v-else-if="$store.state.layoutPokedex === 1" />
</template>
<script>
  import PokemonDetailsCard from '~/components/pokedex/PokemonDetailsCard.vue';
  export default {
    components: { PokemonDetailsCard },

    computed: {
      getLayout() {
        return this.$store.state.layoutPokedex;
      },
    },
  };
</script>
