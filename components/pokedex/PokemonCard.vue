<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="border border-gray-200 p-2 rounded-md flex items-center justify-center gap-4 h-36"
    >
      <img src="~/assets/svg/PokeballColor.svg" class="w-10 animate-spin" />
      <h3 class="font-bold animate-pulse">Cargando...</h3>
    </div>
    <div
      v-else-if="$fetchState.error"
      class="border border-gray-200 p-2 rounded-md flex items-center justify-center gap-4 h-36"
    >
      <img src="~/assets/svg/PokeballColor.svg" class="w-10 animate-spin" />
      <h3 class="font-bold animate-pulse">Error al cargar recursos</h3>
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
    >
      <img
        :src="pokemonGeneralData.sprites.front_default"
        alt="Pokemon Image"
        class="bg-gray-100"
      />
      <h3 class="mx-auto font-bold">
        {{ pokemonName.name.charAt(0).toUpperCase() + pokemonName.name.slice(1) }}
      </h3>
      <div
        class="
          border-2 border-blue-200
          rounded-full
          w-8
          h-8
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
        {{ pokemonNumber }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      pokemonName: {
        type: Object,
        default: {},
      },
      pokemonNumber: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        pokemonGeneralData: '',
      };
    },
    async fetch() {
      this.pokemonGeneralData = await fetch(this.pokemonName.url + '').then((res) => res.json());
      console.log(this.pokemonGeneralData);
    },
  };
</script>
