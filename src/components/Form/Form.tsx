import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { formStyles } from "./constants";
import { Icon } from "react-native-elements";
import Button from "@gcMobile/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@gcMobile/theme/default.styles";
import { logout } from "@gcMobile/screens/Login/constants";
import { useSelector } from "react-redux";
import { RootState } from "@gcMobile/store";
import RadioGroup from "@gcMobile/components/RadioGroup/";

export const TipoVisitasIcon: { [key: string]: React.ReactNode } = {
	Visita: <FontAwesome name='user' size={24} color={colors.darkGray} />,
	Provedor: <FontAwesome name='truck' size={24} color={colors.darkGray} />,
	["Servicio domestico"]: (
		<FontAwesome name='wrench' size={24} color={colors.darkGray} />
	),
};

export default function Form({ navigation }: any) {
	const { catalogVisitas } = useSelector(
		(state: RootState) => state.tipoVisitas
	);
	const [selectedType, setSelectedType] = useState<string>("");
	const [selectedAccessType, setSelectedAccessType] = useState("");
	const [selectedTypeNumber, setSelectedTypeNumber] = useState(0);

	const selectAccessType = (option: string) => {
		setSelectedAccessType(option);
	};
	const selectTypeNumber = (option: number) => {
		setSelectedTypeNumber(option);
	};
	const colorGray = colors.gray;
	const colorBlack = colors.black;

	return (
		<SafeAreaView style={formStyles.container}>
			<RadioGroup
				options={catalogVisitas.map((catalog) => ({
					id: catalog.id,
					label: catalog.tipo_visita,
					icon: TipoVisitasIcon[
						catalog.tipo_visita
					] as unknown as React.ReactNode,
				}))}
				handleChange={setSelectedType}
			/>
			{/** Tipo de servicios */}
			<View style={formStyles.nameContainer}>
				<Text style={formStyles.name}>Fernanda Madrigal</Text>
			</View>

			<View style={[formStyles.row, formStyles.schedule]}>
				<View style={formStyles.columnContainer}>
					<Text style={[formStyles.text2, { paddingVertical: 5 }]}>
						Desde el
					</Text>
					<Text style={[formStyles.text2, { paddingVertical: 5 }]}>
						Hasta el
					</Text>
				</View>
				<View style={formStyles.columnContainer}>
					<Text style={[formStyles.date, { paddingVertical: 5 }]}>
						30 de Diciembre
					</Text>
					<Text style={[formStyles.date, { paddingVertical: 5 }]}>
						30 de Diciembre
					</Text>
				</View>
				<View style={formStyles.columnContainer}>
					<Text style={[formStyles.text2, { paddingVertical: 5 }]}>a las</Text>
					<Text style={[formStyles.text2, { paddingVertical: 5 }]}>a las</Text>
				</View>
				<View style={formStyles.columnContainer}>
					<Text style={[formStyles.date, { paddingVertical: 5 }]}>
						9:00 a.m.
					</Text>
					<Text style={[formStyles.date, { paddingVertical: 5 }]}>
						9:00 a.m.
					</Text>
				</View>
				<View style={formStyles.columnContainer}>
					<Text style={{ paddingVertical: 5 }}>CST</Text>
					<Text style={{ paddingVertical: 5 }}>CST</Text>
				</View>
			</View>

			<View style={[formStyles.accessTypeContainer, formStyles.row]}>
				<View style={formStyles.columnContainer}>
					<Text style={[formStyles.text2, { paddingVertical: 40 }]}>
						Acceso
					</Text>
					<Text style={[formStyles.text2, { paddingTop: 28 }]}>Número</Text>
					<Text style={[formStyles.text2]}>Entradas</Text>
				</View>
				<View style={formStyles.columnContainer}>
					<TouchableOpacity
						onPress={() => selectAccessType("vehicle")}
						style={
							selectedAccessType == "vehicle"
								? [formStyles.radioButtonsContainer, ,]
								: formStyles.radioButtonsContainer2
						}>
						<View style={formStyles.descPosition}>
							<Icon
								name='directions-car'
								type='material'
								color={
									selectedAccessType === "vehicle" ? colorBlack : colorGray
								}
								size={30}
							/>
							<Text
								style={
									selectedAccessType === "vehicle"
										? [formStyles.text1]
										: formStyles.text2
								}>
								Veículo
							</Text>
						</View>
						<View style={formStyles.radioBtnPosition}>
							<View
								style={
									selectedAccessType == "vehicle"
										? [formStyles.radioButton, ,]
										: formStyles.radioButton2
								}>
								{selectedAccessType == "vehicle" && (
									<View style={formStyles.radioButtonSelected} />
								)}
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => selectTypeNumber(1)}
						style={
							selectedTypeNumber == 1
								? [formStyles.radioButtonsContainer, ,]
								: formStyles.radioButtonsContainer2
						}>
						<View style={formStyles.descPosition}>
							<Icon
								name='person'
								type='material'
								color={selectedTypeNumber == 1 ? colorBlack : colorGray}
								size={30}
							/>
							<Text
								style={
									selectedTypeNumber == 1
										? [formStyles.text1]
										: formStyles.text2
								}>
								Una vez
							</Text>
						</View>
						<View style={formStyles.radioBtnPosition}>
							<View
								style={
									selectedTypeNumber == 1
										? [formStyles.radioButton, ,]
										: formStyles.radioButton2
								}>
								{selectedTypeNumber == 1 && (
									<View style={formStyles.radioButtonSelected} />
								)}
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={formStyles.columnContainer}>
					<TouchableOpacity
						onPress={() => selectAccessType("pedestrian")}
						style={
							selectedAccessType == "pedestrian"
								? [formStyles.radioButtonsContainer, ,]
								: formStyles.radioButtonsContainer2
						}>
						<View style={formStyles.descPosition}>
							<Icon
								name='directions-run'
								type='material'
								color={
									selectedAccessType === "pedestrian" ? colorBlack : colorGray
								}
								size={30}
							/>
							<Text
								style={
									selectedAccessType === "pedestrian"
										? [formStyles.text1]
										: formStyles.text2
								}>
								Peatonal
							</Text>
						</View>
						<View style={formStyles.radioBtnPosition}>
							<View
								style={
									selectedAccessType == "pedestrian"
										? [formStyles.radioButton, ,]
										: formStyles.radioButton2
								}>
								{selectedAccessType == "pedestrian" && (
									<View style={formStyles.radioButtonSelected} />
								)}
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => selectTypeNumber(2)}
						style={
							selectedTypeNumber == 2
								? [formStyles.radioButtonsContainer, ,]
								: formStyles.radioButtonsContainer2
						}>
						<View style={formStyles.descPosition}>
							<Icon
								name='person-add'
								type='material'
								color={selectedTypeNumber == 2 ? colorBlack : colorGray}
								size={30}
							/>
							<Text
								style={
									selectedTypeNumber == 2
										? [formStyles.text1]
										: formStyles.text2
								}>
								Varias
							</Text>
						</View>
						<View style={formStyles.radioBtnPosition}>
							<View
								style={
									selectedTypeNumber == 2
										? [formStyles.radioButton]
										: formStyles.radioButton2
								}>
								{selectedTypeNumber == 2 && (
									<View style={formStyles.radioButtonSelected} />
								)}
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ display: "flex", flexDirection: "row" }}>
				<Button
					styles={{
						backgroundColor: colors.red,
						width: 150,
						height: 46.5,
						borderRadius: 2,
						margin: "auto",
						marginTop: 100,
						marginLeft: 35,
						filter: colors.dropShadow,
					}}
					textButton='Cancelar'
					onPress={() => {
						navigation.navigate("Visits");
					}}
				/>
				<Button
					styles={{
						backgroundColor: colors.green,
						width: 150,
						height: 46.5,
						borderRadius: 2,
						margin: "auto",
						marginTop: 100,
						marginLeft: 35,
						filter: colors.dropShadow,
					}}
					textButton='Aceptar'
					onPress={() => {
						// navigation.navigate("Visit");
					}}
				/>
			</View>
		</SafeAreaView>
	);
}
