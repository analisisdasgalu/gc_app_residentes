import { colors } from "@gcMobile/theme/default.styles";
import { ViewStyle } from "react-native";

export const separatorStyles: ViewStyle = {
	flex: 1,
	flexDirection: "row",
	width: "100%",
	marginTop: "5%",
	marginBottom: "5%",
};

export const separatorBadgeStyles: ViewStyle = {
	width: "20%",
	height: 5,
	borderBottomColor: colors.neutral_color,
	borderBottomWidth: 1,
	borderTopEndRadius: 50,
	backgroundColor: colors.neutral_color,
};

export const SeparatorLineStyles: ViewStyle = {
	flex: 1,
	width: "100%",
	borderBottomColor: colors.neutral_color,
	borderBottomWidth: 1,
	height: 5,
};
