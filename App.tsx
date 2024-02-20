import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStack from "@gcMobile/navigation/NavigationStack";
import { Header } from "react-native-elements";
import { colors } from "@gcMobile/theme/default.styles";
import Menu from "@gcMobile/components/Menu";
import { Provider } from "react-redux";
import { store, persistor } from "@gcMobile/store";
import { PersistGate } from "redux-persist/integration/react";
import { AlertNotificationRoot } from "react-native-alert-notification";
import Loader from "@gcMobile/components/Loader";
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Header
						leftComponent={<Menu />}
						containerStyle={{
							backgroundColor: colors.blue,
							justifyContent: "space-around",
							height: 120,
						}}
						centerComponent={{
							text: "Gestion y Control",
							style: { color: "#fff", marginTop: "25%", fontWeight: "bold" },
						}}
					/>
					<AlertNotificationRoot theme='light'>
						<Loader>
							<NavigationStack />
						</Loader>
					</AlertNotificationRoot>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
