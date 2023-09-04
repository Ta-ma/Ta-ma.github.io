<script setup lang="ts">
import pic from '@/assets/images/welcome/pic.jpg'
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';

const picRef = ref(null);
let texts: NodeListOf<Element>;

onMounted(() => {
  texts = document.querySelectorAll(".text-block");

  // Reset animations
  for (let i = 0; i < texts.length; i++) {
    gsap.to(texts[i], { x: -400, opacity: 0, duration: 0 });
    gsap.to(picRef.value, { y: 300, opacity: 0, duration: 0 });
  }

  const timeline = gsap.timeline();
  texts.forEach((text, i) => {
    timeline.to(text, { x: 0, opacity: 1 }, `${i * 0.18}`);
  });
  gsap.to(picRef.value, { y: 0, opacity: 1 });
});
</script>

<template>
  <h1>Welcome!</h1>
  <div class="content">
    <div class="text-column">
        <h3 class="text-block" style="margin-bottom: 2rem;">
          My is Santiago Tamashiro and I'm a software engineer from Argentina.
        </h3>
        <h3 class="text-block" style="margin-bottom: 2rem;">
          I have +3 years of professional experience during which I've worked for web, desktop,
          services and infrastructure projects, from design and development to deployment.
        </h3>
        <h3 class="text-block">
          Most of my experience is doing full-stack development, but I have also done software architecture, technical documentation, DevOps automation and general software consultancy.
        </h3>
    </div>
    <div class="pic-column">
      <img ref="picRef" :src="pic">
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  padding-top: 1rem;
}

.text-column {
  flex: 5;
  display: flex;
  flex-direction: column;
}

.pic-column {
  flex: 3;
  display: flex;
  justify-content: center;
  max-height: 260px;
}

.pic-column img {
  display: block;
  max-width: 200px;
  height: auto;
}

h3 {
  font-size: 1.2rem;
  left: 20px;
}

</style>
