import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHistoricoVisitas, VisitaHistorica } from './types';


const initialState:IHistoricoVisitas = {
  visitas: [],
};


const HistoricVisitasSlice = createSlice({
  name: 'HistoricVisitas',
  initialState,
  reducers: {
    setHistoricVisitas: (state, action: PayloadAction<VisitaHistorica>) => {
      state.visitas = action.payload.visitas;
    },
    addVisita: (state, action: PayloadAction<VisitaHistorica>) => {
      state.visitas.push(action.payload.visitas[0]);
    },
  },
  }
);

export const { setHistoricVisitas, addVisita } = HistoricVisitasSlice.actions;
export default HistoricVisitasSlice.reducer;


