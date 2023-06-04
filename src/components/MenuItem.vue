<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits(['clicked'])
const props = defineProps({
  active: Boolean,
  heading: String
})

// const onHover = ref(false);
let onHover = ref(false);

</script>

<template>
  <div class="item" @click="emit('clicked')" @mouseenter="onHover = true" @mouseleave="onHover = false"
    :class="{ onHover: onHover, active: props.active }">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        {{ props.heading }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.item {
  white-space: nowrap;
  display: flex;
  margin-top: 0;
  height: 54px;
  max-height: 54px;
  transition: 0.4s;
  border: 1.5px solid var(--color-link);
}

.item.onHover,
.item.active {
  border: 1.5px solid var(--color-text);
}

.item:hover {
  cursor: pointer;
}

.item .details {
  flex: 80;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  margin-top: 0.3rem;
}

.item i {
  min-width: 32px;
  margin-left: 1rem;
  flex: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: var(--color-link);
  transition: 0.4s;
}

.item.onHover i,
.item.active i {
  fill: var(--color-text);
}

.item h3 {
  padding: 0rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.4s;
  color: var(--color-link);
}

.item.onHover h3,
.item.active h3 {
  color: var(--color-text);
}

@media (min-width: 1024px) {
  /* .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem 0rem;
  } */

  /* i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 2px solid var(--color-border);
    background: var(--vt-c-indigo);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    fill: white;
  } */

  /* .item:before {
    content: ' ';
    border-left: 2px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

  /* .item:after {
    content: ' ';
    border-left: 2px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

  /* .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  } */
}
</style>
