import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleState {
  [key: string]: boolean;
}

interface SetInitialStatePayload {
  id: string;
  initialState: boolean;
}

const initialState: ToggleState = {};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<SetInitialStatePayload>) => {
      const { id, initialState } = action.payload;
      if (state[id] === undefined) {
        state[id] = initialState;
      }
    },
    open: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    close: (state, action: PayloadAction<string>) => {
      state[action.payload] = false;
    },
    toggle: (state, action: PayloadAction<string>) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { open, close, toggle, setInitialState } = toggleSlice.actions;
export default toggleSlice.reducer;
