import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../components/Button/ButtonAuth";
import ButtonTouchable from "../components/Button/ButtonTouchable";
import ComponentsHeader from "../components/Header/Header";
import RegisterFormImg from "../components/ImgUser/RegisterFormImg";
import { Basker, Geolocation } from "../components/Svg/Svg";

import { H3Text } from "../components/Text/Text";

function CreatePostsScreen({ navigation }) {
  const [fileResponse, setFileResponse] = useState("");
  const [open, setOpen] = useState();
  const [style, setStyle] = useState({
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  });
  const [name, setName] = useState("");
  const [geolocation, setGeolocation] = useState("");

  const HandelOn = () => {
    if (geolocation && name && fileResponse) {
      setStyle({ backgroundColor: "#FF6C00", color: "#FFFFFF" });
      return;
    } else {
      setStyle({ backgroundColor: "#F6F6F6", color: "#BDBDBD" });
      return;
    }
  };

  const inputHandlerName = (text) => {
    setName(text);
    HandelOn();
  };
  const inputHandlerGeolocation = (text) => {
    setGeolocation(text);
    HandelOn();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
        <View>
          <ComponentsHeader
            title={"Создать публикацию"}
            Boolean={false}
            onPress={() => navigation.navigate("Post")}
          />
        </View>
        <View style={styles.main}>
          <RegisterFormImg
            Boolean={true}
            fileResponse={fileResponse}
            setFileResponse={setFileResponse}
          />
          <View style={styles.title}>
            <H3Text
              style={styles.h3}
              title={fileResponse ? "Редактировать фото" : "Загрузите фото"}
              Boolean={true}
            ></H3Text>
          </View>
          <View style={styles.continer}>
            <TextInput
              style={styles.input}
              placeholder="Название..."
              value={name}
              onChangeText={inputHandlerName}
            />
          </View>
          <View style={styles.continer}>
            <Geolocation />
            <TextInput
              style={styles.input}
              placeholder="Местность..."
              value={geolocation}
              onChangeText={inputHandlerGeolocation}
            />
          </View>
          <View style={styles.continerBottom}>
            <Button
              Boolean={true}
              style={style}
              title={"Опубликовать"}
              onPress={null}
            />
          </View>
          <ButtonTouchable
            props={<Basker />}
            Boolean={false}
            style={styles.Basker}
            onPress={() => navigation.navigate("Post")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CreatePostsScreen;

const styles = StyleSheet.create({
  h3: {
    color: "rgba(189, 189, 189, 1)",
  },
  title: {
    marginBottom: 40,
    marginTop: 8,
    width: 340,
  },
  Basker: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  main: {
    paddingTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  continer: {
    flexDirection: "row",
    width: 343,
    paddingBottom: 15,
    marginBottom: 32,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  continerBottom: {
    marginBottom: 100,
  },
  input: {
    width: 343,
  },
});
