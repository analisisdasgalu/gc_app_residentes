import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DevicesType } from './types'

const initialState: DevicesType = {
    recintoId: '',
    deviceId: '',
    badgeCount: 0,
}

const notificacionesSlice = createSlice({
    name: 'notificaciones',
    initialState,
    reducers: {
        setDevices(state, action: PayloadAction<DevicesType>) {
            state.recintoId = action.payload.recintoId
            state.deviceId = action.payload.deviceId
        },
        addBadgeCount(state) {
            state.badgeCount += 1
        },
        clearBadgeCount(state) {
            state.badgeCount = 0
        },
    },
})
export const { setDevices, addBadgeCount, clearBadgeCount } = notificacionesSlice.actions
export default notificacionesSlice.reducer
