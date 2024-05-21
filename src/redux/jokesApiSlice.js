import { apiSlice } from "./api/apiSlice";
import {RANDOMJOKES_URL} from "./constants";

export const jokesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJokes: builder.query({
            query:() => ({
                url: `${RANDOMJOKES_URL}/joke/random`,
            }),
        }),
    }),
});

export const { useGetJokesQuery } = jokesApiSlice;