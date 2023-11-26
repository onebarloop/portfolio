<script setup lang="ts">
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
  <section class="bg-purple-200 p-12">
    <div class="flex flex-col gap-12">
      <div class="card mx-auto bg-white font-bold">Index</div>
      <div class="grid grid-cols-2 gap-12">
        <div class="flex flex-col gap-24">
          <div class="card animation-left mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-left mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-left mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-left mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-left mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-left mx-auto bg-white font-bold">Look what I have done in the past!</div>
        </div>
        <div class="flex flex-col gap-24 pt-24">
          <div class="card animation-right mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-right mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-right mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-right mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-right mx-auto bg-white font-bold">Look what I have done in the past!</div>
          <div class="card animation-right mx-auto bg-white font-bold">Look what I have done in the past!</div>
        </div>
      </div>
    </div>
  </section>
</template>
