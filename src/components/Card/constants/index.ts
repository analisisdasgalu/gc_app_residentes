import { StyleSheet, Dimensions } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const cardStyles = StyleSheet.create({
	padding: {
		padding: "2%",
	},
	container: {
		height: 100,
		minHeight: 100,
		backgroundColor: colors.lightGray,
		borderRadius: 10,
		width: "100%",
		margin: "auto",
		shadowColor: colors.black,
		shadowOffset: {
			width: 3,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
		elevation: 5,
		marginBottom: "5%",
		padding: "2%",
	},
	row: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
	},
	data: {
		marginLeft: "4%",
	},
	typeContainer: {
		borderRightWidth: 1,
		width: "15%",
		alignItems: "center",
	},
	textType: {
		fontWeight: "bold",
		color: colors.gray,
	},
	dataText: {
		flex: 1,
		flexDirection: "row",
	},
	descriptionText: {
		color: colors.gray,
		padding: "1%",
		fontSize: 11,
	},
	typeIcon: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	column: {
		flexDirection: "column",
	},
});
