<script setup lang="ts">
import { techStack } from '../config'
</script>

<template>
  <section class="bg-yellow-200 p-12">
    <div class="card mb-12 bg-white font-bold">Stack</div>
    <div class="grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-4">
      <StackCard v-for="tech in techStack" :key="tech.id" :logo="tech.logo" :text="tech.text" :name="tech.name" :link="tech.link" />
    </div>
  </section>
</template>
