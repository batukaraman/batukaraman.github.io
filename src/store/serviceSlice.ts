import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
  serviceName: string | null;
  packageName: string | null;
}

const initialState: ServiceState = {
  serviceName: null,
  packageName: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService(
      state,
      action: PayloadAction<{ serviceName: string; packageName: string }>
    ) {
      state.serviceName = action.payload.serviceName;
      state.packageName = action.payload.packageName;
    },
    clearService(state) {
      state.serviceName = null;
      state.packageName = null;
    },
  },
});

export const { setService, clearService } = serviceSlice.actions;
export default serviceSlice.reducer;
