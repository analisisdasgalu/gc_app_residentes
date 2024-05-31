import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHouseManagement } from '@gcMobile/screens/HouseScreen/conts'
import { HousesSlice } from './types'

const initialState: HousesSlice = {
    houses: [],
    recintoId: 0,
    currentResidence: '',
    currentHouseId: 0,
    currentHouseInstalacion: '',
    currentHouseManzana: '',
}

const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        setHouse: (state, action: PayloadAction<IHouseManagement[]>) => {
            state.houses = action.payload
        },
        setCurrentHouseInfo: (
            state,
            action: PayloadAction<{
                currentHouseId: number
                currentResidence: string
                currentHouseInstalacion: string
                currentHouseManzana: string
            }>
        ) => {
            state.currentResidence = action.payload.currentResidence
            state.currentHouseId = action.payload.currentHouseId
            state.currentHouseInstalacion = action.payload.currentHouseInstalacion
            state.currentHouseManzana = action.payload.currentHouseManzana
        },
        setRecintoId: (state, action: PayloadAction<number>) => {
            state.recintoId = action.payload
        },
    },
})

export const { setHouse, setCurrentHouseInfo } = houseSlice.actions
export default houseSlice.reducer
