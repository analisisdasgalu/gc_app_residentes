import { StyleSheet } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const circularBtnStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: colors.yellow,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
