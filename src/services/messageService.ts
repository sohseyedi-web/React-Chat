import { DataMessageTypes } from "../utils/types";
import http from "./http";



export const sendMessage = ({ _id, message }: DataMessageTypes) => {
  return http
    .post(
      `/messages/send/${_id}`,
      { message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};
export const getMessages = (id: string) => {
  return http.get(`/messages/${id}`).then((res) => res.data);
};
