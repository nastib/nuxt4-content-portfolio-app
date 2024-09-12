<template>
  <NuxtLayout>
    <Suspense>
      <NuxtPage />
    </Suspense>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [{ name: 'description', content: 'My amazing site.' }],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: blur(5px);
}
</style>
