import type { CustomError, ExtendedPostgrestError } from '@/types/Error'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
  const isCustomError = ref(false)

  const setError = ({
    error,
    customCode = 500,
  }: {
    error: string | ExtendedPostgrestError | Error
    customCode?: number
  }) => {
    if (typeof error === 'string') isCustomError.value = true

    if (typeof error === 'string' || error instanceof Error) {
      activeError.value = typeof error === 'string' ? Error(error) : error
      activeError.value.customCode = customCode
      return
    }

    activeError.value = error
    activeError.value.statusCode = customCode
  }

  return {
    activeError,
    setError,
    isCustomError,
  }
})
