<template>
  <button
    class="bg-blue-900 text-white font-bold rounded-md p-2 hover:bg-blue-800 w-full"
    @click="action"
  >
    {{ textButton }}
  </button>
</template>
<script>
  export default {
    props: {
      textButton: {
        type: String,
        default: '',
      },
      action: {
        type: Function,
        default: () => {},
      },
    },
  };
</script>
