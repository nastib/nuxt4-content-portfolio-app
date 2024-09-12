import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout',() => {
  const layout = ref();

  function setLayout (newValue: string) {
        return layout.value = newValue
  }

  return {
    layout,
    setLayout
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
