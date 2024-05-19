import { api } from "../api/apiSlice";

const guestSliceTag = api.enhanceEndpoints({
  addTagTypes: ["Guest"],
});

const guestApiSlice = guestSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getGuest: builder.query({
      query: () => `guest`,
      providesTags: ["Guest"],
    }),
    addGuest: builder.mutation({
      query: (data: any) => ({
        url: `guest`,
        method: "POST",
        body: {
          name: data.name,
        },
      }),
      invalidatesTags: ["Guest"],
    }),
  }),

  overrideExisting: true,
});

export const { useGetGuestQuery, useAddGuestMutation } = guestApiSlice;
