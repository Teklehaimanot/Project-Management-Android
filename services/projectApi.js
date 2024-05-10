import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config";

const BASE_URL = baseUrl;

console.log(BASE_URL);
export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        console.log(token);
        headers.set("Authorization", `${token}`);
      }
    },
  }),
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => `projects/get-projects`,
      providesTags: ["Project"],
    }),
  }),
});

console.log("proj", projectApi.getProjects);

export const { useGetProjectsQuery } = projectApi;
