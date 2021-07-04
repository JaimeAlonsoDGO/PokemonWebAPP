<template>
  <div class="bg-blue-900 text-white">
    <nuxt-link to="/">
      <div
        class="
          flex
          justify-center
          items-center
          lg:justify-start
          py-5
          px-5
          hover:bg-blue-500
          border-b border-white
          rounded-md
        "
        :class="[routeSelected === 'home' ? selectedClass : unselectedClass]"
        @click="routeItem('home')"
      >
        <img src="~/assets/svg/Home.svg" class="w-10" />
        <span class="ml-4 text-2xl font-bold">Home</span>
      </div>
    </nuxt-link>
    <nuxt-link to="/sections/pokedex">
      <div
        class="
          flex
          justify-center
          items-center
          lg:justify-start
          py-5
          px-5
          hover:bg-blue-500
          border-b border-white
          rounded-md
        "
        :class="[routeSelected === 'pokedex' ? selectedClass : unselectedClass]"
        @click="routeItem('pokedex')"
      >
        <img src="~/assets/svg/Pokeball.svg" class="w-10" />
        <span class="ml-4 text-2xl font-bold">Pokedex</span>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        routeSelected: 'home',
        selectedClass: 'bg-blue-700',
        unselectedClass: 'bg-blue-900',
      };
    },
    methods: {
      routeItem(route) {
        this.routeSelected = route;
      },
    },
  };
</script>
