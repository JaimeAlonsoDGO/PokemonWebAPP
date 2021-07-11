<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="border border-gray-200 p-2 rounded-md flex items-center gap-4 animate-pulse"
    >
      <div class="w-24 h-24 bg-blue-100 rounded-md" />
      <h3 class="font-bold mx-auto">Loading</h3>
    </div>

    <div
      v-else-if="$fetchState.error"
      class="border border-gray-200 p-2 rounded-md flex items-center justify-center gap-4 h-36"
    >
      <div class="w-24 h-24 bg-blue-100 rounded-md" />
      <h3 class="font-bold animate-pulse">Error getting resources</h3>
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
      <div class="w-24 h-24 bg-blue-100 rounded-md">
        <img :src="pokemonGeneralData.sprites.front_default" alt="Pokemon Image" />
      </div>
      <h3 class="mx-auto font-bold">
        {{ pokemonName.name.charAt(0).toUpperCase() + pokemonName.name.slice(1) }}
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
        {{ pokemonGeneralData.id }}
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
    },
    data() {
      return {
        pokemonGeneralData: '',
      };
    },
    async fetch() {
      this.pokemonGeneralData = await fetch(this.pokemonName.url + '').then((res) => res.json());
    },
  };
</script>
