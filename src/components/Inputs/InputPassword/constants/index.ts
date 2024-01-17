import { StyleSheet } from "react-native";
import { Animated } from "react-native";
import React, { useState } from "react";
import { colors, fonts } from "../../../../theme/default.styles";

export const showPasswordConstant = () => {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return {
		showPassword,
		setShowPassword,
		toggleShowPassword,
	};
};

export const useInputState = () => {
	const [inputValue, setInputValue] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const translateYValue = React.useRef(new Animated.Value(0)).current;
	const [regexState, setRegexState] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
		animateTextUp();
	};

	const handleBlur = () => {
		!inputValue && (setIsFocused(false), animateTextDown());
	};

	const handleTextChange = (
		text: string,
		passwordValue: ((_s: string) => void) | undefined,
		regexPattern: RegExp
	) => {
		setInputValue(text);
		text ? animateTextUp() : animateTextDown();
		regexPattern.test(text) ? setRegexState(true) : setRegexState(false);
		if (passwordValue) {
			passwordValue(text);
		}
	};

	const animateTextUp = () => {
		Animated.timing(translateYValue, {
			toValue: -20,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const animateTextDown = () => {
		Animated.timing(translateYValue, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	return {
		inputValue,
		isFocused,
		translateYValue,
		regexState,
		handleFocus,
		handleBlur,
		handleTextChange,
	};
};
export const useInputColor = (initialStyles: any) => {
	const [inputColor, setInputColor] = useState(initialStyles);

	return {
		inputColor,
		setInputColor,
	};
};
export const inputPasswordStyles = StyleSheet.create({
	container: {
		width: 325,
	},
	input: {
		color: colors.gray,
		fontSize: fonts.typingText,
		paddingBottom: 13,
	},
	text: {
		fontSize: fonts.bodyText2,
		fontWeight: "normal",
		color: colors.white,
		textAlign: "left",
		lineHeight: 14,
		fontStyle: "normal",
	},
	iconStyle: {
		position: "absolute",
		right: 10,
		top: 12,
	},
	safeAreaViewStyle: {
		flex: -1,
	},
});
