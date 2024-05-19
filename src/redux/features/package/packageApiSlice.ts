import { api } from "../api/apiSlice";

const packageSliceTag = api.enhanceEndpoints({ addTagTypes: ["package"] });

const packageApiSlice = packageSliceTag.injectEndpoints({
  endpoints: (builder: any) => ({
    getPackage: builder.query({
      query: () => `/package`,
      providesTags: ["package"],
    }),
    getSinglePackage: builder.query({
      query: (id: string) => `/package/${id}`,
      providesTags: ["package"],
    }),
    addPackage: builder.mutation({
      query: (data: any) => ({
        url: `package`,
        method: "POST",
        body: {
          ...data,
          limit: Number(data.limit),
          price: Number(data.price),
        },
      }),
      invalidatesTags: ["package"],
    }),
  }),

  overrideExisting: true,
});

export const { useGetPackageQuery, useGetSinglePackageQuery, useAddPackageMutation } = packageApiSlice;
