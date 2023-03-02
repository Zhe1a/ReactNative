import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  authRegister: {
    top: 320,
    minHeight: 550,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 16,
  },
  authLogin: {
    minHeight: 490,
    top: 380,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 16,
  },
  input: {
    position: "relative",
    width: 343,
    height: 50,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },

  containerKeyboardLogin: {
    paddingVertical: 33,
  },
  containerKeyboardRegister: {
    paddingVertical: 32,
  },
  title: {
    marginBottom: 32,
  },
  navigate: {
    marginTop:16,
    flexDirection: "row",
    width: 340,
    justifyContent: "center",
    alignItems: "center",
  },
});
