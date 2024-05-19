import axios from "axios";

export const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL
      : // : "http://localhost:5000/api/v1/",
        process.env.NEXT_PUBLIC_API_URL,
});
