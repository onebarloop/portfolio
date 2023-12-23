<script setup lang="ts">
import { techStack } from '../config'
</script>

<template>
  <section class="flex flex-col items-center bg-yellow-200 p-12 lg:block">
    <div class="card mb-12 w-72 bg-white">
      <div>
        <h3 class="mb-2 text-lg font-black">Techstack</h3>
        <p>Those are the technologies I work with on a daily basis. Some more, some less, depending on the project.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StackCard v-for="tech in techStack" :key="tech.id" :tech="tech" />
    </div>
  </section>
</template>
