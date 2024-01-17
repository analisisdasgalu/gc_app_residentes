import React, { useEffect } from "react";
import { View, TextInput, Animated } from "react-native";
import { inputPasswordStyles, useInputColor } from "./constants/index";
import { useInputState, showPasswordConstant } from "./constants/index";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, line } from "../../../theme/default.styles";

interface IInputPasswordProps {
	textInput?: string;
	regularExpression?: RegExp;
	styles?: any;
	regexValidation?: (value: boolean) => void;
	isClicked?: boolean;
	passwordValue?: (_s: string) => void;
}
const InputPassword = ({
	styles,
	textInput,
	regularExpression,
	regexValidation,
	isClicked,
	passwordValue,
}: IInputPasswordProps) => {
	const {
		inputValue,
		isFocused,
		translateYValue,
		regexState,
		handleFocus,
		handleBlur,
		handleTextChange,
	} = useInputState();

	const { showPassword, toggleShowPassword } = showPasswordConstant();
	const { inputColor, setInputColor } = useInputColor(styles);

	useEffect(() => {
		if (regexValidation) regexValidation(regexState);
	}, [regexState]);

	useEffect(() => {
		if (isClicked && !regexState) {
			setInputColor(colors.red);
		} else if (isFocused || inputValue) {
			setInputColor(colors.green);
		} else {
			setInputColor(styles);
		}
	}, [isClicked, isFocused, inputValue, regexState, styles]);

	return (
		<SafeAreaView style={inputPasswordStyles.safeAreaViewStyle}>
			<View style={inputPasswordStyles.container}>
				<Animated.Text
					style={[
						inputPasswordStyles.text,
						{
							color: inputColor,
							transform: [{ translateY: translateYValue }],
						},
					]}>
					{textInput}
				</Animated.Text>
				<TextInput
					style={[
						inputPasswordStyles.input,
						{
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
							passwordValue,
							regularExpression ? regularExpression : /.*/
						)
					}
					autoCapitalize='none'
					secureTextEntry={!showPassword}
				/>
				<Icon
					name={showPassword ? "eye-off-outline" : "eye-outline"}
					type='ionicon'
					onPress={toggleShowPassword}
					containerStyle={inputPasswordStyles.iconStyle}
					color={colors.gray}
				/>
			</View>
		</SafeAreaView>
	);
};

InputPassword.defaultProps = {
	textInput: "",
};

export default InputPassword;
