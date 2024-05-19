import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define TypeScript types for state and actions
// interface UserInfo {
//   id: string;
//   name: string;
//   email: string;
//   // Add other relevant user fields
// }

interface Booking {
  user_id?: string;
  package_id: string;
  sub_package?: string;
  start_point: string;
  end_point: string;
  date: string;
  adult_guest: number;
  child_guest: number;
  infant_guest: number;
  totalAmount: number;
}

const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

const initialState: Booking = {
  user_id: "",
  package_id: "",
  sub_package: "",
  start_point: "",
  end_point: "",
  date: "",
  adult_guest: 0,
  child_guest: 0,
  infant_guest: 0,
  totalAmount: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    insertBooking: (state, { payload }) => {
      console.log(payload);
      state = payload;
    },
  },
});
export const { insertBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
