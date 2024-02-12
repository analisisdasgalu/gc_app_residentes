import { View, Text } from "react-native";
import React from "react";
import Filter from "@gcMobile/components/Filter";
import { SafeAreaView } from "react-native-safe-area-context";
import { visitorHistoryStyles } from "./constants";
import HistoricCard from "@gcMobile/components/HistoricCard";

export default function VisitHistoryScreen() {
	return (
		<View style={visitorHistoryStyles.background}>
			<Filter filters={[]} handleFilters={() => {}} />
			<SafeAreaView style={visitorHistoryStyles.container}>
				<HistoricCard />
			</SafeAreaView>
		</View>
	);
}
