import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextH3 } from "../Text/Text";
import { styles } from "./styles";

function ButtonAuth({ style, onPress, title, Boolean }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Boolean
          ? { ...styles.appButtonContainer, ...style }
          : styles.appButtonContainerAuth
      }
    >
      <TextH3
        style={
          Boolean
            ? {
                color: "#FFFFFF",
              }
            : { color: "#1B4371" }
        }
        title={title}
      ></TextH3>
    </TouchableOpacity>
  );
}

export default ButtonAuth;
