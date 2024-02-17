import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  signupUser,
  signinUser,
  getUserProfile,
  getAllUsers,
  logout,
} from "../services/authService";
import { SignUpError } from "../utils/types";

export const useSingUpUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createUser, isPending: isCreating } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("ثبت نام موفق بود");
      queryClient.invalidateQueries({ queryKey: ["user-submit"] });
    },
    onError: (err: SignUpError) => {
      toast.error(err?.response?.data.error);
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
    onError: (err: SignUpError) => {
      toast.error(err?.response?.data.error);
    },
  });

  return { loginUser, isLoading };
};

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-submit"],
    queryFn: getUserProfile,
    retry: false,
  });

  const { user } = data || {};

  return { isLoading, user };
};

export const useGetAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getAllUsers,
    retry: false,
  });

  return { isLoading, data };
};

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: logOut, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
    onError: (err: SignUpError) => {
      toast.error(err?.response?.data?.error);
    },
  });

  return { logOut, isPending };
};
