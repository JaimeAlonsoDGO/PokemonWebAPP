<template>
  <div class="lds-dual-ring"></div>
</template>
<style scoped>
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 150px;
    height: 150px;
    margin: 8px;
    border-radius: 50%;
    border: 20px solid #1e3a8a;
    border-color: #1e3a8a transparent #1e3a8a transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
