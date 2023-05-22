<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import GitHubIcon from './components/icons/GitHubIcon.vue'
import LinkedInIcon from './components/icons/LinkedInIcon.vue'
import MailIcon from './components/icons/MailIcon.vue'
</script>

<template>
  <div class="view-wrapper">
    <RouterView />
  </div>

  <div class="side-container">
    <header>
      <a href="mailto: santiago.tamashiro@gmail.com"><MailIcon /></a>
      <a href="https://www.linkedin.com/in/stamashiro/"><LinkedInIcon /></a>
      <a href="https://github.com/Macroshock"><GitHubIcon /></a>
    </header>

    <div class="nav">
      <Navigation />
    </div>
  </div>

  
</template>

<style scoped>
nav {
  line-height: 1.5;
  max-height: 100vh;
}

.view-wrapper {
  width: 800px;
}

header {
  display: flex;
  justify-content: center;
  height: 40px;
}

header a {
  display: flex;
  width: 8%;
  margin-left: 1rem;
  margin-right: 1rem;
  fill: var(--color-text);
}

@media (min-width: 1024px) {
  nav {
    /* display: flex; */
    /* justify-content: flex-end; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }
}
</style>
