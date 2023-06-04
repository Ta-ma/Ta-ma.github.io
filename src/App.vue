<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import GitHubIcon from './components/icons/GitHubIcon.vue'
import LinkedInIcon from './components/icons/LinkedInIcon.vue'
import MailIcon from './components/icons/MailIcon.vue'
</script>

<template>
  <div class="main-container">
    <div class="header-container">
      <header>
        <a href="mailto:santiago.tamashiro@gmail.com"><MailIcon /></a>
        <a href="https://www.linkedin.com/in/stamashiro/"><LinkedInIcon /></a>
        <a href="https://github.com/Macroshock"><GitHubIcon /></a>
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
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--c-blue-0);
  height: 80vh;
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
  /* width: 8%; */
  margin-left: 1rem;
  margin-right: 1rem;
  fill: var(--color-text);
}

.nav-container {
  width: 80%;
  max-width: 100%;
}

/* .content-container {
  display: flex;
  flex-direction: column;
} */

@media (min-width: 1024px) {
  nav {
    /* display: flex; */
    /* justify-content: flex-end; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }
}
</style>
