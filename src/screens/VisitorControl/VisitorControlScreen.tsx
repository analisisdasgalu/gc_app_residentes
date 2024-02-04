import { View, Text } from "react-native";
import React from "react";
import Filter from "@gcMobile/components/Filter";
import Card from "@gcMobile/components/Card";
import { visitorControlStyles } from "./constants";
import CircularButton from "@gcMobile/components/CircularButton";
import { colors } from "@gcMobile/theme/default.styles";
import Button from "@gcMobile/components/Button";
import { logout } from "../Login/constants";
import visitorControlData from "./constants/visitorControlData.json";

export default function VisitorControlScreen({ navigation }: any) {
  return (
    <View>
      <View style={visitorControlStyles.container}>
        <Filter />
        <View style={visitorControlStyles.addButton}>
          <CircularButton window={"Form"} />
        </View>
        <Card jsonData={visitorControlData} />
      </View>
    </View>
  );
}
