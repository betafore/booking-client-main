import { api } from "../api/apiSlice";
// import { IStartLocation } from "./location.type";

const locationSliceTag = api.enhanceEndpoints({
  addTagTypes: ["StartLocation", "EndLocation", "Location"],
});

const locationApiSlice = locationSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getStartLocation: builder.query({
      query: () => `location/list-start-locations`,
      providesTags: ["StartLocation"],
    }),
    addStartLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/create-start-location`,
        method: "POST",
        body: {
          name: data.name,
          child_locations: data.child_locations,
        },
      }),
      invalidatesTags: ["StartLocation"],
    }),
    getEndLocation: builder.query({
      query: () => `/location/list-end-locations`,
      providesTags: ["EndLocation"],
    }),
    addEndLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/create-end-location`,
        method: "POST",
        body: {
          name: data.name,
          child_locations: data.child_locations,
        },
      }),
      invalidatesTags: ["EndLocation"],
    }),
    getPickupLocation: builder.query({
      query: () => `/location/list-of-locations`,
      providesTags: ["Location"],
    }),
    addPickupLocation: builder.mutation({
      query: (data: any) => ({
        url: `location/create-location`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Location"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetStartLocationQuery,
  useAddStartLocationMutation,
  useGetEndLocationQuery,
  useAddEndLocationMutation,
  useGetPickupLocationQuery,
  useAddPickupLocationMutation,
} = locationApiSlice;
