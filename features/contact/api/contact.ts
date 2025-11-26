import { useCustomMutation } from "@/hooks";
import { MutationCallbacks } from "@/types";

interface SendMessagePayload {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export const useContact = () => {
  const mutation = useCustomMutation();

  return {
    sendMessage: (
      payload: SendMessagePayload,
      callbacks: MutationCallbacks<void>,
    ) => {
      return mutation.mutate(
        {
          url: "/contact-us",
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
