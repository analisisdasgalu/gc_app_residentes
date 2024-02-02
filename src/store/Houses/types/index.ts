import { IHouseManagement } from "@gcMobile/screens/HouseScreen/conts";

export type HousesSlice = {
	houses: IHouseManagement[];
	currentResidence: string;
	currentHouseId: number;
	currentHouseInstalacion: string;
	currentHouseManzana: string;
};
