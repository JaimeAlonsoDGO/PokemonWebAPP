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
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        pokemonTypes: {
          normal: { name: 'normal', class: 'bg-normal' },
          fighting: { name: 'fighting', class: 'bg-fighting' },
          flying: { name: 'flying', class: 'bg-flying' },
          poison: { name: 'poison', class: 'bg-poison' },
          ground: { name: 'ground', class: 'bg-ground' },
          rock: { name: 'rock', class: 'bg-rock' },
          bug: { name: 'bug', class: 'bg-bug' },
          ghost: { name: 'ghost', class: 'bg-ghost' },
          steel: { name: 'steel', class: 'bg-steel' },
          fire: { name: 'fire', class: 'bg-fire' },
          water: { name: 'water', class: 'bg-water' },
          grass: { name: 'grass', class: 'bg-grass' },
          electric: { name: 'electric', class: 'bg-electric' },
          psychic: { name: 'psychic', class: 'bg-psychic' },
          ice: { name: 'ice', class: 'bg-ice' },
          dragon: { name: 'dragon', class: 'bg-dragon' },
          dark: { name: 'dark', class: 'bg-dark' },
          fairy: { name: 'fairy', class: 'bg-fairy' },
          unknown: { name: 'unknown', class: 'bg-unknown' },
          shadow: { name: 'shadow', class: 'bg-shadow' },
        },
      };
    },
  };
</script>
