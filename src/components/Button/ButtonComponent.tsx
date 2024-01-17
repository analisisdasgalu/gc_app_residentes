import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { buttonComponentStyles } from "./constants/index";
interface IButtonComponentProps {
	textButton?: string;
	styles: any;
	onPress: () => void;
}

const Button = ({ textButton, styles, onPress }: IButtonComponentProps) => {
	return (
		<View>
			<TouchableOpacity
				onPress={onPress}
				style={[
					styles,
					buttonComponentStyles.alignItemsCenter,
					buttonComponentStyles.justifyContentCenter,
				]}>
				<Text style={buttonComponentStyles.buttonText}>{textButton}</Text>
			</TouchableOpacity>
		</View>
	);
};

Button.defaultProps = {
	textButton: "",
	onPress: () => {},
};

export default Button;
