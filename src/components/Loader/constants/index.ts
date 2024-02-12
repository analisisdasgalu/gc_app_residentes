import { StyleSheet } from "react-native";
import { colors } from "../../../theme/default.styles";

export const loaderStyles = StyleSheet.create({
	loaderContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	loaderCard: {
		flex: 0.2,
		width: "50%",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: "rgba(128, 128, 128, 0.2)",
	},
});
