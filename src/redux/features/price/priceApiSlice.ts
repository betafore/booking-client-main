import { api } from "../api/apiSlice";

const priceSliceTag = api.enhanceEndpoints({
  addTagTypes: ["Price"],
});

const priceApiSlice = priceSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getPrice: builder.query({
      query: () => `price`,
      providesTags: ["Price"],
    }),
    getSingleAdultPrice: builder.query({
      query: (arg: {
        package_id: string;
        start_point_id: string;
        end_point_id: string;
        guest_id: string;
      }) =>
        `price/adult-guest-price?package_id=${arg.package_id}&start_point_id=${arg.start_point_id}&end_point_id=${arg.end_point_id}&guest_id=${arg.guest_id}`,
      providesTags: ["Price"],
    }),
    getSingleChildPrice: builder.query({
      query: (arg: {
        package_id: string;
        start_point_id: string;
        end_point_id: string;
        guest_id: string;
      }) =>
        `price/child-guest-price?package_id=${arg.package_id}&start_point_id=${arg.start_point_id}&end_point_id=${arg.end_point_id}&guest_id=${arg.guest_id}`,
      providesTags: ["Price"],
    }),
    addPrice: builder.mutation({
      query: (data: any) => ({
        url: `price`,
        method: "POST",
        body: {
          ...data,
          price: Number(data.price),
        },
      }),
      invalidatesTags: ["Price"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetPriceQuery,
  useAddPriceMutation,
  useGetSingleAdultPriceQuery,
  useGetSingleChildPriceQuery,
} = priceApiSlice;
