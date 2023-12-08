<script setup lang="ts">
defineProps<{
  logo: string
  text: string
}>()
</script>

<template>
  <div class="flip">
    <div class="inner bg-white">
      <img class="front p-4" :src="logo" />
      <div class="back">{{ text }}</div>
    </div>
  </div>
</template>
