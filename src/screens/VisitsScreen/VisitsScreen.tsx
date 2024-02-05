import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Tab from "@gcMobile/components/Tab";
import VisitorControlScreen from "../VisitorControl";
import VisitHistoryScreen from "../VisitHistory";
import { visitsStyle } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@gcMobile/store";
import { getCatalogTipoVisitas } from "@gcMobile/store/TipoVisitas/api";

const VisitsScreen = ({ navigation }: any) => {
	const dispatch = useDispatch();
	const { catalogVisitas } = useSelector(
		(state: RootState) => state.tipoVisitas
	);

	const [selectedTab, setSelectedTab] = useState<string>();
	const getSelectedValue = (value: string) => {
		if (value) setSelectedTab(value);
	};

	useEffect(() => {
		if (catalogVisitas.length === 0 || catalogVisitas === undefined)
			dispatch(getCatalogTipoVisitas() as unknown as any);
	}, [catalogVisitas]);

	console.log(catalogVisitas);

	return (
		<View style={{ flex: 1 }}>
			<Tab selectedTab={getSelectedValue} />
			<View
				style={{
					...(selectedTab === "VisitHistory" && visitsStyle.hidden),
					flex: 1,
				}}>
				<VisitorControlScreen navigation={navigation} />
			</View>
			<View
				style={
					// -- TODO: Fix this to match the above
					!selectedTab || selectedTab === "VisitorControl"
						? visitsStyle.hidden
						: undefined
				}>
				<VisitHistoryScreen />
			</View>
		</View>
	);
};

export default VisitsScreen;
