import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUI } from './types'

const initialState: TUI = {
    isLoading: false,
    operationSuccess: false,
    menuOpen: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setOperationSuccess: (state, action: PayloadAction<boolean>) => {
            state.operationSuccess = action.payload
        },
        setMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.menuOpen = action.payload
        },
    },
})

export const { setLoading, setOperationSuccess, setMenuOpen } = uiSlice.actions
export default uiSlice.reducer
