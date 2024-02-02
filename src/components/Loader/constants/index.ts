import { StyleSheet } from "react-native";
import { colors } from "../../../theme/default.styles";

export const loaderStyles = StyleSheet.create({
	loaderContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	loader: {
		width: 48,
		height: 48,
		borderWidth: 5,
		borderColor: "#FFF",
		borderBottomColor: "transparent",
		borderRadius: 24,
		boxSizing: "border-box",
	},
	background: {
		backgroundColor: colors.rgbOpacityGray,
		zIndex: 1,
		...StyleSheet.absoluteFillObject,
	},
});
