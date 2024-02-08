import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "./types";

const initialState: UserData = {
	access_token: "",
	id_instalacion: "",
	email: "",
	name: "",
	id: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserData>) => {
			state.access_token = action.payload.access_token;
			state.id_instalacion = action.payload.id_instalacion;
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.id = action.payload.id;
		},
	},
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

// ...
