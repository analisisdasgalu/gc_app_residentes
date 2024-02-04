import { StyleSheet } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const circularBtnStyles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: colors.yellow,
    alignItems: "center",

    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
