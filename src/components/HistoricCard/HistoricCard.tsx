import { View, Text } from "react-native";
import { historicCardStyles } from "./constants";
import { Icon } from "react-native-elements";
import { HistoricCardProps } from "./types";



export default function HistoricCard({nombreVisita, fechaVisita, horaVisita, tipoVisita, vehiculos, casa}: HistoricCardProps) {

  return (
    <View style={historicCardStyles.container}>
      <View style={historicCardStyles.head}>
        <View style={historicCardStyles.nameContainer}>
          <Text>{nombreVisita}</Text>
          <Text>Visita - {tipoVisita}</Text>
        </View>
        <View style={historicCardStyles.nameContainer}>
          <Text>{fechaVisita}</Text>
          <Text>{horaVisita} CST</Text>
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
            <Text>{casa}</Text>
          </View>
        </View>
        {
          vehiculos.map((vehiculo, index) => (
            <View key={vehiculo} style={{ marginLeft: "-25%" }}>
              <Text>{vehiculo}</Text>
            </View>
          ))
        }
      </View>
    </View>
  );
}
