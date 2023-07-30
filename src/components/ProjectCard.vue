<script lang="ts" setup>
import VueViewer, { Viewer, directive } from 'v-viewer'

const options =  {
  toolbar: false,
  url: 'src',
}

const props = defineProps({
  title: String,
  description: String,
  images: Array<string>,
  techs: Array<string>
});

</script>

<template>
  <div class="project-card">
    <div class="title">{{ props.title }}</div>
    <div class="description">{{ props.description }}</div>
    <div class="chips-container">
      <div class="chips">
        <div class="chip" v-for="tech in techs">{{ tech }}</div>
      </div>
    </div>
    <div class="images-container" v-viewer="options">
      <img v-for="src in images" :key="src" :src="src">
    </div>
  </div>
</template>

<style scoped>

.project-card {
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: var(--c-blue-1);
  box-shadow: 3px 4px 12px black;
  padding: 1.5rem;
}

.title {
  font-size: x-large;
  flex: 1;
}

.description {
  flex: 2;
}

.chips-container {
  display: flex;
  flex: 3;
  gap: 1rem;
  padding-top: 1rem;
  width: 100%;
}

.chips {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 0.7rem;
  width: 100%;
}

.chip {
  height: 2.3rem;
  color: black;
  font-weight: bold;
  font-size: 12px;
  padding: 0.6rem;
  background-color: var(--c-yellow);
  border-radius: 20px;
}

.images-container {
  flex: 4;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  gap: 1rem;
}

.images-container img {
  width: 120px;
  max-height: 80px;
  cursor: pointer;
  object-fit: contain;
}

</style>
