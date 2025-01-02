import { useMutation } from "@tanstack/react-query"
import { post } from "@/services/helper"

export function useLogin({ onSuccess, onError }) {
  const proceedLogin = (params) =>
    post("employee/memberLoginUsingPassword", params, {})

  function handleSuccess(response) {
    const { success } = response
    if (success) {
      onSuccess()
    } else {
      onError()
    }
  }

  function handleError() {
    onError()
  }

  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: proceedLogin,
    onSuccess: handleSuccess,
    onError: handleError,
  })
}
