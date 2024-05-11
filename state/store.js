import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./auth/authSlice";
import { projectApi, userApi } from "../services";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(projectApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
export default store;
