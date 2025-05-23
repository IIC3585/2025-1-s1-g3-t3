<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="currency in options" :key="currency" :value="currency">{{ currency }}</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  modelValue: String,
  options: Array
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
select {
  width: 100%;
  padding: 0.5em;
  margin-top: 0.3em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1em;
}
</style>
