import React, { useEffect } from "react";
import { View, TextInput, Animated, Text } from "react-native";
import { inputComponentStyles } from "./constants/index";
import { useInputState } from "./constants/index";
import { colors, fonts, line } from "../../../theme/default.styles";
import { useInputColor } from "./constants/index";

interface IInputComponentProps {
	textInput?: string;
	regularExpression?: RegExp;
	styles?: any;
	regexValidation?: (value: boolean) => void;
	isClicked?: boolean;
	textInputValue?: (_s: string) => void;
}

const InputComponent = ({
	styles,
	textInput,
	regularExpression,
	regexValidation,
	isClicked,
	textInputValue,
}: IInputComponentProps) => {
	const {
		inputValue,
		isFocused,
		translateYValue,
		regexState,
		handleFocus,
		handleBlur,
		handleTextChange,
	} = useInputState();
	const { inputColor, setInputColor } = useInputColor(styles);

	useEffect(() => {
		if (regexValidation) regexValidation(regexState);
	}, [regexState]);

	useEffect(() => {
		if (isClicked && !regexState) {
			setInputColor(colors.red);
		} else if (isFocused || inputValue) {
			setInputColor(colors.blue);
		} else {
			setInputColor(styles);
		}
	}, [isClicked, isFocused, inputValue, regexState, styles]);

	return (
		<View style={inputComponentStyles.inputContainer}>
			<Animated.Text
				style={[
					inputComponentStyles.text,
					{
						color: inputColor,
						transform: [{ translateY: translateYValue }],
					},
				]}>
				{textInput}
			</Animated.Text>
			<TextInput
				style={[
					inputComponentStyles.input,
					{
						color: colors.gray,
						fontSize: fonts.typingText,
						paddingBottom: 10,
						borderBottomColor: inputColor,
						borderBottomWidth:
							isFocused || inputValue ? line.thickLine : line.thinLine,
					},
				]}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChangeText={(text) =>
					handleTextChange(
						text,
						textInputValue,
						regularExpression ? regularExpression : /.*/
					)
				}
				autoCapitalize='none'
			/>
		</View>
	);
};

InputComponent.defaultProps = {
	textInput: "",
};

export default InputComponent;
