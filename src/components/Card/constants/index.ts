import { StyleSheet, Dimensions } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const cardStyles = StyleSheet.create({
  padding: {
    padding: "3%",
  },
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    width: "94%",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  row: {
    flexDirection: "row",
  },
  data: {
    marginLeft: "4%",
  },
  typeContainer: {
    borderRightWidth: 1,
    width: "15%",
    alignItems: "center",
  },
  textType: {
    fontWeight: "bold",
    color: colors.gray,
  },
  dataText: {
    color: colors.black,
    fontWeight: "400",
    padding: "1%",
  },
  descriptionText: {
    color: colors.gray,
    padding: "1%",
  },
  typeIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  column: {
    flexDirection: "column",
  },
});
