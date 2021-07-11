<template>
  <div class="bg-blue-900 flex items-center justify-around">
    <h1 class="text-yellow-300 text-xl font-bold cursor-pointer" @click="toHome">
      Pokémon Web App
    </h1>
    <div class="w-12 h-12 cursor-pointer hover:bg-blue-700 rounded-md" @click="showMenu">
      <img src="~/assets/svg/menu.svg" />
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toHome() {
        this.$router.push('/');
      },
      showMenu() {
        this.$store.commit('showMenu');
      },
    },
  };
</script>
