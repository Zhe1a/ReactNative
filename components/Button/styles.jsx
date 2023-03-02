import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appButtonContainer: {
    display: "flex",
    justifyContent: "center",
    width: 343,
    height: 51,
    borderRadius: 100,
  },

  appButtonContainerAuth: {
    top: 15,
    left: 240,
    position: "absolute",
    width: 72,
    height: 19,
    display: "flex",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    fillColor: "#FFFFFF",
  },
});
