<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';
import UnlamLogo from '@/assets/images/experience/logo_unlam.png'
import CircoLogo from '@/assets/images/experience/logo_circo.png'
import HahnLogo from '@/assets/images/experience/logo_hahn.png'

const activeJob = ref(0);
let cards: NodeListOf<Element>;
let descriptions: NodeListOf<Element>;

function changeActiveJob(job: number) {
  gsap.to(descriptions[activeJob.value], { x: 800, opacity: 0 });
  gsap.to(cards[activeJob.value], { scale: 1, margin: 10 });
  gsap.to(descriptions[job], { x: 0, opacity: 1.0 });
  gsap.to(cards[job], { scale: 1.4, margin: 25 });
  activeJob.value = job;
}

onMounted(() => {
  cards = document.querySelectorAll(".job-card");
  descriptions = document.querySelectorAll(".job-description");

  // Reset animations
  for (let i = 0; i < 3; i++) {
    gsap.to(descriptions[i], { x: 800, opacity: 0, duration: 0 });
    gsap.to(cards[i], { scale: 1, margin: 10, duration: 0 });
  }
  activeJob.value = 0;
  changeActiveJob(0);
});

</script>

<template>
  <main>
    <h1>Experience</h1>
    <div class="content">
      <div class="role-column">
        <div class="job-card" :class="{ active: activeJob === 0 }" @click="(event) => changeActiveJob(0)">
          <div class="logo-container">
            <img :src="UnlamLogo">
          </div>
          <div class="role-container">
            <h4>Universidad Nacional de La Matanza</h4>
            <h2>Research Assistant</h2>
            <h4>2016 - 2019</h4>
          </div>
        </div>
        <div class="job-card" :class="{ active: activeJob === 1 }" @click="(event) => changeActiveJob(1)">
          <div class="logo-container">
            <img :src="CircoLogo">
          </div>
          <div class="role-container">
            <h3>Circo Studio</h3>
            <h2>Fullstack Developer</h2>
            <h4>2020 - 2021</h4>
          </div>
        </div>
        <div class="job-card" :class="{ active: activeJob === 2 }" @click="(event) => changeActiveJob(2)">
          <div class="logo-container">
            <img :src="HahnLogo">
          </div>
          <div class="role-container">
            <h3>Hahn Software</h3>
            <h2>Software Engineer</h2>
            <h4>2021 - present</h4>
          </div>
        </div>
      </div>
      <div class="description-column">
        <div class="job-description" :class="{ active: activeJob === 0 }">
          <div class="text-block">
            <h3>I voluntereed as a part-time web developer for the research group GIDFIS, 
              which was focused on education related research.</h3>
            <br/>
            <h3>Here I participated in the development of ther platform "Programados", a website to 
              help students enhance their programming skills. I worked mostly as a <b>C#, JavaScript 
              developer and SQL database mantainer.</b></h3>
          </div>
          <h3 class="text-block">
            We achieved an increase in student performance in entry-level programming exams, 
            specially for those who had no prior programming experience.
          </h3>
          <h3 class="text-block">
            I also assisted in assessing research results for the project leader’s work in 
            the academic papers, based on the data gathered from the platform.
          </h3>
        </div>
        <div class="job-description" :class="{ active: activeJob === 1 }">
          <h3 class="text-block">
            I worked on several web projects, backend services and APIs the customer which was a multimedia and 
            entertainment company, <b>using C#, .NET Framework 4.5 and .NET Core 3.1, Angular, MongoDB and SQL Server.</b>
          </h3>
          <h3 class="text-block">
            I was the main developer for a system that handled the deliveries of multimedia assets and 
            metadata to broadcaster companies external systems. This system was responsible for:
            <ul>
              <li>Exchanging metadata using various XML formats with external APIs.</li>
              <li>Transfering media assets using <b>IBM's Aspera service.</b></li>
              <li>Tracking status of media bundles being sent to external systems.</li>
              <li>Encoding video files in different formats using <b>AWS Elemental.</b></li>
              <li>Synchronizing subtitles for movies that were split in segments.</li>
              <li>Displaying dashboards of business metrics and system performance.</li>
            </ul>
          </h3>
        </div>
        <div class="job-description" :class="{ active: activeJob === 2 }">
          <h3 class="text-block">
            My role is to design, develop and document services and apps for a client who focuses on industrial 
            machinery. For this I have employed mainly <b>C#, Python, Golang, Angular, NodeJS, ExpressJS, TypeScript.</b>
          </h3>
          <h3 class="text-block">
            I've worked in the design of industrial applications meant to manage machine's tools, parse NC G-code files,
            monitor tool lifetime status, visualizing sensors data obtained through the PLC and more.
          </h3>
          <h3 class="text-block">
            I created a pipeline to generate and integrate documentation from several Git repositories using <b>MkDocs,
            Azure DevOps pipelines and Azure WebApps.</b>
          </h3>
          <h3 class="text-block">
            I also provide consulting regarding software architecture for IIoT systems, project management, viability 
            and effort estimations.
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.text-block b {
  font-weight: bold;
}

.content {
  display: flex;
  padding-top: 1rem;
  flex-direction: row;
  justify-content: space-between;
}

.role-column {
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.job-card {
  display: flex;
  min-width: 70%;
  margin: 10px;
  color: gray;
  background-color: var(--c-blue-1);
  padding: 1rem;
  cursor: pointer;
  box-shadow: 3px 4px 12px black;
  font-size: 0.6rem;
  max-width: 70%;
}

.job-card:not(:last-child) {
  margin-bottom: 1rem;
}

.job-card.active {
  color: white;
}

.job-card.active .logo-container img {
  filter: brightness(100%);
}

.logo-container {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container img {
  filter: brightness(50%);
  max-width: 70%;
}

.role-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding-left: 1rem;
}

.role-container > * {
  text-align: left;
}

.description-column {
  flex: 6;
  overflow: hidden;
}

.job-description {
  position: absolute;
  margin-left: 3rem;
}

.job-description .text-block {
  margin-bottom: 1.5rem;
}
</style>