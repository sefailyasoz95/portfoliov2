import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateTypes = {
	message: string;
	error: boolean;
	success: boolean;
	isAuthenticated: boolean;
	token: string | null;
};

export const initialState: InitialStateTypes = {
	message: "",
	error: false,
	success: false,
	token: null,
	isAuthenticated: false,
};

export const reducer = createSlice({
	name: "global",
	initialState,
	reducers: {
		clearStates: (state) => {
			state.message = "";
			state.error = false;
			state.success = false;
		},
	},
	extraReducers: (builder) => {},
});

export const { clearStates } = reducer.actions;

export default reducer.reducer;
