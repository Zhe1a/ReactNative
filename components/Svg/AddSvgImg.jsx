import { TouchableOpacity, View } from "react-native";
import { AddComment, Addregister, GetRegister } from "./Svg";

export function AddSvgImg({ Boolean, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      {Boolean ? (
        <Addregister />
      ) : (
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <GetRegister />
        </View>
      )}
    </TouchableOpacity>
  );
}

export function SvgAddComment({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        backgroundColor: "#FF6C00",
        left: 300,
        top: 5.5,
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
      }}
    >
      <AddComment />
    </TouchableOpacity>
  );
}
