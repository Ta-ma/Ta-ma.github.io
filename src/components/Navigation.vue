<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MenuItem from './MenuItem.vue'
import AboutMeIcon from './icons/IconAboutMe.vue'
import ExperienceIcon from './icons/IconExperience.vue'
import TechnologiesIcon from './icons/IconTechnologies.vue'
import ProjectsIcon from './icons/IconProjects.vue'
</script>

<template>
  <nav>
    <div class="menu-container">
      <MenuItem>
        <template #icon>
          <AboutMeIcon style="transform: scale(.5);" />
        </template>
        <template #heading>
          <RouterLink to="/">About me</RouterLink>
        </template>
      </MenuItem>

      <MenuItem>
        <template #icon>
          <TechnologiesIcon style="transform: scale(.5);" />
        </template>
        <template #heading>
          <RouterLink to="/tech">Technologies</RouterLink>
        </template>
      </MenuItem>

      <MenuItem>
        <template #icon>
          <ExperienceIcon style="transform: scale(.5);" />
        </template>
        <template #heading>
          <RouterLink to="/experience">Experience</RouterLink>
        </template>
      </MenuItem>

      <MenuItem>
        <template #icon>
          <ProjectsIcon style="transform: scale(.5);" />
        </template>
        <template #heading>
          <RouterLink to="/projects">Projects</RouterLink>
        </template>
      </MenuItem>
    </div>
  </nav>
</template>

<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-top: 15rem;
  margin-left: 8rem;
}

nav:before {
  content: " ";
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, var(--c-pink)0%, var(--c-orange)50%, var(--c-red)100%);
  opacity: 1;
  border-top-left-radius: 8px;
  transition: all .3s ease-in-out;
  position: absolute;
  top: -2px;
  bottom: 0;
  left: -2px;
}

.menu-container {
  background: var(--c-dark);
  border-top-left-radius: 8px;
  padding-top: 1rem;
  padding-left: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
