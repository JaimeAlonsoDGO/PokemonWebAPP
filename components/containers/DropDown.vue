<template>
  <div class="bg-blue-900 rounded-md text-white pb-4 mb-4">
    <h2
      class="
        text-center text-4xl text-blue-100
        col-span-full
        font-bold
        border-b border-blue-100
        rounded-md
        p-4
        relative
      "
    >
      General Information
      <img
        v-if="!show"
        @click="show = true"
        src="~/assets/svg/down.svg"
        class="w-10 absolute top-5 right-5 cursor-pointer hover:bg-blue-800 rounded-md"
      />
      <img
        v-else
        @click="show = false"
        src="~/assets/svg/up.svg"
        class="w-10 absolute top-5 right-5 cursor-pointer hover:bg-blue-800 rounded-md"
      />
    </h2>
    <div class="grid grid-cols-2 gap-4" v-show="show">
      <div>
        <h3 class="font-bold text-xl text-blue-100 text-center">Height</h3>
        <h3 class="font-bold text-xl text-center">
          {{ (+getPokemonData['height'] * 10) / 100 }} m
        </h3>
      </div>
      <div>
        <h3 class="font-bold text-xl text-blue-100 text-center">Weight</h3>
        <h3 class="font-bold text-xl text-center">
          {{ (+getPokemonData['weight'] * 10) / 100 }} kg
        </h3>
      </div>
      <div>
        <h3 class="font-bold text-xl text-blue-100 text-center">Abilities</h3>
        <h3
          class="font-bold text-xl text-center"
          v-for="(ability, index) in getPokemonData['abilities']"
          :key="index"
        >
          {{
            ability['ability']['name'].charAt(0).toUpperCase() + ability['ability']['name'].slice(1)
          }}
        </h3>
      </div>
      <div>
        <h3 class="font-bold text-xl text-blue-100 text-center">Base Experience</h3>
        <h3 class="font-bold text-xl text-center">{{ getPokemonData['base_experience'] }}</h3>
      </div>
      <div>
        <h3 class="font-bold text-xl text-blue-100 text-center mb-2">Types</h3>
        <div class="flex items-center justify-center gap-2">
          <PokemonType
            v-for="type in getPokemonData['types']"
            :key="type['slot']"
            :type="type['type']"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PokemonType from '~/components/pokedex/PokemonType.vue';

  export default {
    components: {
      PokemonType,
    },
    props: {
      getPokemonData: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        show: false,
      };
    },
  };
</script>
