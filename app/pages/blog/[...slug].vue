<template>
  <article
    id="slug"
    class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found.</p>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-6 md:col-span-4': doc.body?.toc, 'col-span-6': !doc.body?.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div class="hidden md:col-span-2 md:block not-prose" v-if="doc.body?.toc?.links.length">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of Contents</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
//import TocLinks from '~/components/content/TocLinks.vue';
const activeId = ref<string>();

let elements: NodeListOf<Element>;

function callback(entries: any) {
  for (const entry of entries) {
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
    if (entry.isIntersecting) {
      activeId.value = entry.target.id;
      //console.log(entry.target.textContent);
      entry.break;
    }
  }
}

onMounted(() => {
  // Intersection Observer API
  // https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
  const observer = new IntersectionObserver(callback, {
    root: document.querySelector('#scrollArea'), //or null
    rootMargin: '0px',
    threshold: 1.0,
  });

  //setTimeout(() => {
  elements = document.querySelectorAll('h2, h3');

  for (const element of elements) {
    observer.observe(element);
  }
  //}, 100);

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
