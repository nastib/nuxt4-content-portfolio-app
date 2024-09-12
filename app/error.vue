<template>
  <NuxtLayout>
    <section class="flex justify-center items-center flex-col">
      <h1 class="text-4xl mb-4">Opps {{ error.statusCode }}</h1>

      <h2 class="text-xl text-gray-500 dark:text-gray-400">
        {{ error.statusMessage }}
      </h2>
    </section>
  </NuxtLayout>
</template>

<script setup lang="js">
defineProps({ error: Object });
</script>
