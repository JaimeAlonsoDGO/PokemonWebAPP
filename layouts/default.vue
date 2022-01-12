<template>
  <!-- <div class="h-screen"> -->
  <div v-if="loading" class="h-screen flex items-center justify-center">
    <StatesLoading />
  </div>
  <div v-else class="h-full grid grid-cols-12">
    <Navbar class="col-span-full h-16 sticky top-0 z-10 lg:hidden" />
    <Sidebar
      class="col-span-full z-10 lg:block lg:h-screen lg:col-span-2 sticky top-0"
      :class="menuVisible.menuVisible"
    />
    <Nuxt class="col-span-full lg:col-span-10" />
  </div>
  <!-- </div> -->
</template>
<script>
  import Sidebar from '~/components/layout/SideBar';
  import Navbar from '~/components/layout/NavBar';

  export default {
    components: {
      Sidebar,
      Navbar,
    },
    data() {
      return {
        loading: false,
      };
    },
    async created() {
      try {
        this.loading = true;
        const newPokedexData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118').then(
          (res) => res.json(),
        );
        this.$store.commit('updatePokedexData', newPokedexData.results);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        throw `Error al obtener datos: ${error}`;
      }
    },
    computed: {
      menuVisible() {
        return {
          menuVisible: this.$store.state.menuVisible,
        };
      },
    },
  };
</script>
