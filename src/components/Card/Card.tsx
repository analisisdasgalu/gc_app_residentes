import { View, Text } from "react-native";
import React from "react";
import { cardStyles } from "./constants";

export default function Card() {
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.row}>
        <View style={cardStyles.typeContainer}>
          <View style={cardStyles.typeIcon}></View>
          <Text style={cardStyles.textType}>Visita</Text>
        </View>

        <View style={cardStyles.data}>
          <Text style={cardStyles.dataText}>1{")"} Fernanda Madrigal</Text>
          <View style={cardStyles.row}>
            <View style={[cardStyles.column, { marginRight: "5%" }]}>
              <Text style={cardStyles.descriptionText}>Desde el</Text>
              <Text style={cardStyles.descriptionText}>Hasta el</Text>
              <Text style={cardStyles.descriptionText}>Tipo</Text>
              <Text style={cardStyles.descriptionText}>Avisos</Text>
              <Text style={cardStyles.descriptionText}>Autor</Text>
            </View>
            <View style={cardStyles.column}>
              <Text style={cardStyles.dataText}> 2023/02/12 </Text>
              <Text style={cardStyles.dataText}> 2023/02/12 </Text>
              <Text style={cardStyles.dataText}> Peatonal </Text>
              <Text style={cardStyles.dataText}> Sí </Text>
              <Text style={cardStyles.dataText}>example@gmail.com</Text>
            </View>
            <View
              style={[
                cardStyles.column,
                { marginLeft: "-12%", marginRight: "5%" },
              ]}
            >
              <Text style={cardStyles.descriptionText}>a las </Text>
              <Text style={cardStyles.descriptionText}>a las </Text>
              <Text style={cardStyles.descriptionText}>Acceso </Text>
              <Text style={cardStyles.descriptionText}>Estado </Text>
            </View>
            <View style={cardStyles.column}>
              <Text style={cardStyles.dataText}>9:00pm</Text>
              <Text style={cardStyles.dataText}>9:00pm</Text>
              <Text style={cardStyles.dataText}>Una vez</Text>
              <Text style={cardStyles.dataText}>Vigente</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
