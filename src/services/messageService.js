import http from "./http";

export const sendMessage = ({ id, message }) => {
  return http
    .post(
      `/messages/send/${id}`,
      { message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};
export const getMessages = (id) => {
  return http.get(`/messages/${id}`).then((res) => res.data);
};
