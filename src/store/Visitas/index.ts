import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TVisitas } from "./types";
import { ICardProps } from "@gcMobile/components/Card/Card";

const initialState: TVisitas = {
	visitas: [],
	newVisistaQR: "",
};

const visitasSlice = createSlice({
	name: "visitas",
	initialState,
	reducers: {
		setVisitas: (state, action: PayloadAction<ICardProps[]>) => {
			state.visitas = action.payload;
		},
		setNewVisitaQR: (state, action: PayloadAction<string>) => {
			state.newVisistaQR = action.payload;
		},
	},
});

export const { setVisitas, setNewVisitaQR } = visitasSlice.actions;
export default visitasSlice.reducer;
