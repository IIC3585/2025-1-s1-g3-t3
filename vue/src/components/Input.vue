<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', parseFloat($event.target.value))"
    />
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  modelValue: Number,
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1em;
}
</style>
