import { StyleSheet } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

const shadow = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.35,
  shadowRadius: 5,
  elevation: 10,
};

export const circularBtnStyles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: "5%",
    backgroundColor: colors.yellow,
    alignItems: "center",
    ...shadow,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
