<template>
  <div
    class="rounded-md text-white font-bold p-2 text-center cursor-pointer"
    :class="pokemonTypes[type['name']]['class']"
  >
    {{
      pokemonTypes[type['name']]['name'].charAt(0).toUpperCase() +
      pokemonTypes[type['name']]['name'].slice(1)
    }}
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {
        pokemonTypes: {
          normal: {
            name: 'normal',
            class:
              'hover:text-white text-normal hover:bg-normal bg-transparent border border-normal',
          },
          fighting: {
            name: 'fighting',
            class:
              'hover:text-white text-fighting hover:bg-fighting bg-transparent border border-fighting',
          },
          flying: {
            name: 'flying',
            class:
              'hover:text-white text-flying hover:bg-flying bg-transparent border border-flying',
          },
          poison: {
            name: 'poison',
            class:
              'hover:text-white text-poison hover:bg-poison bg-transparent border border-poison',
          },
          ground: {
            name: 'ground',
            class:
              'hover:text-white text-ground hover:bg-ground bg-transparent border border-ground',
          },
          rock: {
            name: 'rock',
            class: 'hover:text-white text-rock hover:bg-rock bg-transparent border border-rock',
          },
          bug: {
            name: 'bug',
            class: 'hover:text-white text-bug hover:bg-bug bg-transparent border border-bug',
          },
          ghost: {
            name: 'ghost',
            class: 'hover:text-white text-ghost hover:bg-ghost bg-transparent border border-ghost',
          },
          steel: {
            name: 'steel',
            class: 'hover:text-white text-steel hover:bg-steel bg-transparent border border-steel',
          },
          fire: {
            name: 'fire',
            class: 'hover:text-white text-fire hover:bg-fire bg-transparent border border-fire',
          },
          water: {
            name: 'water',
            class: 'hover:text-white text-water hover:bg-water bg-transparent border border-water',
          },
          grass: {
            name: 'grass',
            class: 'hover:text-white text-grass hover:bg-grass bg-transparent border border-grass',
          },
          electric: {
            name: 'electric',
            class:
              'hover:text-white text-electric hover:bg-electric bg-transparent border border-electric',
          },
          psychic: {
            name: 'psychic',
            class:
              'hover:text-white text-psychic hover:bg-psychic bg-transparent border border-psychic',
          },
          ice: {
            name: 'ice',
            class: 'hover:text-white text-ice hover:bg-ice bg-transparent border border-ice',
          },
          dragon: {
            name: 'dragon',
            class:
              'hover:text-white text-dragon hover:bg-dragon bg-transparent border border-dragon',
          },
          dark: {
            name: 'dark',
            class: 'hover:text-white text-dark hover:bg-dark bg-transparent border border-dark',
          },
          fairy: {
            name: 'fairy',
            class: 'hover:text-white text-fairy hover:bg-fairy bg-transparent border border-fairy',
          },
          unknown: {
            name: 'unknown',
            class:
              'hover:text-white text-unknown hover:bg-unknown bg-transparent border border-unknown',
          },
          shadow: {
            name: 'shadow',
            class:
              'hover:text-white text-shadow hover:bg-shadow bg-transparent border border-shadow',
          },
        },
      };
    },
  };
</script>
