import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Filter from "@gcMobile/components/Filter";
import Card from "@gcMobile/components/Card";
import CircularButton from "@gcMobile/components/CircularButton";
import { circularBtnStyles } from "@gcMobile/components/CircularButton/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { TipoVisita } from "@gcMobile/store/TipoVisitas/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@gcMobile/store";
import { getVisistaByFilter, getVisitas } from "@gcMobile/store/Visitas/api";

type VisitorControlScreenProps = {
	navigation: any;
	filters: TipoVisita[];
};

export default function VisitorControlScreen({
	navigation,
	filters,
}: VisitorControlScreenProps) {
	const dispatch = useDispatch();
	const { email, id_instalacion } = useSelector(
		(state: RootState) => state.userReducer
	);
	const { visitas } = useSelector((state: RootState) => state.visitasReducer);
	const [selectedFilters, setFilters] = useState<string[]>([]);

	useEffect(() => {
		if (visitas.length === 0) {
			dispatch(getVisitas(email, Number.parseInt(id_instalacion, 10)) as any);
		}
	}, []);

	useEffect(() => {
		if (selectedFilters.length > 0) {
			dispatch(
				getVisistaByFilter(
					email,
					Number.parseInt(id_instalacion, 10),
					selectedFilters
				) as any
			);
		} else {
			dispatch(getVisitas(email, Number.parseInt(id_instalacion, 10)) as any);
		}
	}, [selectedFilters]);
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<View style={{ flex: 0.1 }}>
				<Filter
					filters={filters}
					handleFilters={(filterArr: string[]) => setFilters(filterArr)}
				/>
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
					width: "100%",
				}}>
				<ScrollView style={{ flex: 1, marginHorizontal: 20, width: "95%" }}>
					{visitas.map((data: any, index: number) => (
						<Card {...data} key={data?.uniqueID} index={index} />
					))}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
