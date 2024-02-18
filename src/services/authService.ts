import { SignUser } from "../utils/types";
import http from "./http";

export const signinUser = (data : SignUser) => {
  return http.post("/auth/login", data).then((res) => res.data);
};
export const signupUser = (data : SignUser) => {
  return http.post("/auth/signup", data).then((res) => res.data);
};
export const logout = () => {
  return http.post("/auth/logout").then((res) => res.data);
};

export const getUserProfile = () => {
  return http.get("/users/profile").then(({ data }) => data.data);
};
export const getAllUsers = () => {
  return http.get("/users/all").then((res) => res.data);
};
