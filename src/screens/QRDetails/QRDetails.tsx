import React from "react";
import {
	TouchableOpacity,
	View,
	Text,
	Image,
	Platform,
	PermissionsAndroid,
	Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ViewShot, { captureRef } from "react-native-view-shot";
import { base_url } from "@gcMobile/components/Auth/constants";
import { colors } from "@gcMobile/theme/default.styles";
import { useSelector } from "react-redux";
import { RootState } from "@gcMobile/store";
import Share from "react-native-share";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import RNFetchBlob from "rn-fetch-blob";

type QRDetailsProps = {
	navigation: any;
	route: any;
};

export const QRDetails = ({ route, navigation }: QRDetailsProps) => {
	const ref = React.useRef<any>();
	const { uniqueID } = route.params;
	const { currentResidence, currentHouseInstalacion, currentHouseManzana } =
		useSelector((state: RootState) => state.houseReducer);
	const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${base_url}/visita/read-qr/${uniqueID}`;

	const onShare = async () => {
		try {
			const uri = await captureRef(ref, {
				format: "png",
				quality: 0.7,
			});
			console.log("uri", uri);
			await Share.open({ url: uri });
		} catch (e) {
			console.log(e);
		}
	};

	async function hasAndroidPermission() {
		const getCheckPermissionPromise = () => {
			if (Platform.Version >= `33`) {
				return Promise.all([
					PermissionsAndroid.check(
						PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
					),
					PermissionsAndroid.check(
						PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
					),
				]).then(
					([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
						hasReadMediaImagesPermission && hasReadMediaVideoPermission
				);
			} else {
				return PermissionsAndroid.check(
					PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
				);
			}
		};

		const hasPermission = await getCheckPermissionPromise();
		if (hasPermission) {
			return true;
		}
		const getRequestPermissionPromise = () => {
			if (Platform.Version >= `33`) {
				return PermissionsAndroid.requestMultiple([
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
					PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
				]).then(
					(statuses) =>
						statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
							PermissionsAndroid.RESULTS.GRANTED &&
						statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
							PermissionsAndroid.RESULTS.GRANTED
				);
			} else {
				return PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
				).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
			}
		};

		return await getRequestPermissionPromise();
	}

	const saveToCameraRoll = async () => {
		if (Platform.OS === "android" && !(await hasAndroidPermission())) {
			return;
		}
		try {
			RNFetchBlob.config({
				fileCache: true,
				appendExt: "png",
			})
				.fetch("GET", url)
				.then((res) => {
					CameraRoll.saveAsset(res.data, { type: "photo" })
						.then((res) => {
							Alert.alert("Informacion", "El QR se ha guardo correctamente");
						})
						.catch((err) => console.log(err));
				})
				.catch((error) => console.log(error));
		} catch (error) {
			Toast.show({
				type: ALERT_TYPE.DANGER,
				textBody: "No se pudo guardar la imagen",
			});
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 0.4, alignItems: "center", paddingTop: "10%" }}>
				<View
					style={{
						width: "60%",
						margin: "auto",
						backgroundColor: colors.lightGray,
						alignItems: "center",
						padding: "5%",
						borderRadius: 10,
					}}>
					<ViewShot ref={ref}>
						<Image
							style={{ width: 150, height: 150, margin: "auto" }}
							source={{
								uri: url,
							}}
						/>
					</ViewShot>
				</View>
				<View style={{ marginTop: "5%" }}>
					<Text>{currentResidence}</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								fontSize: 10,
							}}>{`Seccion: ${currentHouseManzana}`}</Text>
						<Text
							style={{
								fontSize: 10,
							}}>{`Casa: ${currentHouseInstalacion}`}</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					flex: 0.1,
					alignItems: "center",
				}}>
				<View
					style={{
						flexDirection: "row",
						width: "60%",
						justifyContent: "space-around",
						borderRadius: 5,
						padding: "2%",
						backgroundColor: colors.lightGray,
					}}>
					<TouchableOpacity
						style={{
							width: "10%",
							margin: "auto",
							alignItems: "center",
						}}
						onPress={() => onShare()}>
						<FontAwesome name='share-alt' size={24} color='black' />
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: "10%",
							margin: "auto",
							alignItems: "center",
						}}
						onPress={() => saveToCameraRoll()}>
						<Entypo name='download' size={24} color='black' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
