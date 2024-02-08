import http from "./http";

export const signinUser = (data) => {
  return http.post("/auth/login", data).then((res) => res.data);
};
export const signupUser = (data) => {
  return http.post("/auth/signup", data).then((res) => res.data);
};
export const logout = () => {
  return http.post("/auth/logout").then((res) => res.data);
};
