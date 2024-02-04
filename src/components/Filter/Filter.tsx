import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FilterStyles } from "./constants";

const Filter = () => {
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
      <TouchableOpacity
        style={[
          FilterStyles.button,
          FilterStyles.tabNotSelected,
          selectedTabs.includes("Visit") && FilterStyles.buttonBlue,
        ]}
        onPress={() => toggleTab("Visit")}
      >
        <Text style={FilterStyles.buttonText}>Visita</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FilterStyles.button,
          FilterStyles.tabNotSelected,
          selectedTabs.includes("Service") && FilterStyles.buttonOrange,
        ]}
        onPress={() => toggleTab("Service")}
      >
        <Text style={FilterStyles.buttonText}>Serv. doméstico</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          FilterStyles.button,
          FilterStyles.tabNotSelected,
          selectedTabs.includes("Provider") && FilterStyles.buttonBrown,
        ]}
        onPress={() => toggleTab("Provider")}
      >
        <Text style={FilterStyles.buttonText}>Proveedor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
