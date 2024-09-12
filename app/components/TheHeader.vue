<template>
  <header class="flex items-start justify-between md:items-center mt-5 dark:text-gray-500 text-gray-600">
    <!-- <div class="flex items-center md:space-x-12"> -->
    <div class="hidden md:block">
      <NuxtLink to="/" class="text-xl font-semibold py-2">Wilfrid Nas</NuxtLink>
    </div>
    <!-- </div> -->
    <div class="flex md:gap-2 items-start md:items-center justify-between w-full md:w-auto">
      <Menu />
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style>
.link {
  @apply font-semibold hover:text-gray-500  text-2xl md:text-base;
}
</style>
