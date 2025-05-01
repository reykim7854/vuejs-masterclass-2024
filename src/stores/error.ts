export const userErrorStore = defineStore('error-store', () => {
  const activeError = ref(false)

  const setError = () => {
    activeError.value = true
  }

  return {
    activeError,
    setError
  }
})
