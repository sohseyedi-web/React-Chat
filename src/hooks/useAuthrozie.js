import { useGetUser } from "./useUser";

export const useAuthtorize = () => {
  const { user, isLoading } = useGetUser();
  let isAuthenticated = false;

  if (user?._id) isAuthenticated = true;

  return { isAuthenticated, isLoading };
};
