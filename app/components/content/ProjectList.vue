<template>
  <div class="not-prose">
    <section v-if="status === 'pending'">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repository in repos" :key="repository.id" class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
          <a :href="repository.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repository.name }}</div>
              <div>{{ repository.stargazers_count }} ★</div>
            </div>
            <p class="text-sm">
              {{ repository.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
// const res = await $fetch('https://api.github.com/users/piotr-jura-udemy/repos', {
//   method: 'GET',
// });

const { error, status, data } = await useFetch('https://api.github.com/users/nastib/repos');

const repos = computed(() => {
  return (data.value as any).filter((repo: any) => repo.description).sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
});
</script>

<style></style>
