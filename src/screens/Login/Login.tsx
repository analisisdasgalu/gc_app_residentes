import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import InputComponent from "../../components/Inputs/InputComponent";
import InputPassword from "../../components/Inputs/InputPassword";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import {
	loginScreenStyles,
	useStyles,
	authenticate,
	saveToken,
	InitializeConnection,
	getIsntalaciones,
} from "./constants";
import { buttonComponentStyles } from "@gcMobile/components/Button/constants";
import { colors } from "@gcMobile/theme/default.styles";
import { useDispatch } from "react-redux";
import { setUserData } from "@gcMobile/store/User";
import { setCurrentHouseInfo, setHouse } from "@gcMobile/store/Houses";
// import instalaciones from "@gcMobile/screens/HouseScreen/conts/instalaciones.json";
import { IHouseManagement, styles } from "../HouseScreen/conts";
import { setLoading } from "@gcMobile/store/UI";
import { VIEWS } from "@gcMobile/navigation/constants";

interface INavigationProps {
	navigation: any;
}
interface ErrorResponse {
	status: number;
}
export default function LoginScreen({ navigation }: INavigationProps) {
	const dispatch = useDispatch();
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
	const [customerCode, setCustomerCode] = useState<string>("");

	const getInputValue = (value?: string) => {
		if (value) setEmailValue(value);
	};

	const getPasswordValue = (value?: string) => {
		if (value) setPasswordValue(value);
	};

	const handleSubmit = async () => {
		setClicked(true);
		dispatch(setLoading(true));
		if (!emailStyles.regexState) {
			dispatch(setLoading(false));
			Toast.show({
				type: ALERT_TYPE.DANGER,
				title: "Invalid email format",
				textBody: "Please enter a valid email address.",
			});
		} else if (passwordStyles.regexState) {
			if (customerCode === "") {
				dispatch(setLoading(false));
				Toast.show({
					type: ALERT_TYPE.DANGER,
					title: "Empty code",
					textBody: "Please enter a valid code",
				});
				return;
			}
			InitializeConnection(customerCode)
				.then((data) => {
					data
						.json()
						.then((initData) => {
							if (
								data.status === 400 ||
								data.status === 401 ||
								data.status === 500
							) {
								throw new Error(initData.message);
							}
							authenticate(emailValue, passwordValue)
								.then((loginRaw) => {
									loginRaw
										.json()
										.then((authData) => {
											if (authData.code === "400") {
												throw new Error(authData.message);
											}
											getIsntalaciones(authData.instalaciones)
												.then((dataInstalaciones) => {
													dataInstalaciones
														.json()
														.then((instalaciones: any) => {
															console.log("instalaciones", instalaciones);
															dispatch(
																setHouse(
																	instalaciones as unknown as IHouseManagement[]
																)
															);
															const _house =
																authData.instalaciones.split(",")[0];
															const defaultHouse = instalaciones.find(
																(inst: IHouseManagement) => inst.id === _house
															);
															if (defaultHouse) {
																dispatch(
																	setCurrentHouseInfo({
																		currentHouseId: defaultHouse.id,
																		currentResidence: defaultHouse.residencial,
																		currentHouseInstalacion:
																			defaultHouse.num_int,
																		currentHouseManzana: defaultHouse.manzana,
																	})
																);
															} else {
																setCurrentHouseInfo({
																	currentHouseId: 0,
																	currentResidence: "",
																	currentHouseInstalacion: "",
																	currentHouseManzana: "",
																});
															}
															dispatch(setLoading(false));
															navigation.dispatch(
																StackActions.replace(VIEWS.VISITAS, tokenData)
															);
														})
														.catch((error: ErrorResponse) => {
															dispatch(setLoading(false));
															Toast.show({
																type: ALERT_TYPE.DANGER,
																title:
																	"Error al procesar json de instalaciones",
																textBody: `${error}`,
															});
														});
												})
												.catch((error: ErrorResponse) => {
													dispatch(setLoading(false));
													Toast.show({
														type: ALERT_TYPE.DANGER,
														title: "Error al obtener instalaciones",
														textBody: `${error}`,
													});
												});
											const tokenData: { [key: string]: string } = {
												access_token: authData.access_token,
												userName: authData.name,
												userResidence: authData.residence,
												userEmail: emailValue,
												userId: authData.id,
											};
											saveToken(tokenData.access_token);
											dispatch(
												setUserData({
													access_token: tokenData.access_token,
													id_instalacion: authData.instalaciones,
													email: emailValue,
													name: authData.name,
													id: authData.id,
												})
											);
										})
										.catch((error: ErrorResponse) => {
											dispatch(setLoading(false));
											Toast.show({
												type: ALERT_TYPE.DANGER,
												title: "Error al procesar Json de login",
												textBody: `${error}`,
											});
										});
								})
								.catch((error: ErrorResponse) => {
									dispatch(setLoading(false));
									Toast.show({
										type: ALERT_TYPE.DANGER,
										title: "Error al iniciar sesion",
										textBody: `${error}`,
									});
								});
						})
						.catch((error: ErrorResponse) => {
							dispatch(setLoading(false));
							Toast.show({
								type: ALERT_TYPE.DANGER,
								title: "Error al procesar json de conexion",
								textBody: `${error}`,
							});
						});
				})
				.catch((error: ErrorResponse) => {
					dispatch(setLoading(false));
					Toast.show({
						type: ALERT_TYPE.DANGER,
						title: "Error al iniciar conexion",
						textBody: `${error}`,
					});
				});
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={[loginScreenStyles.container]}>
				<ScrollView>
					<View style={loginScreenStyles.rowImage}>
						<Image
							source={require("@gcMobile/images/logoGcMobile.jpeg")}
							style={loginScreenStyles.imageStyles}
						/>
					</View>
					<View style={loginScreenStyles.row}>
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
					<View style={loginScreenStyles.row}>
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
					<View style={loginScreenStyles.row}>
						<InputPassword
							textInput='Code'
							styles={colors.gray}
							isClicked={clicked}
							passwordValue={(value: string) => setCustomerCode(value)}
						/>
					</View>
					<View style={loginScreenStyles.row}>
						<Button
							styles={buttonComponentStyles.button}
							textButton='Sign In'
							onPress={handleSubmit}
						/>
					</View>
					<View style={loginScreenStyles.rowText}>
						<Text style={loginScreenStyles.label}>New user? </Text>
						<TouchableOpacity onPress={() => navigation.navigate("Register")}>
							<Text style={loginScreenStyles.label}>Sign up</Text>
						</TouchableOpacity>
						<Text style={loginScreenStyles.label}> here</Text>
					</View>
					<View style={loginScreenStyles.rowText}>
						<Text style={loginScreenStyles.label}>V1.1</Text>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
