// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.NODE_ENV === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });


import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-application-backend-4ban.onrender.com/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

