import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStack from "@gcMobile/navigation/NavigationStack";
import { Header } from "react-native-elements";
import { colors } from "@gcMobile/theme/default.styles";
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Header
				containerStyle={{
					backgroundColor: colors.blue,
					justifyContent: "space-around",
					height: 50,
				}}
			/>
			<NavigationStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
