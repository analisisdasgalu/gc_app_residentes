import React from "react";
import { VehicleInformationProps, VehicleInformationState } from "./types";
import { View, Text, TextInput } from "react-native";
import { defaultContainer, inputStyles } from "./styles/default.theme";
import { Separator } from "../Separator/Separator";

export const VehicleInformation = (props: VehicleInformationProps) => {
	const [vehicleData, setVehicleData] = React.useState<VehicleInformationState>(
		{
			brand: "",
			model: "",
			year: "",
			color: "",
			plate: "",
		}
	);

	return (
		<>
			{Array(props.numberOfVehicles)
				.fill(0)
				.map((_, index) => (
					<>
						<View style={defaultContainer}>
							<TextInput
								style={inputStyles}
								onChangeText={(brand: string) => console.log("brand", brand)}
								value={vehicleData["brand"]}
								placeholder='Marca del vehiculo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(model: string) => console.log("model", model)}
								value={vehicleData["model"]}
								placeholder='Modelo del vehiculo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(year: string) => console.log("year", year)}
								value={vehicleData["year"]}
								placeholder='Anio del vehiculo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(color: string) => console.log("color", color)}
								value={vehicleData["color"]}
								placeholder='Color del vehiculo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(plate: string) => console.log("plate", plate)}
								value={vehicleData["plate"]}
								placeholder='Matricula del vehiculo'
							/>
						</View>
						{index + 1 !== props.numberOfVehicles && <Separator />}
					</>
				))}
		</>
	);
};
