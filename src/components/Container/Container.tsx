import React from "react";
import { View, Text } from "react-native";
import {
	defaultColumn,
	defaultContainer,
	defaultRow,
} from "./styles/default.theme";
import { ContainerProps } from "./types";
import { colors, fonts } from "@gcMobile/theme/default.styles";

export const Container = (props: ContainerProps) => {
	return (
		<View style={defaultContainer}>
			<View style={defaultRow}>
				<Text
					style={{
						fontSize: fonts.text_subtitle,
						color: colors.text_subtitle_color,
					}}>
					{props.title}
				</Text>
				{props.actionButton}
			</View>
			<View style={defaultColumn}>{props.children}</View>
		</View>
	);
};

Container.defaultProps = {
	actionButton: null,
};
