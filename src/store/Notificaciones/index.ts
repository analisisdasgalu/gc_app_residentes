import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AttachmentsTypes, DevicesType, NotificacionesAvisos } from './types'

const initialState: DevicesType = {
    recintoId: '',
    deviceId: '',
    badgeCount: 0,
    avisos: [],
    attachments: [],
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
        setAvisos(state, action: PayloadAction<NotificacionesAvisos[]>) {
            state.avisos = action.payload
        },
        setAttachments(state, action: PayloadAction<AttachmentsTypes[]>) {
            state.attachments = action.payload
        },
    },
})
export const { setDevices, addBadgeCount, clearBadgeCount, setAvisos, setAttachments } = notificacionesSlice.actions
export default notificacionesSlice.reducer
