import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "@env";

const BASE_URL = API_KEY;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users/get-users`,
      providesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (newUserData) => ({
        url: `users/create-user`,
        method: "POST",
        body: newUserData,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (updatedUserData) => ({
        url: `users/update-user`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `user/delete-user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
