import { API } from "./API";
interface task {
  id: string;
  color: string;
  content: string;
  date: string;
}
interface response {
  tasks: task[];
}

export const todoSlice = API.injectEndpoints({
  endpoints: build => ({
    createTodo: build.mutation({
      query: data => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),

    getAllTodo: build.query({
      query: userId => `/tasks/${userId}`,
      transformResponse: (response: response) => {
        return response.tasks;
      },
      providesTags: result => ["Todo"],
    }),

    updateTodo: build.mutation({
      query: data => ({
        url: "/tasks",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetAllTodoQuery,
  useUpdateTodoMutation,
} = todoSlice;
