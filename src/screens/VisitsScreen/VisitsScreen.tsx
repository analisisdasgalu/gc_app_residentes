import { View, Text } from "react-native";
import React, { useState } from "react";
import Tab from "@gcMobile/components/Tab";
import VisitorControlScreen from "../VisitorControl";
import VisitHistoryScreen from "../VisitHistory";
import { visitsStyle } from "./constants";

const VisitsScreen = () => {
  const [selectedTab, setSelectedTab] = useState<string>();
  const getSelectedValue = (value: string) => {
    if (value) setSelectedTab(value);
  };
  return (
    <View>
      <Tab selectedTab={getSelectedValue} />
      <View style={selectedTab === "VisitHistory" && visitsStyle.hidden}>
        <VisitorControlScreen />
      </View>
      <View
        style={
          !selectedTab || selectedTab === "VisitorControl"
            ? visitsStyle.hidden
            : undefined
        }
      >
        <VisitHistoryScreen />
      </View>
    </View>
  );
};

export default VisitsScreen;
