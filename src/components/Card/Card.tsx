import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { cardStyles } from "./constants";
import { filterPalette } from "@gcMobile/theme/default.styles";

interface ICardProps {
  jsonData: {
    nombre: string;
    desde: string;
    hasta: string;
    tipo_visita: string;
    tipo: string;
    email: string;
    acceso: string;
    avisos: string;
    estado: string;
  };
}

export default function Card({ jsonData }: ICardProps) {
  const [typeColor, setTypeColor] = useState<string>(filterPalette.blue);
  const [access, setAccess] = useState<string>("");
  const [notifications, setNotifications] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  useEffect(() => {
    if (jsonData.tipo_visita === "Visita") {
      setTypeColor(filterPalette.blue);
    }
    if (jsonData.tipo_visita === "Servicio") {
      setTypeColor(filterPalette.orange);
    }
    if (jsonData.tipo_visita === "Proveedor") {
      setTypeColor(filterPalette.brown);
    }
    if (jsonData.acceso === "0") {
      setAccess("Una vez");
    }
    if (jsonData.acceso === "1") {
      setAccess("Varias veces");
    }
    if (jsonData.avisos === "0") {
      setNotifications("No");
    }
    if (jsonData.avisos === "1") {
      setNotifications("Sí");
    }
    if (jsonData.estado === "0") {
      setStatus("Vencido");
    }
    if (jsonData.estado === "1") {
      setStatus("Vigente");
    }
  }, [jsonData.tipo_visita, jsonData.acceso, jsonData.avisos, jsonData.estado]);

  //date and time
  const desde = new Date(jsonData.desde);
  const desdeDate = desde.toISOString().split("T")[0];
  const desdeTime = desde.toTimeString().split(" ")[0];
  const hasta = new Date(jsonData.hasta);
  const hastaDate = hasta.toISOString().split("T")[0];
  const hastaTime = hasta.toTimeString().split(" ")[0];
  return (
    <View style={[cardStyles.container, cardStyles.padding]}>
      <View style={cardStyles.row}>
        <View style={cardStyles.typeContainer}>
          <View
            style={[
              cardStyles.typeIcon,
              {
                backgroundColor: typeColor,
              },
            ]}
          ></View>
          <Text style={cardStyles.textType}>{jsonData.tipo_visita}</Text>
        </View>
        <View style={[cardStyles.column, cardStyles.padding]}>
          <View style={cardStyles.row}>
            <Text style={cardStyles.dataText}>
              {1}
              {") "}
              {jsonData.nombre}
            </Text>
          </View>
          <View style={[cardStyles.row, { justifyContent: "space-between" }]}>
            <Text style={cardStyles.descriptionText}>Desde el</Text>
            <Text style={cardStyles.dataText}>{desdeDate}</Text>
            <Text style={cardStyles.descriptionText}>a las</Text>
            <Text style={cardStyles.dataText}>{desdeTime}</Text>
          </View>
          <View style={cardStyles.row}>
            <Text style={cardStyles.descriptionText}>Hasta el</Text>
            <Text style={cardStyles.dataText}>{hastaDate}</Text>
            <Text style={cardStyles.descriptionText}>a las</Text>
            <Text style={cardStyles.dataText}>{hastaTime}</Text>
          </View>
          <View style={cardStyles.row}>
            <Text style={cardStyles.descriptionText}>Tipo</Text>
            <Text style={cardStyles.dataText}>{jsonData.tipo}</Text>
            <Text style={cardStyles.descriptionText}>Acceso</Text>
            <Text style={cardStyles.dataText}>{access}</Text>
          </View>
          <View style={cardStyles.row}>
            <Text style={cardStyles.descriptionText}>Avisos</Text>
            <Text style={cardStyles.dataText}>{notifications}</Text>
            <Text style={cardStyles.descriptionText}>Estado</Text>
            <Text style={cardStyles.dataText}>{status}</Text>
          </View>
          <View style={cardStyles.row}>
            <Text style={cardStyles.descriptionText}>Autor</Text>
            <Text style={cardStyles.dataText}>{jsonData.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
