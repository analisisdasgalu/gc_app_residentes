import { View, Text, ScrollView } from "react-native";
import React from "react";
import Filter from "@gcMobile/components/Filter";
import Card from "@gcMobile/components/Card";
import { visitorControlStyles } from "./constants";
import CircularButton from "@gcMobile/components/CircularButton";
import { colors } from "@gcMobile/theme/default.styles";
import Button from "@gcMobile/components/Button";
import { logout } from "../Login/constants";
import visitorControlData from "./constants/visitorControlData.json";
import { circularBtnStyles } from "@gcMobile/components/CircularButton/constants";

export default function VisitorControlScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 0.1, backgroundColor: "blue" }}>
        <Filter />
      </View>
      <View
        style={{
          flex: 0.1,
          flexDirection: "row-reverse",
          backgroundColor: "green",
        }}
      >
        <CircularButton
          styles={circularBtnStyles.container}
          window={"Form"}
          icon="plus"
        />
      </View>
      <View style={{ flex: 0.999, alignItems: "center" }}>
        {/* Scroll para las cards */}
        {visitorControlData.map((data: any, index: number) => (
          <Card jsonData={data} />
        ))}
      </View>
    </View>
  );
}
