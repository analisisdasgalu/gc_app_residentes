import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { base_url } from "@gcMobile/components/Auth/constants";
import { colors } from "@gcMobile/theme/default.styles";
import { useSelector } from "react-redux";
import { RootState } from "@gcMobile/store";

type QRDetailsProps = {
	navigation: any;
	route: any;
};

export const QRDetails = ({ route, navigation }: QRDetailsProps) => {
	const { uniqueID } = route.params;
	const { currentResidence, currentHouseInstalacion, currentHouseManzana } =
		useSelector((state: RootState) => state.houseReducer);
	const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${base_url}/visita/read-qr/${uniqueID}`;
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
					<Image
						style={{ width: 150, height: 150, margin: "auto" }}
						source={{
							uri: url,
						}}
					/>
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
						}}>
						<FontAwesome name='share-alt' size={24} color='black' />
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: "10%",
							margin: "auto",
							alignItems: "center",
						}}>
						<Entypo name='download' size={24} color='black' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
