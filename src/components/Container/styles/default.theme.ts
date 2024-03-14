import { colors } from "@gcMobile/theme/default.styles";
import { ViewStyle } from "react-native";

export const defaultContainer: ViewStyle = {
	flex: 1,
	width: "100%",
	height: "100%",
	justifyContent: "center",
	padding: "5%",
	backgroundColor: colors.white,
	margin: "5%",
};

export const defaultRow: ViewStyle = {
	flex: 1,
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
	maxWidth: "100%",
	minWidth: "10%",
	marginBottom: "15%",
};

export const defaultColumn: ViewStyle = {
	flex: 1,
	flexDirection: "column",
	justifyContent: "space-between",
	width: "100%",
	maxWidth: "100%",
	minWidth: "10%",
	marginBottom: "15%",
};
