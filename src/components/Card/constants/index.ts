import { StyleSheet, Dimensions } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    padding: "3%",
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
    height: "100%",
  },
  textType: {
    fontWeight: "bold",
    color: colors.gray,
  },
  dataText: {
    color: colors.black,
    marginBottom: "3%",
    fontWeight: "400",
  },
  descriptionText: {
    color: colors.gray,
    marginBottom: "4%",
  },
  typeIcon: {
    backgroundColor: colors.aqua,
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: "5%",
  },
  column: {},
});
