<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import IconGitHub from './components/icons/IconGitHub.vue'
import IconLinkedIn from './components/icons/IconLinkedIn.vue'
import IconMail from './components/icons/IconMail.vue'
</script>

<template>
  <div class="main-container">
    <div class="header-container">
      <header>
        <a href="mailto:santiago.tamashiro@gmail.com"><IconMail /></a>
        <a href="https://www.linkedin.com/in/stamashiro/"><IconLinkedIn /></a>
        <a href="https://github.com/Macroshock"><IconGitHub /></a>
      </header>
    </div>

    <div class="view-container">
      <RouterView />
    </div>

    <div class="nav-container">
      <Navigation />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 1280px;
  max-height: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--c-blue-0);
  height: 80vh;
  border-radius: 50px;
}

.view-container {
  padding: 3rem;
  min-height: 80%;
}

header {
  display: flex;
  justify-content: flex-end;
  height: 40px;
  margin-top: 1rem;
  margin-right: 1rem;
}

header a {
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  fill: var(--color-text);
}

header a:hover {
  fill: var(--color-text-hover);
}

.nav-container {
  width: 80%;
  max-width: 100%;
}
</style>
