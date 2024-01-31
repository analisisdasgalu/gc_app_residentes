import { View, Text } from "react-native";
import React from "react";
import Filter from "@gcMobile/components/Filter";
import Card from "@gcMobile/components/Card";
import { visitorControlStyles } from "./constants";
import CircularButton from "@gcMobile/components/CircularButton";
import { colors } from "@gcMobile/theme/default.styles";
import Button from "@gcMobile/components/Button";
import { logout } from "../Login/constants";

export default function VisitorControlScreen({ navigation }: any) {
	return (
		<View>
			<View style={visitorControlStyles.container}>
				<Filter />
				<View style={visitorControlStyles.addButton}>
					<CircularButton window={"Form"} />
				</View>
				<Card />
			</View>
			<View>
				<Button
					styles={{
						backgroundColor: colors.red,
						width: 150,
						height: 46.5,
						borderRadius: 2,
						margin: "auto",
						position: "relative",
						bottom: 0,
						marginTop: 350,
						marginLeft: 235,
						filter: colors.dropShadow,
					}}
					textButton='Salir'
					onPress={async () => {
						const value = await logout();
						if (value) navigation.navigate("Login");
					}}
				/>
			</View>
		</View>
	);
}
