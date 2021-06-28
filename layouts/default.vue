<template>
  <!-- <div class="h-screen"> -->
  <!-- <Navbar class="h-16" /> -->
  <div class="h-full grid grid-cols-12">
    <Sidebar class="h-screen col-span-2 sticky top-0" />
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
