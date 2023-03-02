import { TouchableOpacity, View } from "react-native";
import { HeaderBack, HeaderLogaut } from "../Svg/Svg";
import { HeaderText } from "../Text/Text";
import { styles } from "./styles";

function Header({ onPress, title, Boolean }) {
  return (
    <View style={styles.containerHeader}>
      {Boolean ? (
        <View></View>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.svg}>
          <HeaderLogaut />
        </TouchableOpacity>
      )}
      <View>
        <HeaderText style={styles.text} title={title}></HeaderText>
      </View>
      {Boolean ? (
        <TouchableOpacity onPress={onPress} style={styles.svgLogout}>
          <HeaderBack />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
}

export default Header;
