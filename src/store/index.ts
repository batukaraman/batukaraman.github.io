import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import serviceSlice from "./serviceSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    service: serviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
