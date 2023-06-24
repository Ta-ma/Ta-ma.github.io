<script setup lang="ts">

</script>

<template>
  <div class="greetings">
    <h1>Welcome!</h1>
    <div class="content">
      <div class="text-column">
          <h3 class="text-block" style="margin-bottom: 2rem;">
            I'm a software developer with +3 years of professional experience, having worked for web, desktop,
            services and infrastructure projects, from design and development to deployment.
          </h3>
          <h3 class="text-block">
            some text
          </h3>
      </div>
      <div class="pic-column">
        pic
      </div>
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
  justify-content: space-between;
}

.pic-column {
  flex: 3;
}

h3 {
  font-size: 1.2rem;
  left: 20px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
