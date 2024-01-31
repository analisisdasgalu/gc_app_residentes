import { StyleSheet } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const TabStyles = StyleSheet.create({
	container: {
		marginTop: 0,
		backgroundColor: colors.blue,
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
	},
	selectedTab: {
		width: "50%",
		height: 40,
		backgroundColor: colors.blue,
	},
	selectedTabText: {
		color: colors.white,
		textAlign: "center",
		paddingTop: 10,
		fontWeight: "800",
	},
	button: {
		width: "50%",
		height: 40,
		borderBottomWidth: 2,
		borderBottomColor: colors.gray,
	},
	buttonText: {
		color: colors.darkGray,
		textAlign: "center",
		paddingTop: 10,
	},
});
