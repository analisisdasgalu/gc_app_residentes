import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FilterStyles, colorFilters } from "./constants";
import { TipoVisita } from "@gcMobile/store/TipoVisitas/types";
import { colors } from "@gcMobile/theme/default.styles";

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
			{filters?.map((filter: TipoVisita, index: number) => (
				<TouchableOpacity
					key={filter.id}
					style={{
						height: 40,
						borderRadius: 30,
						paddingHorizontal: 10,
						marginHorizontal: 1,
						backgroundColor: selectedTabs.includes(`${filter.id}`)
							? colorFilters[index]
							: colors.gray,
					}}
					onPress={() => toggleTab(`${filter.id}`)}>
					<Text style={FilterStyles.buttonText}>{filter.tipo_visita}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Filter;
