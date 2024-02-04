import { StyleSheet } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";
import { filterPalette } from "@gcMobile/theme/default.styles";
export const FilterStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    height: 60,
    width: "100%",
    paddingHorizontal: "10%",
  },
  mainText: {
    color: colors.black,
    paddingRight: 10,
  },
  button: {
    height: 40,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 1,
  },
  buttonText: {
    textAlign: "center",
    paddingTop: 10,
    color: colors.white,
  },

  buttonBlue: {
    backgroundColor: filterPalette.blue,
  },
  buttonOrange: {
    backgroundColor: filterPalette.orange,
  },
  buttonBrown: {
    backgroundColor: filterPalette.brown,
  },
  tabNotSelected: {
    backgroundColor: colors.lightGray2,
  },
});
