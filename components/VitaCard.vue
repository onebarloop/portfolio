<script setup lang="ts">
defineProps<{
  date: string
  text: string
  animation: string
}>()
</script>
<template>
  <div :class="animation" class="card mx-auto flex flex-col items-start bg-white">
    <div class="font-black">{{ date }}</div>
    <div>{{ text }}</div>
  </div>
</template>
