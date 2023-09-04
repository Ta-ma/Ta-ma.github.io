<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
import AboutMeIcon from './icons/IconAboutMe.vue'
import ExperienceIcon from './icons/IconExperience.vue'
import TechnologiesIcon from './icons/IconTechnologies.vue'
import ProjectsIcon from './icons/IconProjects.vue'
import router from '@/router'

const activeItem = ref([false, false, false, false]);
const routerLinks = ['/', '/tech', '/experience', '/projects']

function activateItem(num: number): void {
  activeItem.value.forEach((_, index) => {
    activeItem.value[index] = index === num ? true : false;
  });

  router.push(routerLinks[num])
}

</script>

<template>
  <nav>
    <MenuItem @clicked="activateItem(0)" :active="activeItem[0]" :heading="'About me'">
      <template #icon>
        <AboutMeIcon style="transform: scale(.8);" />
      </template>
    </MenuItem>

    <MenuItem @clicked="activateItem(1)" :active="activeItem[1]" :heading="'Technologies'">
      <template #icon>
        <TechnologiesIcon/>
      </template>
    </MenuItem>

    <MenuItem @clicked="activateItem(2)" :active="activeItem[2]" :heading="'Experience'">
      <template #icon>
        <ExperienceIcon />
      </template>
    </MenuItem>

    <MenuItem @clicked="activateItem(3)" :active="activeItem[3]" :heading="'Projects'">
      <template #icon>
        <ProjectsIcon style="transform: scale(.8);"/>
      </template>
    </MenuItem>
  </nav>
</template>

<style>
nav {
  display: flex;
  gap: 3rem;
  padding: 0rem 3rem;
  line-height: 1.5;
  width: 100%;
  font-size: 12px;
  text-align: left;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
}
</style>
