<script setup lang="ts">
import type { Vita } from '~/config'

defineProps<{
  data: Vita
  animation: string
}>()
</script>
<template>
  <div :class="animation" class="card vita mx-auto flex flex-col items-start gap-4 bg-white">
    <div class="flex items-center justify-between gap-4 text-xl font-black">
      <Icon v-if="data.icon" :name="data.icon" class="h-12 w-12" />
      <h3>{{ data.date }}</h3>
    </div>
    <div>{{ data.text }}</div>
  </div>
</template>
