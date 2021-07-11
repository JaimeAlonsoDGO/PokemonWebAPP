<template>
  <div class="bg-blue-900 text-yellow-300">
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
          border-b border-yellow-300
          rounded-md
        "
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
          border-b border-yellow-300
          rounded-md
        "
      >
        <img src="~/assets/svg/Pokeball.svg" class="w-10" />
        <span class="ml-4 text-2xl font-bold">Pokedex</span>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
  a.nuxt-link-exact-active > div {
    background-color: #1d4ed8;
  }
</style>
