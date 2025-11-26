import { useCustomMutation } from "@/hooks";
import { MutationCallbacks } from "@/types";

interface RequestDemoPayload {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export const useRequestDemo = () => {
  const mutation = useCustomMutation();

  return {
    sendRequest: (
      payload: RequestDemoPayload,
      callbacks: MutationCallbacks<void>,
    ) => {
      return mutation.mutate(
        {
          url: "/request-demo",
          method: "POST",
          data: payload,
        },
        {
          onSuccess: () => {
            callbacks?.onSuccess?.();
          },
          onError: (error) => {
            callbacks?.onError?.(error);
          },
        },
      );
    },
    isLoading: mutation.isPending,
  };
};
