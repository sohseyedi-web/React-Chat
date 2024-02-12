import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getMessages, sendMessage } from "../services/messageService";

export const useGetMessageById = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["messages", id],
    queryFn: () => getMessages(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

  return { data, isLoading };
};

export const useSendMessageUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: sendMessages, isPending: isUpdating } = useMutation({
    mutationFn: sendMessage,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.error);
    },
  });

  return { isUpdating, sendMessages };
};
