import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FilterStyles, colorFilters } from "./constants";
import { TipoVisita } from "@gcMobile/store/TipoVisitas/types";
import { colors } from "@gcMobile/theme/default.styles";

type FilterProps = {
	filters: TipoVisita[];
	handleFilters: (filters: string[]) => void;
};

const Filter = ({ filters, handleFilters }: FilterProps) => {
	const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

	const toggleFilter = (filter: string) => {
		if (selectedFilter.includes(filter)) {
			setSelectedFilter(selectedFilter.filter((item) => item !== filter));
		} else {
			setSelectedFilter((prev) => [...prev, filter]);
		}
	};

	useEffect(() => {
		handleFilters(selectedFilter);
	}, [selectedFilter]);

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
						backgroundColor: selectedFilter.includes(`${filter.id}`)
							? colorFilters[index]
							: colors.gray,
					}}
					onPress={() => toggleFilter(`${filter.id}`)}>
					<Text style={FilterStyles.buttonText}>{filter.tipo_visita}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Filter;
