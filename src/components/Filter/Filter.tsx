import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FilterStyles } from "./constants";
import { TipoVisita } from "@gcMobile/store/TipoVisitas/types";

type FilterProps = {
	filters: TipoVisita[];
};

const Filter = ({ filters }: FilterProps) => {
	const [selectedTabs, setSelectedTabs] = useState<string[]>([]);

	const toggleTab = (tabName: string) => {
		if (selectedTabs.includes(tabName)) {
			setSelectedTabs(selectedTabs.filter((tab) => tab !== tabName));
		} else {
			setSelectedTabs([...selectedTabs, tabName]);
		}
	};

	return (
		<View style={FilterStyles.container}>
			<Text style={FilterStyles.mainText}>Filter:</Text>
			{filters.map((filter: TipoVisita) => (
				<TouchableOpacity
					style={[
						FilterStyles.button,
						FilterStyles.tabNotSelected,
						selectedTabs.includes(`${filter.id}`) && {
							backgroundColor: filter.color,
						},
					]}
					onPress={() => toggleTab(`${filter.id}`)}>
					<Text style={FilterStyles.buttonText}>{filter.tipo_visita}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Filter;
