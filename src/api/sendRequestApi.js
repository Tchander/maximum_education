// Отправка запроса на api
// import axios from "axios";
// import { REQUEST_URL } from "@/const";
//
// export const sendRequest = async (data) =>
//   await axios.post(REQUEST_URL, data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

export const sendRequest = () => {
  return Math.random() < 0.5;
};
