<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const info: Ref<'success' | 'error' | null> = ref(null)

const state = reactive({
  text: undefined,
  test: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.text) errors.push({ path: 'text', message: 'Required' })
  if (state.test) errors.push({ path: 'test', message: 'Forbidden' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  const formData = event.data
  const response = await $fetch('/api/mail', {
    method: 'POST',
    body: formData
  })
  info.value = response
}
</script>

<template>
  <section class="bg-green-200 p-12">
    <div class="card mx-auto mb-8 bg-white">
      <p><span class="font-bold">Contact</span> <br /></p>
    </div>
    <div class="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-2">
      <div class="order-last md:order-first">
        <UForm :validate="validate" :state="state" @submit="onSubmit">
          <Transition name="bounce" mode="out-in">
            <div v-if="!info">
              <UFormGroup class="h-56" label="" name="text">
                <UTextarea v-model="state.text" placeholder="...feel free to send me a message" :rows="10" />
              </UFormGroup>
              <UFormGroup class="hidden" label="" name="test">
                <UTextarea v-model="state.test" placeholder="...feel free to send me a message" :rows="8" />
              </UFormGroup>
            </div>
            <div v-else class="flex h-56 w-full flex-col items-center justify-center gap-8 rounded bg-[#111827]">
              <Icon :name="info === 'success' ? 'pixelarticons:heart' : 'pixelarticons:debug'" class="mx-auto" size="72" color="#e9d5ff" />
              <h4 class="px-12 text-center font-bold text-purple-200">
                <span v-if="info === 'success'">Thank you for your message</span>
                <span v-else>Sorry, something went wrong. Please try again later</span>
              </h4>
            </div>
          </Transition>
          <div class="mt-4 flex justify-end">
            <UButton
              size="md"
              :disabled="!!info"
              :class="!info ?? 'opacity-50'"
              color="black"
              class="button flex w-full justify-center rounded-none px-8 font-bold sm:w-auto"
              type="submit"
            >
              Submit
            </UButton>
          </div>
        </UForm>
      </div>
      <div class="flex flex-col gap-4">
        <a href="https://github.com/onebarloop" class="card flex flex-row gap-6 bg-fuchsia-200 hover:bg-fuchsia-300">
          <Icon class="h-12 w-12" name="i-raphael-github" dynamic />
          <div>github.com</div>
        </a>
        <a href="https://www.linkedin.com/in/alexander-bayer-21a59725b/" class="card flex flex-row gap-6 bg-yellow-200 hover:bg-yellow-300">
          <Icon class="h-12 w-12" name="i-raphael-linkedin" dynamic />
          <div>linkedin.com</div>
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
