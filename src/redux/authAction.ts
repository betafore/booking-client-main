import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Define TypeScript types for input and output
interface LoginInput {
  email: string;
  password: string;
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
  // Add other relevant user fields
}

interface LoginResponse {
  data: {
    user: any;
  };
  accessToken: string;
}

// const backendURL = ;
const backendURL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL;
      // "http://localhost:5000/api/v1";

export const userLogin = createAsyncThunk<LoginResponse, LoginInput>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/auth/login`, // Adjusted URL to match `backendURL`
        { email, password },
        config
      );

      // Store user's token in local storage
      localStorage.setItem("accessToken", data?.data?.accessToken);
      return data;
    } catch (error: any) {
      // Return custom error message from API if any
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
