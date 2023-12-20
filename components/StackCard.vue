<script setup lang="ts">
import type { TechStack } from '~/config'

defineProps<{
  tech: TechStack
}>()
</script>

<template>
  <div class="flip">
    <div class="inner bg-white">
      <img class="front p-4" :src="tech.logo" :alt="`${tech.name} Icon`" />
      <div class="back flex flex-col gap-2 p-4">
        <span class="font-black">{{ tech.name }}</span>
        <span>{{ tech.text }}</span>
        <a v-if="tech.link" :href="tech.link.href" class="mt-auto self-end font-bold hover:opacity-70">{{ tech.link.name }}</a>
      </div>
    </div>
  </div>
</template>
