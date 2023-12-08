<script setup lang="ts">
defineProps<{
  logo: string
  text: string
  name: string
  link?: string
}>()
</script>

<template>
  <div class="flip">
    <div class="inner bg-white">
      <img class="front p-4" :src="logo" />
      <div class="back flex flex-col gap-2 p-4">
        <span class="font-black">{{ name }}</span>
        <span>{{ text }}</span>
        <a :href="link" class="mt-auto self-end font-bold hover:opacity-70">{{ link }}</a>
      </div>
    </div>
  </div>
</template>
