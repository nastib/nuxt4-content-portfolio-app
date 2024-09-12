<template>
  <div class="container mx-auto max-w-4xl">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <TheHeader />
    <h1 class="text-[10px]">Default layout</h1>

    <main class="mt-6">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '~/store/layout';
useLayoutStore().setLayout('default');

const colorMode = useColorMode();
//console.log(colorMode.preference);
//colorMode.preference = 'light';

useSeoMeta({
  title: 'Public Page',
  description: 'Wilfrid Nas My amazing Portfolio',
  ogTitle: 'Public Page',
  ogDescription: '[og:Wilfrid Nas amazing Portfolio]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Public Page',
  twitterDescription: '[twitter:Wilfrid Nas amazing Portfolio]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
});

useHead({
  titleTemplate: '%s - Wilfrid Nas',
  meta: [{ name: 'description', content: 'Wilfrid Nas amazing Portfolio.' }],

  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
  bodyAttrs: {
    class: '',
  },
  script: [{ innerHTML: "console.log('Wilfrid Nas amazing Portfolio')" }],
  htmlAttrs: {
    lang: 'fr',
  },
});
</script>

<style>
body {
  font-family: 'Roboto';
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
