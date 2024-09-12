<template>
  <article>
    <ContentDoc path="/about" class="prose dark:prose-invert max-w-none prose-h1:text-indigo-400 prose-h1:text-xl" />
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'About',
  meta: [{ name: 'description', content: 'My amazing site.' }],
});
</script>

<style scoped></style>
