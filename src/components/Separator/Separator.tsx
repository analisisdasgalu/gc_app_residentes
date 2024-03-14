import React from "react";
import { View, Text } from "react-native";
import {
	SeparatorLineStyles,
	separatorBadgeStyles,
	separatorStyles,
} from "./styles/default.theme";

export const Separator = () => {
	return (
		<View style={separatorStyles}>
			<View style={separatorBadgeStyles}>
				<Text>&nbsp;</Text>
			</View>
			<View style={SeparatorLineStyles}></View>
		</View>
	);
};
