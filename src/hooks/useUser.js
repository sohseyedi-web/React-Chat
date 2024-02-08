import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signupUser, signinUser } from "../services/authService";

export const useSingUpUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createUser, isPending: isCreating } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("ثبت نام موفق بود");
      queryClient.invalidateQueries({ queryKey: ["user-submit"] });
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  return { createUser, isCreating };
};
export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: loginUser, isPending: isLoading } = useMutation({
    mutationFn: signinUser,
    onSuccess: () => {
      toast.success("خوش اومدی");
      queryClient.invalidateQueries({ queryKey: ["user-submit"] });
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  return { loginUser, isLoading };
};
