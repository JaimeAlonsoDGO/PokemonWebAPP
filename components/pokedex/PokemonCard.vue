<template>
  <div>
    <div
      v-if="loading"
      class="border border-gray-200 p-2 rounded-md flex items-center gap-4 animate-pulse"
    >
      <div class="w-24 h-24 bg-blue-100 rounded-md" />
      <h3 class="font-bold mx-auto">Loading</h3>
    </div>

    <div
      v-else
      class="
        relative
        appearAnimation
        border border-blue-200
        p-2
        flex
        items-center
        cursor-pointer
        hover:bg-blue-900 hover:transform hover:scale-110
        text-blue-900
        hover:text-white
        rounded-md
      "
      @click="updatePokemonDetails(pokemonName['url'])"
    >
      <div class="w-24 h-24">
        <CustomImage :imageSrc="pokemonGeneralData['sprites']['front_default']" />
      </div>
      <h3 class="mx-auto font-bold">
        {{ $helpers.formatCapitalLetter(pokemonName['name']) }}
      </h3>
      <div
        class="
          border-2 border-blue-200
          rounded-full
          w-10
          h-10
          absolute
          top-2
          right-2
          flex
          items-center
          justify-center
          font-bold
          text-xs
        "
      >
        {{ pokemonGeneralData['id'] }}
      </div>
    </div>
  </div>
</template>
<script>
  import CustomImage from '../containers/CustomImage';

  export default {
    props: {
      pokemonName: {
        type: Object,
        default: {},
      },
    },
    created() {
      this.getPokemonData();
    },
    updated() {
      this.getPokemonData();
    },
    components: {
      CustomImage,
    },
    data() {
      return {
        pokemonGeneralData: '',
        loading: true,
      };
    },
    methods: {
      async getPokemonData() {
        try {
          this.pokemonGeneralData = await fetch(this.pokemonName.url + '').then((res) =>
            res.json(),
          );
          this.loading = false;
        } catch (error) {
          console.log(error);
        }
      },
      updatePokemonDetails(URL) {
        this.$store.dispatch('getPokemonDetails', URL);
        this.$store.commit('updateLayout', 1);
      },
    },
  };
</script>
