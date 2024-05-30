import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DevicesType } from './types'

const initialState: DevicesType = {
    recintoId: '',
    deviceId: '',
}

const notificacionesSlice = createSlice({
    name: 'notificaciones',
    initialState,
    reducers: {
        setDevices(state, action: PayloadAction<DevicesType>) {
            state.recintoId = action.payload.recintoId
            state.deviceId = action.payload.deviceId
        },
    },
})
export const { setDevices } = notificacionesSlice.actions
export default notificacionesSlice.reducer
