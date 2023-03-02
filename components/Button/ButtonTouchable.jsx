import { TouchableOpacity } from "react-native";
import { TextH3 } from "../Text/Text";
import { styles } from "./styles";

function ButtonTouchable({ onPress, props, Boolean, title, style }) {
  return (
    <TouchableOpacity
      style={Boolean ? { ...styles.active } : style}
      onPress={onPress}
    >
      {props}
      {title && <TextH3 style={{ marginLeft: 8 }} title={title} />}
    </TouchableOpacity>
  );
}

export default ButtonTouchable;
