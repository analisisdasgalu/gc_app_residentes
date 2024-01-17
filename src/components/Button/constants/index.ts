import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../../theme/default.styles";
const justifyContentCenter: ViewStyle = {
	justifyContent: "center",
};
const alignItemsCenter: ViewStyle = {
	alignItems: "center",
};

export const buttonComponentStyles = StyleSheet.create({
	button: {
		backgroundColor: colors.blue,
		width: 325,
		height: 46.5,
		borderRadius: 2,
		filter: colors.dropShadow,
	},
	buttonText: {
		color: colors.white,
	},
	alignItemsCenter: alignItemsCenter,
	justifyContentCenter: justifyContentCenter,
});
