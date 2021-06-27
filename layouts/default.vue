<template>
  <!-- <div class="h-screen"> -->
  <!-- <Navbar class="h-16" /> -->
  <div class="h-screen grid grid-cols-12">
    <Sidebar class="col-span-2" />
    <Nuxt class="col-span-10" />
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
  };
</script>
