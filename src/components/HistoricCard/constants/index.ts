import { StyleSheet } from "react-native";
import { colors } from "@gcMobile/theme/default.styles";

export const historicCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    borderWidth: 0.4,
    borderColor: colors.gray,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  head: {
    flexDirection: "row",
  },
  nameContainer: {
    paddingRight: "8%",
  },
  line: {
    marginTop: "2%",
    borderBottomWidth: 4,
    borderColor: colors.yellow,
    height: 1,
    width: 120,
    marginBottom: "2%",
  },
  body: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: "-60%",
    marginTop: "-5%",
  },
  iconLogout: {
    backgroundColor: colors.blue,
    borderRadius: 100,
    height: 28,
    width: 28,
  },
});
