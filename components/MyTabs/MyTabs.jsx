import { StyleSheet, View } from "react-native";

export function SvgTabs({ name, size, color }) {
  console.log(color);
  return (
    <View style={{ ...styles.active, ...{ backgroundColor: color } }}>
      <View style={{ ...size, ...color }}>{name}</View>
    </View>
  );
}



const styles = StyleSheet.create({
  active: {
    marginTop: 20,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
