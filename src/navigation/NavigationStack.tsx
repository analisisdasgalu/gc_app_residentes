import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '@gcMobile/screens/Login'
import Form from '@gcMobile/components/Form'
import VisitsScreen from '@gcMobile/screens/VisitsScreen'
import { MenuScreen } from '@gcMobile/screens/MenuScreen/MenuScreen'
import { HouseManagement } from '@gcMobile/screens/HouseScreen/HouseManagement'
import { QRDetails } from '@gcMobile/screens/QRDetails/QRDetails'
import { VIEWS } from '@gcMobile/navigation/constants'
import Notificaciones from '@gcMobile/screens/Notificaciones/'
import { ReadNotification } from '@gcMobile/screens/Notificaciones/ReadNotification/ReadNotification'
import { colors } from '@gcMobile/theme/default.styles'

const NavigationStack = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Group
                screenOptions={{
                    headerStyle: {
                        height: 60,
                        borderBottomWidth: 1,
                        borderBottomColor: colors.lightGray,
                    },
                    headerTitleStyle: { fontFamily: 'Roboto', fontSize: 16, color: colors.darkGray, marginTop: 0 },
                }}
            >
                <Stack.Screen name={VIEWS.LOGIN} component={LoginScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name={VIEWS.CREATE_VISITA} component={Form} options={{ title: '', headerShown: false }} />
                <Stack.Screen
                    name={VIEWS.VISITAS}
                    component={VisitsScreen}
                    options={{ title: 'Control de visitas.', headerShown: false }}
                />
                <Stack.Screen name={VIEWS.QR_DETAILS} component={QRDetails} options={{ title: '' }} />
                <Stack.Screen name={VIEWS.MENU} component={MenuScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name={VIEWS.HOUSE_MANAGEMENT} component={HouseManagement} options={{ title: '' }} />
                <Stack.Screen name={VIEWS.NOTIFICACIONES} component={Notificaciones} options={{ title: 'Avisos.' }} />
                <Stack.Screen
                    name={VIEWS.READ_NOTIFICATION}
                    component={ReadNotification}
                    options={{ title: 'Consulta Aviso.' }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default NavigationStack
