import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUI } from "./types";

const initialState: TUI = {
	isLoading: false,
	operationSuccess: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setOperationSuccess: (state, action: PayloadAction<boolean>) => {
			state.operationSuccess = action.payload;
		},
	},
});

export const { setLoading, setOperationSuccess } = uiSlice.actions;
export default uiSlice.reducer;
