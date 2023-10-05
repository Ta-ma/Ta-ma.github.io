<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";

const props = defineProps({
  title: String,
  techs: Array<String>
});

const cardRef = ref(null);

defineExpose({
  playAnimation: () => {
    if (cardRef.value) {
      const card = cardRef.value as ParentNode;
      const chips = card.querySelectorAll(".chip");
      const timeline = gsap.timeline();
    
      timeline.to(card, { y: 0, opacity: 1.0 });
      timeline.to(chips, { scale: 1.0, opacity: 1.0, stagger: 0.1 });
    }
  }
})

onMounted(() => {
  if (cardRef.value) {
    const card = cardRef.value as ParentNode;
    const chips = card.querySelectorAll(".chip");

    gsap.to(card, { y: 400, opacity: 0, duration: 0 });
    gsap.to(chips, { scale: 0.1, opacity: 0.0, duration: 0 });
  }
})
</script>

<template>
  <div class="tech-card" ref="cardRef">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">{{ props.title }}</div>
    <div class="chips-container">
      <div class="chips">
        <div class="chip" v-for="tech in techs">{{ tech }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: var(--c-blue-1);
  box-shadow: 3px 4px 12px black;
  padding: 1rem;
}

.tech-card .title {
  font-size: x-large;
}

.tech-card .icon {
  height: 48px;
  width: 48px;
  margin: 0.8rem;
  fill: var(--color-link);
}

.chips-container {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-grow: 1;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
}

.chips {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  width: 100%;
}

.chip {
  height: 2.4rem;
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.6rem;
  background-color: var(--c-yellow);
  border-radius: 20px;
}
</style>
