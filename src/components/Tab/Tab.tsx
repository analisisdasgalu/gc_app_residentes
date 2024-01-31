import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TabStyles } from "./constants";
interface ITabProps {
  selectedTab: (_s: string) => void;
}

const Tab = ({ selectedTab }: ITabProps) => {
  const [currentTab, setCurrentTab] = useState("VisitorControl");
  const openTab = (tabName: string) => {
    selectedTab(tabName);
    setCurrentTab(tabName);
  };
  return (
    <View style={TabStyles.container}>
      <View style={TabStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => openTab("VisitorControl")}
          style={[
            currentTab !== "VisitorControl" && TabStyles.button,
            currentTab === "VisitorControl" && TabStyles.selectedTab,
          ]}
        >
          <Text
            style={[
              TabStyles.buttonText,
              currentTab === "VisitorControl" && TabStyles.selectedTabText,
            ]}
          >
            Control de visitantes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openTab("VisitHistory")}
          style={[
            currentTab !== "VisitHistory" && TabStyles.button,
            currentTab === "VisitHistory" && TabStyles.selectedTab,
          ]}
        >
          <Text
            style={[
              TabStyles.buttonText,
              currentTab === "VisitHistory" && TabStyles.selectedTabText,
            ]}
          >
            Histórico de visitas
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;
