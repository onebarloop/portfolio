<script setup lang="ts">
const activeStyle = 'border-x-4 border-t-4 !border-b-0'
const pages = [
  { path: '/', color: 'bg-purple-200', name: 'Index' },
  { path: '/stack', color: 'bg-yellow-200', name: 'Stack' },
  { path: '/contact', color: 'bg-green-200', name: 'Contact' }
]
</script>
<template>
  <div>
    <header class="sticky top-0 flex flex-row">
      <!-- prettier-ignore -->
      <div class="bg-dots flex h-12 basis-1/2 border-b-4 border-black selection:items-center">
        <h1 class="text-2xl font-black">Portfolio Website</h1>
      </div>
      <div class="grid h-12 basis-1/2 grid-cols-3 font-black">
        <NuxtLink
          v-for="page in pages"
          :key="page.name"
          :active-class="activeStyle"
          class="flex items-center justify-center border-b-4 border-black"
          :class="page.color"
          :to="page.path"
          >{{ page.name }}
        </NuxtLink>
      </div>
    </header>
    <NuxtPage class="h-[1200px] border-4 border-t-0 border-black" />
  </div>
</template>
