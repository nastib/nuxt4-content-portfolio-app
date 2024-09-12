<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{
          'ml-4': level,
          'text-green-600 dark:text-green-400 border-l-4 pl-1 border-green-600 dark:border-green-400': activeId === link.id,
        }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks :links="link.children" :level="level + 1" :active-id="activeId" />
    </li>
  </ul>
</template>

<script setup lang="js">
const route = useRoute();
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: undefined,
  }
});
</script>
