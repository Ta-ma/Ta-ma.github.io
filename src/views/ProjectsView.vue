<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import ArrowLeftIcon from '../components/icons/IconArrowLeft.vue'
import ArrowRightIcon from '../components/icons/IconArrowRight.vue'
import { ref } from 'vue';
import smileAwayImage1 from '@/assets/images/projects/smile-away/1.png'
import smileAwayImage2 from '@/assets/images/projects/smile-away/2.png'
import smileAwayImage3 from '@/assets/images/projects/smile-away/3.png'
import walletShellImage1 from '@/assets/images/projects/wallet-shell/1.png'
import programadosImage1 from '@/assets/images/projects/programados/1.png'
import programadosImage2 from '@/assets/images/projects/programados/2.png'
import saiaImage1 from '@/assets/images/projects/saia/1.png'
import saiaImage2 from '@/assets/images/projects/saia/2.png'

const activePage = ref(0);

</script>

<template>
  <main>
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="projects-arrow">
        <div v-if="activePage === 1" @click="activePage = 0"><ArrowLeftIcon class="icon"/></div>
      </div>
      <div v-if="activePage === 0" class="projects-page">
        <ProjectCard 
          title="Smile Away" 
          description="Mobile videogame for Android devices." 
          :techs="['Unity', 'C#']"
          :images="[smileAwayImage1, smileAwayImage2, smileAwayImage3]"
        >
        </ProjectCard>
        <ProjectCard 
          title="Walletshell" 
          description="Front-end wallet app for the TurtleCoin cryptocurrency." 
          :techs="['Electron', 'NodeJS', 'HTML', 'CSS', 'Javascript']"
          :images="[walletShellImage1]"
        >
        </ProjectCard>
      </div>
      <div v-if="activePage === 1" class="projects-page">
        <ProjectCard 
          title="Programados" 
          description="Web platform for programming practice for students." 
          :techs="['C#', 'Javascript', 'ASP.NET MVC 5', 'JQuery', 'SQL Server', 'Materialize']"
          :images="[programadosImage1, programadosImage2]"
        >
        </ProjectCard>
        <ProjectCard 
          title="SAIA" 
          description="Desktop app to automatically generate subtitles for movies using AI." 
          :techs="['JavaFX', 'React', 'NodeJS', 'Express', 'Google Cloud', 'Azure']"
          :images="[saiaImage1, saiaImage2]"
        >
        </ProjectCard>
      </div>
      <div class="projects-arrow">
        <div v-if="activePage === 0" @click="activePage = 1"><ArrowRightIcon class="icon"/></div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.projects-container {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  height: 42vh;
}

.projects-page {
  flex: 8;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.projects-arrow {
  flex: 0.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects-arrow .icon {
  height: 48px;
  fill: var(--color-link);
}

.projects-arrow .icon:hover {
  cursor: pointer;
}

</style>