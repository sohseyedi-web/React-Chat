import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signupUser } from "../services/authService";

export const useSingUpUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createUser, isPending: isCreating } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("ثبت نام موفق بود");
      queryClient.invalidateQueries({ queryKey: ["user-submit"] });
    },
    onError: (error) => {
        console.log(error)
      toast.error(error.message);
    },
  });

  return { createUser, isCreating };
};
