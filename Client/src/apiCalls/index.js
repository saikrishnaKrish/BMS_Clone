import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  headers: {
    cridentials:'include',
    'Content-Type':"application/json",
    Authorization: "Bearer " + token,
  },
});
