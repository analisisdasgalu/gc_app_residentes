import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
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
import { registerForPushNotificationsAsync } from "@gcMobile/util/";
const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const ref = React.useRef<any>();

  useEffect(() => {
    console.log("Fetching token ---->");
    registerForPushNotificationsAsync(Notifications).then((token) =>
      console.log(token),
    );

    ref.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("--- notification received ---");
        console.log(notification);
        console.log("------");
      },
    );
  }, []);

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
          <AlertNotificationRoot theme="light">
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
