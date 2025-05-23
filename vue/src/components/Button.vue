<template>
  <button class="btn" @click="onClick">
    <slot />
  </button>
</template>

<script setup>
defineProps(['onClick']);
</script>
<style scoped>
.btn {
  padding: 0.6rem 1.2rem;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: border-color 0.25s;
}
.btn:hover {
  border-color: #646cff;
}
</style>
