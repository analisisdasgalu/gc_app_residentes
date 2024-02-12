import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@gcMobile/screens/Login";
import Form from "@gcMobile/components/Form";
import VisitsScreen from "@gcMobile/screens/VisitsScreen";
import { MenuScreen } from "@gcMobile/screens/MenuScreen/MenuScreen";
import { HouseManagement } from "@gcMobile/screens/HouseScreen/HouseManagement";
import { QRDetails } from "@gcMobile/screens/QRDetails/QRDetails";
import { VIEWS } from "@gcMobile/navigation/constants";

const Stack = createNativeStackNavigator();
const NavigationStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={VIEWS.LOGIN} component={LoginScreen} />
			<Stack.Screen name={VIEWS.CREATE_VISITA} component={Form} />
			<Stack.Screen name={VIEWS.VISITAS} component={VisitsScreen} />
			<Stack.Screen name={VIEWS.QR_DETAILS} component={QRDetails} />
			<Stack.Screen name={VIEWS.MENU} component={MenuScreen} />
			<Stack.Screen name={VIEWS.HOUSE_MANAGEMENT} component={HouseManagement} />
		</Stack.Navigator>
	);
};

export default NavigationStack;
