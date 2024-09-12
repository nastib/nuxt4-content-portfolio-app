<template>
  <div>
    <nav class="font-mono">
      <ul class="flex flex-col md:flex-row md:space-x-4">
        <li v-for="menu in menuList" :key="menu.label">
          <NuxtLink :to="menu.path" class="link" exact-active-class="text-gray-900 dark:text-gray-300  underline">{{
            menu.label
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const menuList = ref([
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  {
    path: '/about',
    label: 'About',
  },
]);
</script>

<style></style>
