export type VehicleInformationProps = {
	numberOfVehicles: number;
	saveInformation: (_d: { [key: string]: string }) => void;
};

export type VehicleInformationState = {
	[key: string]: string;
};
