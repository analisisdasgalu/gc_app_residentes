import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import InputComponent from "../../components/Inputs/InputComponent";
import InputPassword from "../../components/Inputs/InputPassword";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import {
	ALERT_TYPE,
	AlertNotificationRoot,
	Toast,
} from "react-native-alert-notification";
import {
	loginScreenStyles,
	useStyles,
	authenticate,
	saveToken,
	InitializeConnection,
} from "./constants";
import Loader from "../../components/Loader";
import { buttonComponentStyles } from "@gcMobile/components/Button/constants";

interface INavigationProps {
	navigation: any;
}
interface ErrorResponse {
	status: number;
}
export default function LoginScreen({ navigation }: INavigationProps) {
	const {
		emailStyles,
		setEmailStyles,
		passwordStyles,
		setPasswordStyles,
		clicked,
		setClicked,
	} = useStyles();

	//user data
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [loading, setLoading] = useState(false);

	const getInputValue = (value?: string) => {
		if (value) setEmailValue(value);
	};

	const getPasswordValue = (value?: string) => {
		if (value) setPasswordValue(value);
	};

	const handleSubmit = async () => {
		setClicked(true);
		setLoading(true);
		if (!emailStyles.regexState) {
			setLoading(false);
			Toast.show({
				type: ALERT_TYPE.DANGER,
				title: "Invalid email format",
				textBody: "Please enter a valid email address.",
			});
		} else if (passwordStyles.regexState) {
			try {
				const authData = await InitializeConnection(
					emailValue,
					passwordValue,
					authenticate
				);

				const tokenData: object = {
					access_token: authData.access_token,
				};
				saveToken(tokenData);
				setLoading(false);
				navigation.dispatch(StackActions.replace("Visita"));
			} catch (error) {
				console.log(error);
				setLoading(false);
				const tokenData: object = {
					access_token: "",
					expires_in: "",
				};
				saveToken(tokenData);

				Toast.show({
					type: ALERT_TYPE.DANGER,
					title: "Login Error",
					textBody: "An error occurred while logging in.",
				});
			}
		}
	};

	return (
		<AlertNotificationRoot theme='light'>
			<SafeAreaView style={loginScreenStyles.safeAreaViewStyle}>
				<View
					style={[
						loginScreenStyles.overlay,
						loginScreenStyles.alignItemsCenter,
						loginScreenStyles.justifyContentCenter,
					]}>
					<Image
						style={loginScreenStyles.img}
						source={require("@gcMobile/images/logoGcMobile.jpeg")}
					/>
					<View>
						<InputComponent
							textInput='Email Adress'
							styles={emailStyles.email}
							regularExpression={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
							regexValidation={(value) =>
								setEmailStyles({ ...emailStyles, regexState: value })
							}
							isClicked={clicked}
							textInputValue={getInputValue}
						/>
					</View>
					<View style={loginScreenStyles.passwordContainer}>
						<InputPassword
							textInput='Password'
							styles={passwordStyles.password}
							regexValidation={(value) =>
								setPasswordStyles({ ...passwordStyles, regexState: value })
							}
							isClicked={clicked}
							passwordValue={getPasswordValue}
							regularExpression={/\S+/}
						/>
					</View>
					<View style={loginScreenStyles.linkContainer}>
						<Button
							styles={buttonComponentStyles.button}
							textButton='Sign In'
							onPress={handleSubmit}
						/>
					</View>
					<View
						style={[
							loginScreenStyles.signupContainer,
							loginScreenStyles.alignItemsCenter,
						]}>
						<Text style={loginScreenStyles.signupText}>New user? </Text>
						<TouchableOpacity onPress={() => navigation.navigate("Register")}>
							<Text style={loginScreenStyles.signupStyle}>Sign up</Text>
						</TouchableOpacity>
						<Text style={loginScreenStyles.signupText}> here</Text>
					</View>
					<View style={loginScreenStyles.termsContainer}>
						<Text style={loginScreenStyles.termsText}>
							By creating an account, you agree to our Terms of Service and
							Privacy Policy
						</Text>
					</View>
				</View>

				{loading && (
					<View style={loginScreenStyles.loaderStyle}>
						<Loader />
					</View>
				)}
			</SafeAreaView>
		</AlertNotificationRoot>
	);
}
