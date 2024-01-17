import { StyleSheet, Animated } from "react-native";
import { useState, useRef } from "react";
import { colors, fonts } from "../../../../theme/default.styles";

export const useInputState = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [isFocused, setIsFocused] = useState(false);
	const translateYValue = useRef(new Animated.Value(0)).current;
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
		textInputValue: ((_s: string) => void) | undefined,
		regexPattern: RegExp
	) => {
		setInputValue(text);
		text ? animateTextUp() : animateTextDown();
		regexPattern.test(text) ? setRegexState(true) : setRegexState(false);
		if (textInputValue) {
			textInputValue(text); // Llama a la función para manejar el valor del input si está definida
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

export const inputComponentStyles = StyleSheet.create({
	input: {
		width: 325,
		height: 45,
		fontSize: fonts.typingText,
	},
	text: {
		fontSize: fonts.bodyText2,
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 14,
		fontStyle: "normal",
		position: "absolute",
	},
	inputContainer: {
		width: 325,
		height: 60,
	},
});
