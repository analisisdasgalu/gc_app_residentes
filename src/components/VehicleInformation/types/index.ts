export type VehicleInformationProps = {
	numberOfVehicles: number;
	vehicleData: VehicleInformationState[];
	saveInformation?: (_d: { [key: string]: string }) => void;
	removeVehicle: (index: number) => void;
	handleOnChange: (index: number, key: string, value: string) => void;
};

export type VehicleInformationState = {
	[key: string]: string;
};
