import { colors } from "@gcMobile/theme/default.styles";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Modal, View } from "react-native";

type ModalHourProps = {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	handleHourChange: (hour: string) => void;
};

export const ModalHour = ({
	showModal,
	setShowModal,
	handleHourChange,
}: ModalHourProps) => {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={showModal}
			style={{ width: "50%" }}>
			<View style={{ flex: 1, marginTop: "40%", alignItems: "center" }}>
				<View
					style={{
						flex: 1,
						width: "90%",
						height: "30%",
						backgroundColor: colors.white,
					}}>
					<Picker
						selectedValue={"java"}
						onValueChange={(itemValue, itemIndex) => {
							handleHourChange(itemValue);
							setShowModal(false);
						}}>
						{new Array(24).fill(0).map((_, index) => (
							<Picker.Item
								key={index}
								label={`${index}:00`}
								value={`${index}:00`}
							/>
						))}
					</Picker>
				</View>
			</View>
		</Modal>
	);
};
