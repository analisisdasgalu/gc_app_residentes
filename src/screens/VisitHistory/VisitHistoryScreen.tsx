import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "@gcMobile/components/Filter";
import HistoricCard from "@gcMobile/components/HistoricCard";
import { getHistoricoVisitas } from "@gcMobile/store/HistoricVisitas/api";
import { visitorHistoryStyles } from "./constants";

export default function VisitHistoryScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistoricoVisitas({idInstalacion: 3, email: 'analisis@dasgalu.com.mx'}));
  }, []);

	return (
		<View style={visitorHistoryStyles.background}>
			<Filter filters={[]} handleFilters={() => {}} />
			<SafeAreaView style={visitorHistoryStyles.container}>
				<HistoricCard nombreVisita="Test" fechaVisita="18/05/2024" horaVisita="21:00" tipoVisita="Visita" vehiculos={['PBT-0518']} casa="A3" />
			</SafeAreaView>
		</View>
	);
}
