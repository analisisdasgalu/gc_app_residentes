import { View, Text } from "react-native";
import React from "react";
import { historicCardStyles } from "./constants";
import { Icon } from "react-native-elements";

export default function HistoricCard() {
  return (
    <View style={historicCardStyles.container}>
      <View style={historicCardStyles.head}>
        <View style={historicCardStyles.nameContainer}>
          <Text>Pablo Bermúdez</Text>
          <Text>Visita - Registro manual</Text>
        </View>
        <View style={historicCardStyles.nameContainer}>
          <Text>04/11/23</Text>
          <Text>12:39:48 CST</Text>
        </View>
        <View style={historicCardStyles.iconLogout}>
          <Icon
            name="login"
            type="material"
            color="#fff"
            size={23}
            style={{ top: "8%", left: "-8%" }}
          />
        </View>
      </View>
      <View style={historicCardStyles.line}></View>
      <View style={historicCardStyles.body}>
        <View style={historicCardStyles.nameContainer}>
          <View style={historicCardStyles.iconContainer}>
            <Icon
              name="directions-car"
              type="material"
              color="#000"
              size={30}
            />
          </View>
          <View style={historicCardStyles.body}>
            <Text>Propiedad: </Text>
            <Text>A033</Text>
          </View>
        </View>
        <View style={{ marginLeft: "-25%" }}>
          <Text>J99BEH</Text>
        </View>
        <View style={[{ marginLeft: "25%" }]}>
          <Text>Tarjetón:</Text>
        </View>
        <Text>1</Text>
      </View>
    </View>
  );
}
