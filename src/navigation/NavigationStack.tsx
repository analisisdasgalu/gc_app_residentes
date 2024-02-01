import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@gcMobile/screens/Login";
import Form from "@gcMobile/components/Form";
import VisitsScreen from "@gcMobile/screens/VisitsScreen";
import { MenuScreen } from "@gcMobile/screens/MenuScreen/MenuScreen";
import { HouseManagement } from "@gcMobile/screens/HouseScreen/HouseManagement";

const Stack = createNativeStackNavigator();
const NavigationStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Form' component={Form} />
			<Stack.Screen name='Visits' component={VisitsScreen} />
			<Stack.Screen name='Menu' component={MenuScreen} />
			<Stack.Screen name='HouseManagement' component={HouseManagement} />
		</Stack.Navigator>
	);
};

export default NavigationStack;
