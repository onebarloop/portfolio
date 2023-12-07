<script setup lang="ts">
import { pages } from './config'
</script>
<template>
  <div class="container mx-auto px-4 sm:px-12 xl:max-w-[1024px]">
    <header class="sticky top-0 z-20 flex flex-col gap-6 bg-dots sm:flex-row sm:gap-0">
      <div class="flex h-12 basis-1/2 items-center border-black sm:border-b-4">
        <h1 class="text-2xl font-black">Portfolio Website</h1>
      </div>
      <div class="grid h-12 basis-1/2 grid-cols-3 font-black">
        <NuxtLink
          v-for="page in pages"
          :key="page.name"
          :active-class="'border-x-4 border-t-4 !border-b-0'"
          class="flex h-12 items-center justify-center border-b-4 border-black sm:h-auto"
          :class="page.color"
          :to="page.path"
          >{{ page.name }}
        </NuxtLink>
      </div>
    </header>
    <NuxtPage class="shade border-4 border-t-0 border-black" />
  </div>
</template>
