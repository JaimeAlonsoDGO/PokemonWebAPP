<template>
  <img :src="imageSrc" class="bg-blue-100 rounded-md w-full" :alt="altText" />
</template>
<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        default: '',
      },
      altText: {
        type: String,
        default: 'Pokemon Image',
      },
    },
  };
</script>
