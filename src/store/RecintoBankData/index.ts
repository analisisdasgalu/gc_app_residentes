import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BankData } from './types'

const initialState: BankData = {
    banco: '',
    numero_cuenta: '',
    clabe: '',
}

const RecintoBankDataSlice = createSlice({
    name: 'RecintoBankData',
    initialState,
    reducers: {
        setBankData(state, action: PayloadAction<BankData>) {
            state.banco = action.payload.banco
            state.numero_cuenta = action.payload.numero_cuenta
            state.clabe = action.payload.clabe
        },
    },
})

export const { setBankData } = RecintoBankDataSlice.actions
export default RecintoBankDataSlice.reducer
