<script setup lang="ts">
import BackendIcon from '../components/icons/IconBackend.vue'
import FrontendIcon from '../components/icons/IconFrontend.vue'
import DevOpsIcon from '../components/icons/IconDevOps.vue'
import TechCard from '../components/TechCard.vue'

// let frontendTechs = ["Angular", "Vue"]
</script>

<template>
  <main>
    <h1>Technologies</h1>
    <div class="card-container">
      <TechCard title="Frontend" :techs="['Angular', 'Vue', 'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript']">
        <template #icon>
          <FrontendIcon/>
        </template>
      </TechCard>
      <TechCard title="Backend" :techs="[
        'C#', 'C/C++', 'Python', 'Go', '.NET', 'NodeJS', 'Express', 'SQLServer', 'MongoDB', 'PostgreSQL'
      ]">
        <template #icon>
          <BackendIcon/>
        </template>
      </TechCard>
      <TechCard title="DevOps" :techs="[
        'Azure', 'AWSS', 'Docker', 'Bash', 'GitHub', 'GitLab', 'Azure DevOps', 'Terraform', 'Nginx', 'Traefik'
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
}

</style>