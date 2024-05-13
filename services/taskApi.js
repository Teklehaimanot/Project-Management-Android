import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "@env";

const BASE_URL = API_KEY;
console.log(BASE_URL);
export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
    },
  }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks/get-tasks`,
      providesTags: ["Task"],
    }),
    createTask: builder.mutation({
      query: (newTaskData) => ({
        url: `tasks/create-task`,
        method: "POST",
        body: newTaskData,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: (updatedTaskData) => ({
        url: `tasks/update-task`,
        method: "PUT",
        body: updatedTaskData,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `tasks/delete-task/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
