import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TVehicles, TVisita, TVisitas } from './types'
import { ICardProps } from '@gcMobile/components/Card/Card'

const initialState: TVisitas = {
    visitas: [],
    newVisistaQR: '',
    visita: {
        visita_id: '',
        nombre: '',
        desde: '',
        hasta: '',
        multiple_entrada: '',
        notificaciones: '',
        uniqueID: '',
        estatus_registro: '',
        tipo_ingreso: '',
        id_tipo_ingreso: '0',
        id_tipo_visita: '0',
    },
    vehicles: [],
}

const visitasSlice = createSlice({
    name: 'visitas',
    initialState,
    reducers: {
        setVisitas: (state, action: PayloadAction<ICardProps[]>) => {
            state.visitas = action.payload
        },
        setNewVisitaQR: (state, action: PayloadAction<string>) => {
            state.newVisistaQR = action.payload
        },
        setEditableVisita: (state, action: PayloadAction<TVisita>) => {
            state.visita = action.payload
        },
        clearEditableVisita: (state) => {
            state.visita = initialState.visita
        },
        setVehicles: (state, action: PayloadAction<TVehicles[]>) => {
            state.vehicles = action.payload
        },
        clearVehicles: (state) => {
            state.vehicles = []
        },
    },
})

export const { setVisitas, setNewVisitaQR, setEditableVisita, clearEditableVisita, setVehicles, clearVehicles } =
    visitasSlice.actions
export default visitasSlice.reducer
