<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import ProjectCard from '@/components/ProjectCard.vue';
import ArrowLeftIcon from '../components/icons/IconArrowLeft.vue';
import ArrowRightIcon from '../components/icons/IconArrowRight.vue';
import smileAwayImage1 from '@/assets/images/projects/smile-away/1.png';
import smileAwayImage2 from '@/assets/images/projects/smile-away/2.png';
import smileAwayImage3 from '@/assets/images/projects/smile-away/3.png';
import walletShellImage1 from '@/assets/images/projects/wallet-shell/1.png';
import programadosImage1 from '@/assets/images/projects/programados/1.png';
import programadosImage2 from '@/assets/images/projects/programados/2.png';
import saiaImage1 from '@/assets/images/projects/saia/1.png';
import saiaImage2 from '@/assets/images/projects/saia/2.png';

const activePage = ref(0);
let pages: any[] = [];
let cards: any[] = [];
const leftArrow = ref(null);
const rightArrow = ref(null);

function switchPage(page: number) {
  if (page <= activePage.value) {
    gsap.to(pages[activePage.value], { x: 400, opacity: 0, display: 'none', duration: 0.25 });
    gsap.to(pages[page], { x: 0, opacity: 1, display: 'flex', duration: 0.5 });

    if (page === 0) {
      gsap.to(leftArrow.value, { opacity: 0, display: 'none', duration: 0.2 });
    }

    if (activePage.value === pages.length - 1) {
      gsap.to(rightArrow.value, { opacity: 1, display: 'block', duration: 0.2 });
    }
  } else {
    gsap.to(pages[activePage.value], { x: -400, opacity: 0, display: 'none', duration: 0.25 });
    gsap.to(pages[page], { x: 0, opacity: 1, display: 'flex', duration: 0.5 });

    console.log(page, pages.length)
    if (activePage.value === 0) {
      gsap.to(leftArrow.value, { opacity: 1, display: 'block', duration: 0.2 });
    }

    if (page === pages.length - 1) {
      gsap.to(rightArrow.value, { opacity: 0, display: 'none', duration: 0.2 });
    }
  }
  activePage.value = page;
}

onMounted(() => {
  pages.forEach(p => {
    gsap.to(p, { x: 400, opacity: 0, display: 'none', duration: 0 });
  });
  gsap.to(leftArrow.value, { opacity: 0, display: 'none', duration: 0 });

  switchPage(0);
});

</script>

<template>
  <main>
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="projects-arrow">
        <div ref="leftArrow" @click="switchPage(0)"><ArrowLeftIcon class="icon"/></div>
      </div>
      <div class="projects-section">
        <div :ref="(el) => (pages[0] = el)" :class="{ active: activePage === 1 }" class="projects-page">
          <ProjectCard :ref="(el) => (cards[0] = el)"
            title="Smile Away" 
            description="Mobile videogame for Android devices." 
            :techs="['Unity', 'C#']"
            :images="[smileAwayImage1, smileAwayImage2, smileAwayImage3]"
          >
          </ProjectCard>
          <ProjectCard :ref="(el) => (cards[1] = el)"
            title="Walletshell" 
            description="Front-end wallet app for the TurtleCoin cryptocurrency." 
            :techs="['Electron', 'NodeJS', 'HTML', 'CSS', 'Javascript']"
            :images="[walletShellImage1]"
          >
          </ProjectCard>
        </div>
        <div :ref="(el) => (pages[1] = el)" :class="{ active: activePage === 1 }" class="projects-page">
          <ProjectCard :ref="(el) => (cards[2] = el)"
            title="Programados" 
            description="Web platform for programming practice for students." 
            :techs="['C#', 'Javascript', 'ASP.NET MVC 5', 'JQuery', 'SQL Server', 'Materialize']"
            :images="[programadosImage1, programadosImage2]"
          >
          </ProjectCard>
          <ProjectCard :ref="(el) => (cards[3] = el)"
            title="SAIA" 
            description="Desktop app to automatically generate subtitles for movies using AI." 
            :techs="['JavaFX', 'React', 'NodeJS', 'Express', 'Google Cloud', 'Azure']"
            :images="[saiaImage1, saiaImage2]"
          >
          </ProjectCard>
        </div>
      </div>
      <div class="projects-arrow">
        <div ref="rightArrow" @click="switchPage(1)"><ArrowRightIcon class="icon"/></div>
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

.projects-section {
  height: 100%;
  flex: 8;
  overflow: hidden;
}

.projects-page {
  position: absolute;
  width: 100%;
  height: 95%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
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