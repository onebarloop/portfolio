<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  text: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.text) errors.push({ path: 'text', message: 'Required' })
  return errors
}

// eslint-disable-next-line require-await
async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <section class="bg-green-200 p-12">
    <div class="card mx-auto mb-8 bg-white">
      <p><span class="font-bold">Contact</span> <br /></p>
    </div>
    <div class="grid grid-cols-2 gap-24">
      <div class="">
        <UForm :validate="validate" :state="state" @submit="onSubmit">
          <UFormGroup label="" name="text">
            <UTextarea placeholder="...feel free to send me a message" :rows="8" v-model="state.text" />
          </UFormGroup>
          <div class="mt-4 flex justify-end">
            <UButton size="md" color="black" class="button rounded-none bg-white" type="submit"> Submit </UButton>
          </div>
        </UForm>
      </div>
      <div class="flex flex-col gap-4">
        <a href="https://github.com/onebarloop" class="card flex flex-row gap-6 bg-fuchsia-200 hover:bg-fuchsia-300">
          <UIcon class="h-12 w-12" name="i-raphael-github" dynamic />
          <div>github.com/onebarloop</div>
        </a>
        <a href="https://www.linkedin.com/in/alexander-bayer-21a59725b/" class="card flex flex-row gap-6 bg-yellow-200 hover:bg-yellow-300">
          <UIcon class="h-12 w-12" name="i-raphael-linkedin" dynamic />
          <div>linkedin.com</div>
        </a>
      </div>
    </div>
  </section>
</template>
