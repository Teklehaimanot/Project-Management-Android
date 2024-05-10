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
    createProject: builder.mutation({
      query: (newProjectData) => ({
        url: `projects/create-project`,
        method: "POST",
        body: newProjectData,
      }),
      invalidatesTags: ["Project"],
    }),
    updateProject: builder.mutation({
      query: (updatedProjectData) => ({
        url: `projects/update-project`,
        method: "PUT",
        body: updatedProjectData,
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useUpdateProjectMutation,
  useCreateProjectMutation,
} = projectApi;
