import { useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { colors, fonts } from "../../../theme/default.styles";
import { base_url } from "@gcMobile/components/Auth/constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (tokenData: string) => {
	try {
		await AsyncStorage.setItem(
			"@token",
			JSON.stringify({ access_toke: tokenData })
		);
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
	customerCode: string,
	callback: any
) => {
	const formdata = new FormData();
	formdata.append("prefix", "u579469339");
	formdata.append("code", customerCode);
	const requestOptions = {
		method: "POST",
		body: formdata,
	};
	const response = await fetch(`${base_url}`, requestOptions);

	if (response.status === 200) {
		const res = await callback(email, password);
		if (res.code === "200" && res.access_token) return res;
		else throw new Error(res.message);
	}
};

export const authenticate = async (email: string, password: string) => {
	const formdata = new FormData();
	formdata.append("email", email);
	formdata.append("password", password);

	const requestOptions = {
		method: "POST",
		body: formdata,
		Headers: {
			"content-type": "multipart/form-data",
		},
	};

	try {
		const response = await fetch(`${base_url}/?login`, requestOptions);
		if (!response.ok) {
			logout();
			throw new Error("Falló la conexión.");
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
		marginTop: 15,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.white,
	},
	img: {
		height: 126.5,
		marginTop: 87,
	},
	linkContainer: {
		marginTop: 35,
	},
	forgotPasswordContainer: {
		marginBottom: 31,
		marginLeft: 227,
	},
	signupContainer: {
		marginTop: 100,
		flexDirection: "row",
	},
	termsContainer: {
		marginTop: 10,
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
