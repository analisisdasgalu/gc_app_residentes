import { View, Text, ScrollView } from "react-native";
import React from "react";
import Filter from "@gcMobile/components/Filter";
import Card from "@gcMobile/components/Card";
import CircularButton from "@gcMobile/components/CircularButton";
import visitorControlData from "./constants/visitorControlData.json";
import { circularBtnStyles } from "@gcMobile/components/CircularButton/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { TipoVisita } from "@gcMobile/store/TipoVisitas/types";

type VisitorControlScreenProps = {
	navigation: any;
	filters: TipoVisita[];
};

export default function VisitorControlScreen({
	navigation,
	filters,
}: VisitorControlScreenProps) {
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<View style={{ flex: 0.1 }}>
				<Filter filters={filters} />
			</View>
			<View
				style={{
					flex: 0.1,
					flexDirection: "row-reverse",
				}}>
				<CircularButton
					styles={circularBtnStyles.container}
					window={"Form"}
					icon='plus'
				/>
			</View>
			<SafeAreaView
				style={{
					flex: 1,
					alignItems: "center",
					flexDirection: "row",
				}}>
				<ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
					{visitorControlData.map((data: any, index: number) => (
						<Card {...data} key={data?.uniqueID} index={index} />
					))}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
