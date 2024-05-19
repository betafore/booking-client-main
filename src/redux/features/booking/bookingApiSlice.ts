import { api } from "../api/apiSlice";

const bookingSliceTag = api.enhanceEndpoints({
  addTagTypes: ["Booking"],
});

const bookingApiSlice = bookingSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getBooking: builder.query({
      query: (arg: {order_number: string}) => `booking?order_number=${arg.order_number}`,
      providesTags: ["Booking"],
    }),
    getAllBookingOfAnIndividualDay: builder.query({
      query: (arg: {date: string, package_id: string, Sub_Package_id: string}) => `booking/all-count?date=${arg.date}&package_id=${arg.package_id}&Sub_Package_id=${arg.Sub_Package_id}`,
      providesTags: ["Booking"],
      invalidatesTags: (toggleDate: boolean) => [{type: "Booking", toggleDate}],
    }),
    addBooking: builder.mutation({
      query: (data: any) => ({
        url: `booking`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),

  overrideExisting: true,
});

export const { useGetBookingQuery, useGetAllBookingOfAnIndividualDayQuery, useAddBookingMutation } = bookingApiSlice;
