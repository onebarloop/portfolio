<script setup lang="ts">
import type { Vita } from '~/config'

defineProps<{
  data: Vita
  animation: string
}>()
</script>
<template>
  <div :class="animation" class="card vita group relative mx-auto flex flex-col items-start gap-2 bg-white">
    <div class="flex items-center justify-between gap-4 text-xl font-black">
      <Icon v-if="data.icon" :name="data.icon" class="size-14" />
      <div class="font-VT323">
        <p class="text-[0.9rem] leading-none">{{ data.date }}</p>
        <h2 class="text-3xl">{{ data.title }}</h2>
      </div>
    </div>
    <!-- <p class="">{{ data.text }}</p> -->
    <div v-html="data.text"></div>
    <div v-if="data.link" class="mt-2 flex w-full justify-end">
      <a :href="data.link.href" class="flex items-center text-lg font-bold hover:text-purple-500">{{ data.link.text }}</a>
    </div>
    <div class="absolute -left-[13px] -top-[13px] h-6 w-6 rotate-45 border-r-4 border-black bg-purple-200 bg-left group-hover:bg-right"></div>
  </div>
</template>
