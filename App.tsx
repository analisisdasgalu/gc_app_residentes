import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStack from "@gcMobile/navigation/NavigationStack";
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<NavigationStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
