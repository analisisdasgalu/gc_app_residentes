import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@gcMobile/screens/Login";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Button from "@gcMobile/components/Button";
import { colors } from "@gcMobile/theme/default.styles";
import { logout } from "@gcMobile/screens/Login/constants";
import { StackActions } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const NavigationStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen
				name='Visita'
				component={({ navigation }: any) => (
					<View>
						<Button
							styles={{
								backgroundColor: colors.red,
								width: 325,
								height: 46.5,
								borderRadius: 2,
								margin: "auto",
								marginTop: 200,
								marginLeft: 35,
								filter: colors.dropShadow,
							}}
							textButton='Logout'
							onPress={async () => {
								const value = await logout();
								if (value) navigation.dispatch(StackActions.replace("Login"));
							}}
						/>
					</View>
				)}
			/>
		</Stack.Navigator>
	);
};

export default NavigationStack;
