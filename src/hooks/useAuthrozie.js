import { useGetUser } from "./useUser";

export const useAuthtorize = () => {
  const { user, isLoading } = useGetUser();
  let isAuthenticated = false;
  let isAuthorized = false;

  if (user) isAuthenticated = true;

  return { isAuthenticated, isAuthorized,isLoading,user };
};
