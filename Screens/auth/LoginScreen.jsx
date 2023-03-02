import { useState } from "react";
import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Button from "../../components/Button/ButtonAuth";
import ButtonTouchable from "../../components/Button/ButtonTouchable";

import { H3Text, TextH1 } from "../../components/Text/Text";
import { styles } from "./styles";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const inputHandlerEmail = (text) => setEmail(text);
  const inputHandlerPasswod = (text) => setPassword(text);

  const secureTextEntry = () => {
    secureText ? setSecureText(false) : setSecureText(true);
  };

  async function HendelSumdit() {
    console.log(`email-${email}`, `password-${password}`);
    await navigation.navigate("Post")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ImageBackground
          source={require("../../assets/PhotoG.png")}
          style={{ width: "auto", height: 812 }}
        >
          <View style={{ ...styles.authLogin }}>
            <KeyboardAvoidingView
              style={styles.containerKeyboardLogin}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.title}>
                <TextH1 title={"Войти"}></TextH1>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                value={email}
                onChangeText={inputHandlerEmail}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={secureText}
                  value={password}
                  onChangeText={inputHandlerPasswod}
                />
                <Button
                  Boolean={false}
                  title={"Показать"}
                  onPress={secureTextEntry}
                />
              </View>
            </KeyboardAvoidingView>
            <View>
              <Button
                Boolean={true}
                style={{ backgroundColor: "#FF6C00" }}
                title={"Войти"}
                onPress={HendelSumdit}
              />
              <View style={styles.navigate}>
                <H3Text Boolean={true} title={"Нет аккаунта?"} />
                <ButtonTouchable
                  title="Зарегистрироваться"
                  onPress={() => navigation.navigate("Register")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
