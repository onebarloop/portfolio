<script setup lang="ts">
import { vita, type Vita } from '../config'

const arrayL: Vita[] = []
const arrayR: Vita[] = []

for (let i = 0; i < vita.length; i++) {
  if (!(i % 2)) {
    arrayL.push(vita[i])
  } else {
    arrayR.push(vita[i])
  }
}

onMounted(() => {
  const animation = document.querySelectorAll('.animation-left')
  const animationR = document.querySelectorAll('.animation-right')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation')
        } else {
          entry.target.classList.remove('scroll-animation')
        }
      })
    },
    { rootMargin: '-200px 0px -80px 0px' }
  )
  for (let i = 0; i < animation.length; i++) {
    const elements = animation[i]

    observer.observe(elements)
  }
  for (let i = 0; i < animationR.length; i++) {
    const elements = animationR[i]

    observer.observe(elements)
  }
})
</script>
<template>
  <section class="bg-purple-200 p-4 pt-12 sm:p-12">
    <div class="flex flex-col gap-12">
      <div class="card flex flex-row gap-12 self-start bg-white">
        <p>
          <span class="font-black">Hey there </span>👋 <br />
          Welcome to my Website
        </p>
        <div class="shade-small h-36 w-36 shrink-0">
          <img src="/img/me.jpg" />
        </div>
      </div>
      <div class="hidden grid-cols-2 gap-12 sm:grid">
        <div class="flex flex-col gap-24">
          <div v-for="point in arrayL" :key="point.id">
            <VitaCard :date="point.date" :animation="'animation-left'" :text="point.text" />
          </div>
        </div>
        <div class="flex flex-col gap-24 pt-24">
          <div v-for="point in arrayR" :key="point.id">
            <VitaCard :date="point.date" :animation="'animation-right'" :text="point.text" />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-24 sm:hidden">
        <div v-for="(point, index) in vita" :key="point.id">
          <VitaCard v-if="index % 2" :date="point.date" :animation="'animation-left'" :text="point.text" />
          <VitaCard v-else :date="point.date" :animation="'animation-right'" :text="point.text" />
        </div>
      </div>
    </div>
  </section>
</template>
