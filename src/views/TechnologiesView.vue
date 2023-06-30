<script setup lang="ts">
</script>

<template>
  <main>
    <h1>Technologies</h1>
    <div class="card-container">
      <div class="tech-card">
        <div class="title">Frontend</div>
      </div>
      <div class="tech-card">
        <div class="title">Backend</div>
      </div>
      <div class="tech-card">
        <div class="title">DevOps</div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  background-color: var(--c-blue-1);
  box-shadow: 3px 4px 12px black;
  padding: 1rem;
}

.tech-card .title {
  font-size: x-large;
  color: var(--c-orange);
}

</style>