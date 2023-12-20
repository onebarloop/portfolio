<script setup lang="ts">
import { techStack } from '../config'
</script>

<template>
  <section class="bg-yellow-200 p-12">
    <div class="card mb-12 bg-white">
      <p>
        <span class="font-bold">Techstack</span> <br />
        Those are the technologies I work with on a daily basis. <br />
        Some more, some less, depending on the project.
      </p>
    </div>
    <div class="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StackCard v-for="tech in techStack" :key="tech.id" :tech="tech" />
    </div>
  </section>
</template>
