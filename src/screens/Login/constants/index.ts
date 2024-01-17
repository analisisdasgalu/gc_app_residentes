import { useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { colors, fonts } from "../../../theme/default.styles";
import { base_url } from "@gcMobile/components/Auth/constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (tokenData: object) => {
	try {
		await AsyncStorage.setItem("@token", JSON.stringify(tokenData));
	} catch (error) {
		throw error;
	}
};

export const handleLinkPress = () => {
	console.log("Enlace ");
};
export const logout = async () => {
	const response = await fetch(`${base_url}/?logout`, {});

	if (response.status === 200) {
		return true;
	}
	return false;
};
export const InitializeConnection = async (
	email: string,
	password: string,
	callback: any
) => {
	const formdata = new FormData();
	formdata.append("prefix", "u579469339");
	formdata.append("code", "0968EUKD4W");
	formdata.append("user", "u579469339_dasgalu_gc");
	formdata.append("password", "32V*uiGh07");
	formdata.append("email", "admin@admin.com");
	const requestOptions = {
		method: "POST",
		body: formdata,
	};
	const response = await fetch(`${base_url}`, requestOptions);

	if (response.status === 200) {
		const res = await callback(email, password);
		return res;
	}
};

export const authenticate = async (email: string, password: string) => {
	const formdata = new FormData();
	formdata.append("email", email);
	formdata.append("password", password);

	const requestOptions = {
		method: "POST",
		body: formdata,
	};
	try {
		const response = await fetch(`${base_url}/?login`, requestOptions);

		//save user credentials and time
		try {
			const userCredentials = {
				email: email,
				password: password,
			};

			await AsyncStorage.setItem(
				"@userCredentials",
				JSON.stringify(userCredentials)
			);
			const currentTime = Date.now();
			await AsyncStorage.setItem("@loginTime", currentTime.toString());
		} catch (error) {
			throw error;
		}

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();

		return data;
	} catch (error) {
		throw error;
	}
};

export const useStyles = () => {
	const [emailStyles, setEmailStyles] = useState({
		email: colors.gray,
		regexState: false,
	});

	const [passwordStyles, setPasswordStyles] = useState({
		password: colors.gray,
		regexState: false,
	});
	const [clicked, setClicked] = useState(false);

	return {
		emailStyles,
		setEmailStyles,

		passwordStyles,
		setPasswordStyles,

		clicked,
		setClicked,
	};
};

const marginTop20 = {
	marginTop: -20,
};
const marginBottom20 = {
	marginBottom: -20,
};
const justifyContentCenter: ViewStyle = {
	justifyContent: "center",
};
const alignItemsCenter: ViewStyle = {
	alignItems: "center",
};

export const loginScreenStyles = StyleSheet.create({
	marginTop20: {
		...marginTop20,
	},
	marginBottom20: {
		...marginBottom20,
	},
	backgroundImage: {
		flex: 1,
	},
	passwordContainer: {
		marginTop: -20,
		marginBottom: -19,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.white,
	},
	img: {
		height: 126.5,
		marginBottom: 77,
		marginTop: 87,
	},
	linkContainer: {
		marginTop: 10,
	},
	forgotPasswordContainer: {
		marginBottom: 31,
		marginLeft: 227,
	},
	signupContainer: {
		marginTop: 146,
		flexDirection: "row",
	},
	termsContainer: {
		marginTop: 56,
		width: 199,
	},
	signupText: {
		color: colors.gray,
		fontSize: fonts.bodyText1,
	},
	signupStyle: {
		color: colors.blue,
		fontSize: fonts.bodyText1,
	},
	termsText: {
		color: colors.gray,
		fontSize: fonts.bodyText3,
		textAlign: "center",
	},
	singupRefText: {
		color: colors.green,
		fontSize: fonts.bodyText1,
	},
	safeAreaViewStyle: {
		flex: 1,
	},
	alignItemsCenter: alignItemsCenter,
	justifyContentCenter: justifyContentCenter,
	loaderStyle: {
		...justifyContentCenter,
		flex: 1,
	},
});
