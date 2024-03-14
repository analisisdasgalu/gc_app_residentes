import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { headerActionStyles } from "./styles/default.styles";
import { HeaderActionButtonProps } from "./types";
import { colors, fonts } from "@gcMobile/theme/default.styles";

export const HeaderActionButton = (props: HeaderActionButtonProps) => {
	return (
		<TouchableOpacity style={headerActionStyles} onPress={props.onPress}>
			<View>
				<FontAwesome5
					name={props.icon}
					size={fonts.text_subtitle}
					color={colors.white}
				/>
			</View>
		</TouchableOpacity>
	);
};
