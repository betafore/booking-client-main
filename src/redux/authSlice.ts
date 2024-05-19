import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "./authAction";

// Define TypeScript types for state and actions
// interface UserInfo {
//   id: string;
//   name: string;
//   email: string;
//   // Add other relevant user fields
// }

interface AuthState {
  loading: boolean;
  userInfo: any | null;
  accessToken: string | null;
  error: string | null;
  success: boolean;
}

interface UserLoginPayload {
  data: {
    user: any;
  };
  accessToken: string;
}

const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

// Initialize accessToken from local storage
const accessToken = getAccessToken();

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  accessToken: accessToken ? accessToken : null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
