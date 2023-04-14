import { API } from "./API";

interface idResponse {
  id: string;
  tasks: any[];
}
interface authResponse {
  token: string;
}
export const userSlice = API.injectEndpoints({
  endpoints: bilder => ({
    login: bilder.mutation({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: authResponse) => {
        return response.token;
      },
    }),
    registration: bilder.mutation({
      query: credentials => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: authResponse) => {
        return response.token;
      },
    }),
    getId: bilder.mutation({
      query: token => ({
        url: "/auth/token",
        method: "POST",
        body: token,
      }),
      transformResponse: (response: idResponse) => {
        return response.id;
      },
      invalidatesTags: ["User"],
    }),
    getUserData: bilder.query({
      query: userId => `/user/${userId}`,
      providesTags: result => ["User"],
    }),
    removeUser: bilder.mutation({
      query: userId => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetIdMutation,
  useGetUserDataQuery,
  useRemoveUserMutation,
  useLoginMutation,
  useRegistrationMutation,
} = userSlice;
