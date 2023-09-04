<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import BackendIcon from '../components/icons/IconBackend.vue'
import FrontendIcon from '../components/icons/IconFrontend.vue'
import DevOpsIcon from '../components/icons/IconDevOps.vue'
import TechCard from '../components/TechCard.vue'

const techCards: any[] = [];

onMounted(() => {
  const timeline = gsap.timeline();

  techCards.forEach((card, i) => {
    timeline.call(card.playAnimation, [], `${i * 0.14}`);
  });
});
</script>

<template>
  <main>
    <h1>Technologies</h1>
    <div class="card-container">
      <TechCard :ref="(el) => (techCards[0] = el)" title="Frontend" :techs="['Angular', 'Vue', 'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript']">
        <template #icon>
          <FrontendIcon/>
        </template>
      </TechCard>
      <TechCard :ref="(el) => (techCards[1] = el)" title="Backend" :techs="[
        'C#', 'C/C++', 'Python', 'Go', '.NET', 'NodeJS', 'Express', 'SQLServer', 'MongoDB', 'PostgreSQL'
      ]">
        <template #icon>
          <BackendIcon/>
        </template>
      </TechCard>
      <TechCard :ref="(el) => (techCards[2] = el)" title="DevOps" :techs="[
        'Azure', 'AWS', 'Docker', 'Bash', 'GitHub', 'GitLab', 'Azure DevOps', 'Terraform', 'Nginx', 'Traefik'
      ]">
        <template #icon>
          <DevOpsIcon/>
        </template>
      </TechCard>
    </div>
  </main>
</template>

<style scoped>

.card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  overflow: hidden;
  padding: .5rem 0;
}

</style>