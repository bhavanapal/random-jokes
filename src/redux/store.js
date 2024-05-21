import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice} from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    
    middleware:(getDefaultMidddleware) => 
    getDefaultMidddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export default store;