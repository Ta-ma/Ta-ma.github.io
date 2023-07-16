<script lang="ts" setup>

const props = defineProps({
  title: String,
  techs: Array<String>
});

</script>

<template>
  <div class="tech-card">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">{{ props.title }}</div>
    <div class="chips-container">
      <div class="chips">
        <div class="chip" v-for="tech in techs">{{ tech }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: var(--c-blue-1);
  box-shadow: 3px 4px 12px black;
  padding: 1rem;
}

.tech-card .title {
  font-size: x-large;
}

.tech-card .icon {
  height: 48px;
  width: 48px;
  margin: 0.8rem;
  fill: var(--color-link);
}

.chips-container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
}

.chips {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  width: 100%;
}

.chip {
  height: 2.7rem;
  color: black;
  font-weight: bold;
  padding: 0.6rem;
  background-color: var(--c-yellow);
  border-radius: 20px;
}

</style>
