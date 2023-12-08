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
    <div class="card mx-auto mb-8 bg-white font-bold">Contact</div>
    <div class="grid grid-cols-2 gap-24">
      <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="text" name="text">
          <UTextarea v-model="state.text" />
        </UFormGroup>
        <UButton size="md" color="black" class="button rounded-none bg-white" type="submit"> Submit </UButton>
      </UForm>
      <div class="card h-96 bg-white"></div>
    </div>
  </section>
</template>
