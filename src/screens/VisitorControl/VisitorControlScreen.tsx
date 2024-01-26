import { View, Text } from "react-native";
import React from "react";
import Filter from "@gcMobile/components/Filter";
import Card from "@gcMobile/components/Card";
import { visitorControlStyles } from "./constants";
import CircularButton from "@gcMobile/components/CircularButton";

export default function VisitorControlScreen() {
  return (
    <View>
      <View style={visitorControlStyles.container}>
        <Filter />
        <View style={visitorControlStyles.addButton}>
          <CircularButton window={"Form"} />
        </View>
        <Card />
      </View>
    </View>
  );
}
