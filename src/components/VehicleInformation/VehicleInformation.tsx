import React, { useEffect } from "react";
import { VehicleInformationProps, VehicleInformationState } from "./types";
import { View, Text, TextInput } from "react-native";
import {
	defaultContainer,
	headerContainer,
	inputStyles,
} from "./styles/default.theme";
import { Separator } from "../Separator/Separator";
import { HeaderActionButton } from "../HeaderActionButton/HeaderActionButton";
import { colors } from "@gcMobile/theme/default.styles";

export const VehicleInformation = (props: VehicleInformationProps) => {
	return (
		<>
			{Array(props.numberOfVehicles)
				.fill(0)
				.map((_, index) => (
					<View key={`container-${index}`}>
						{props.numberOfVehicles > 1 && (
							<View style={headerContainer}>
								<HeaderActionButton
									icon='times-circle'
									color={colors.red}
									onPress={() => props.removeVehicle(index)}
								/>
							</View>
						)}
						<View style={defaultContainer}>
							<TextInput
								style={inputStyles}
								onChangeText={(brand: string) =>
									props.handleOnChange(index, "brand", brand)
								}
								value={props.vehicleData[index]["brand"]}
								placeholder='Marca del vehículo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(model: string) =>
									props.handleOnChange(index, "model", model)
								}
								value={props.vehicleData[index]["model"]}
								placeholder='Modelo del vehículo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(year: string) =>
									props.handleOnChange(index, "year", year)
								}
								value={props.vehicleData[index]["year"]}
								placeholder='Año del vehículo'
								keyboardType='numeric'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(color: string) =>
									props.handleOnChange(index, "color", color)
								}
								value={props.vehicleData[index]["color"]}
								placeholder='Color del vehículo'
							/>
							<TextInput
								style={inputStyles}
								onChangeText={(plate: string) =>
									props.handleOnChange(index, "plates", plate)
								}
								value={props.vehicleData[index]["plate"]}
								placeholder='Matrícula del vehículo'
							/>
						</View>
						{index + 1 !== props.numberOfVehicles && <Separator />}
					</View>
				))}
		</>
	);
};

VehicleInformation.defaultProps = {
	saveInformation: () => {},
};
