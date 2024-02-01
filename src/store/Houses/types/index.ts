import { IHouseManagement } from "@gcMobile/screens/HouseScreen/conts";

export type HousesSlice = {
	houses: IHouseManagement[];
	currentHouseId: number;
	currentHouseInstalacion: string;
	currentHouseManzana: string;
};
