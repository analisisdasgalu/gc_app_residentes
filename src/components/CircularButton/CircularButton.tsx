import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { circularBtnStyles } from "./constants";
import { useNavigation, NavigationProp } from "@react-navigation/native";
interface ICircularButtonProps {
  window: keyof RootStackParamList;
}
type RootStackParamList = {
  Form: undefined;
  //add more screens here
};

export default function CircularButton(props: ICircularButtonProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const openWindow = () => {
    navigation.navigate(props.window);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={circularBtnStyles.container}
        onPress={openWindow}
      >
        <Icon name="plus" type="material-community" color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
