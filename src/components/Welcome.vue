<script setup lang="ts">

</script>

<template>
  <div class="greetings">
    <h1 class="green">Welcome!</h1>
    <h3 class="text-block">
      Some text about me
    </h3>
  </div>
</template>

<style scoped>

h3 {
  font-size: 1.2rem;
  left: 20px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
