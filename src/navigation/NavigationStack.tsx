import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '@gcMobile/screens/Login'
import Form from '@gcMobile/components/Form'
import VisitsScreen from '@gcMobile/screens/VisitsScreen'
import { MenuScreen } from '@gcMobile/screens/MenuScreen/MenuScreen'
import { HouseManagement } from '@gcMobile/screens/HouseScreen/HouseManagement'
import { QRDetails } from '@gcMobile/screens/QRDetails/QRDetails'
import { VIEWS } from '@gcMobile/navigation/constants'
import Notificaciones from '@gcMobile/screens/Notificaciones/'

const Stack = createNativeStackNavigator()
const NavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name={VIEWS.LOGIN} component={LoginScreen} options={{ title: '' }} />
            <Stack.Screen name={VIEWS.CREATE_VISITA} component={Form} options={{ title: '' }} />
            <Stack.Screen name={VIEWS.VISITAS} component={VisitsScreen} options={{ title: '' }} />
            <Stack.Screen name={VIEWS.QR_DETAILS} component={QRDetails} options={{ title: '' }} />
            <Stack.Screen name={VIEWS.MENU} component={MenuScreen} options={{ title: '' }} />
            <Stack.Screen name={VIEWS.HOUSE_MANAGEMENT} component={HouseManagement} options={{ title: '' }} />
            <Stack.Screen name={VIEWS.NOTIFICACIONES} component={Notificaciones} options={{ title: '' }} />
        </Stack.Navigator>
    )
}

export default NavigationStack
