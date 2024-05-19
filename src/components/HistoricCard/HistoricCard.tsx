import { View, Text } from "react-native";
import { historicCardStyles, plateContainer } from "./constants";
import { Icon, colors } from "react-native-elements";
import { HistoricCardProps } from "@gcMobile/components/HistoricCard/constants";
import { formatDate, formatTime, plateFormat } from "@gcMobile/util";
import { text_style, text_style_small } from "@gcMobile/theme/default.styles";

export default function HistoricCard({
  fechaVisita,
  horaVisita,
  tipoVisita,
  tipoIngreso,
  vehiculos,
  casa,
}: HistoricCardProps) {
  return (
    <View style={historicCardStyles.container}>
      <View style={historicCardStyles.cardHead}>
        <View style={historicCardStyles.nameContainer}>
          <Text style={text_style}>{tipoVisita}</Text>
          <Text style={text_style}>{tipoIngreso}</Text>
        </View>
        <View style={historicCardStyles.nameContainer}>
          <Text style={text_style}>{formatDate(fechaVisita)}</Text>
          <Text style={text_style}>{formatTime(horaVisita)} CST</Text>
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
              name={
                tipoIngreso === "Vehículo"
                  ? "directions-car"
                  : "directions-walk"
              }
              type="material"
              color={colors.grey1}
              size={25}
            />
          </View>
          <View style={historicCardStyles.body}>
            <Text style={text_style}>Propiedad: </Text>
            <Text style={text_style}>{casa}</Text>
          </View>
        </View>
        <View style={plateContainer}>
          {vehiculos.map(({ placas }) => (
            <View key={placas}>
              <Text style={text_style_small}>{`- ${plateFormat(placas)}`}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
